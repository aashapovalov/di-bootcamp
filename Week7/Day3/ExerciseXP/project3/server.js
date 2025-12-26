import express from 'express';
import session from 'express-session';
import { createServer } from "http";
import cors from "cors";

import { users, games, Game } from './gameState.js'

const app = express();

app.use(cors({
  origin: 'http://localhost:63342',
  credentials: true,
}))
app.use(express.json());
app.use(express.static('public'));

const server = createServer(app);

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
  name: 'strategyGame',
  cookie: {
    secure: false,
    sameSite: 'lax'
  }
}))

app.post('/api/login', (req, res) => {
  const { username } = req.body;
  const usernameTrimmed = username.trim();
  if (!usernameTrimmed) {
    return res.status(400).send('Username cannot be empty!');
  }
  users.add(usernameTrimmed);
  req.session.username = usernameTrimmed;
  return res.status(201).json({
    success: true,
    username: usernameTrimmed,
    message: `User ${usernameTrimmed} has logged in`
  });
})

app.get('/api/games', (req, res) => {
  const gamesList = games.
    filter(game => game.status === 'waiting').
    map(game => {
      return {
        status: game.status,
        gameID: game.id,
        player1: game.player1,
      }
    });
  return res.status(200).json(gamesList);
})

app.post('/api/games', (req, res) => {
  const user = req.session.username;
  if (!users.has(user)) {
    return res.status(404).send('User Not Found!');
  }
  const newGame = new Game(user);
  newGame.initiateGame()
  games.push(newGame);
  res.status(200).json(newGame);
})

app.post('/api/games/:gameID/join', (req, res) => {
  const username = req.session.username;
  const gameID = req.params.gameID;
  const gameIndex = games.findIndex(game => game.id === gameID);
  if (gameIndex === -1 ) {
    return res.status(404).send('Game Not Found!');
  }
  const game = games[gameIndex];
  if (game.status !== 'waiting') {
    return res.status(400).send('There is no opportunity to join this game. Please choose another one or try again!');
  }
  if (game.player1 === username) {
    return res.status(400).send("You can't join your own game!");
  }
  game.player2 = username;
  game.status = 'active';
  game.currentTurn = game.player1;
  return res.status(200).json(game);
})

app.get('/api/games/:gameID', (req, res) => {
  const gameID = req.params.gameID;
  const username = req.session.username;
  const gameIndex = games.findIndex(game => game.id === gameID);
  if (gameIndex === -1) {
    return res.status(404).send('Game Not Found!');
  }
  const game = games[gameIndex];
  if (username !== game.player1 && username !== game.player2) {
    return res.status(400).send('You cannot access this game. Please choose another one or try again!');
  }
  return res.status(200).json(game);
})

app.post('/api/games/:gameID/move', (req, res) => {
  const gameID = req.params.gameID;
  const username = req.session.username;
  const { direction } = req.body;

  console.log('=== MOVE REQUEST ===');
  console.log('Session username:', username);
  console.log('Game ID:', gameID);
  console.log('Direction:', direction);

  // Find game
  const gameIndex = games.findIndex(game => game.id === gameID);
  if (gameIndex === -1) {
    console.log('ERROR: Game not found');
    return res.status(404).send('Game not found!');
  }

  const game = games[gameIndex];

  console.log('Game currentTurn:', game.currentTurn);
  console.log('Is match?:', game.currentTurn === username);
  console.log('Player1:', game.player1);
  console.log('Player2:', game.player2);

  // Validate it's player's turn
  if (game.currentTurn !== username) {
    console.log('ERROR: Not your turn!');
    console.log(`Current turn: "${game.currentTurn}" vs Username: "${username}"`);
    return res.status(400).send('Not your turn!');
  }

  // Validate game is active
  if (game.status !== 'active') {
    return res.status(400).send('Game is not active!');
  }

  // Determine which player
  const isPlayer1 = game.player1 === username;
  const isPlayer2 = game.player2 === username;

  if (!isPlayer1 && !isPlayer2) {
    return res.status(403).send('You are not in this game!');
  }

  // Get current position
  const currentPos = isPlayer1 ? game.positions.player1 : game.positions.player2;

  // Calculate new position
  let newX = currentPos.x;
  let newY = currentPos.y;

  switch (direction) {
    case 'up':
      newY -= 1;
      break;
    case 'down':
      newY += 1;
      break;
    case 'left':
      newX -= 1;
      break;
    case 'right':
      newX += 1;
      break;
    default:
      return res.status(400).send('Invalid direction!');
  }

  // Validate move
  if (!isValidMoveServer(newX, newY, game)) {
    return res.status(400).send('Invalid move!');
  }

  // Update position
  if (isPlayer1) {
    game.positions.player1 = { x: newX, y: newY };
  } else {
    game.positions.player2 = { x: newX, y: newY };
  }

  console.log(`Move successful! New position: (${newX}, ${newY})`);

  // Check win condition (Phase 7 - for now, just switch turns)
  // TODO: Check if player reached opponent's base

  // Switch turns
  game.currentTurn = isPlayer1 ? game.player2 : game.player1;
  console.log('Turn switched to:', game.currentTurn);

  return res.status(200).json(game);
});

// Helper function for server-side validation
function isValidMoveServer(x, y, game) {
  // Check bounds
  if (x < 0 || x > 9 || y < 0 || y > 9) {
    return false;
  }

  // Check obstacles
  const hasObstacle = game.obstacles.some(obs => obs.x === x && obs.y === y);
  if (hasObstacle) {
    return false;
  }

  // Allow moving through opponent (to reach their base)

  return true;
}

server.listen(5050, () => {
  console.log(`Server running on http://localhost:5050`);
});