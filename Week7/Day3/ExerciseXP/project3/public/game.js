const player1Name = document.getElementById('player1-name');
const player2Name = document.getElementById('player2-name');
const gameBoard = document.getElementById('game-board');

document.addEventListener('DOMContentLoaded', async () => {
  console.log('🚀 DOMContentLoaded FIRED!');

  const modalWindow = document.getElementById('game-over-modal');
  const backToLobbyBtn = document.getElementById('back-to-lobby-btn');
  const gameTitle = document.getElementById('game-title');

  const params = new URLSearchParams(window.location.search);
  const gameID = params.get('gameID');
  const username = localStorage.getItem('username');

  console.log('📍 gameID:', gameID);
  console.log('📍 username:', username);

  if (!gameID || !username) {
    console.log('❌ Missing gameID or username - redirecting');
    window.location.href = `index.html`
    return;
  }

  console.log('📡 Fetching game state...');
  const currentGameState = await getGame(gameID);
  console.log('📦 Game state received:', currentGameState);

  console.log('🎨 Rendering game info...');
  renderGameInfo(currentGameState);

  console.log('🎨 Rendering grid...');
  renderGrid(currentGameState);

  console.log('🎮 Updating controls...');
  updateControls(currentGameState, username);

  console.log('✅ All rendering complete!');

  // THEN get button references (AFTER they exist)
  const moveUpBtn = document.getElementById('move-up');
  const moveDownBtn = document.getElementById('move-down');
  const moveLeftBtn = document.getElementById('move-left');
  const moveRightBtn = document.getElementById('move-right');

  // THEN add event listeners
  moveUpBtn.addEventListener('click', () => makeMove(gameID, 'up'));
  moveDownBtn.addEventListener('click', () => makeMove(gameID, 'down'));
  moveLeftBtn.addEventListener('click', () => makeMove(gameID, 'left'));
  moveRightBtn.addEventListener('click', () => makeMove(gameID, 'right'));

  backToLobbyBtn.addEventListener('click', () => {
    window.location.href = `index.html`;
  })
})

// ===========================
// RENDER FUNCTIONS
// ===========================

/**
 * Renders game information (players, turn indicator)
 */
function renderGameInfo(game) {
  // Display player names
  player1Name.textContent = game.player1;
  player2Name.textContent = game.player2 || 'Waiting...';

  // Update turn indicator
  const turnIndicator = document.getElementById('turn-indicator');
  const username = localStorage.getItem('username');

  if (game.status === 'finished') {
    turnIndicator.textContent = `Game Over! Winner: ${game.winner}`;
    turnIndicator.classList.remove('your-turn');
  } else if (game.status === 'waiting') {
    turnIndicator.textContent = 'Waiting for opponent...';
    turnIndicator.classList.remove('your-turn');
  } else if (game.currentTurn === username) {
    turnIndicator.textContent = '🎯 Your turn! Make your move';
    turnIndicator.classList.add('your-turn');
  } else {
    turnIndicator.textContent = `Waiting for ${game.currentTurn}...`;
    turnIndicator.classList.remove('your-turn');
  }
}

/**
 * Renders the 10x10 game grid
 */
function renderGrid(game) {
  // Clear existing grid
  gameBoard.innerHTML = '';

  // Create 10x10 grid (y: 0-9, x: 0-9)
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.dataset.x = x;
      cell.dataset.y = y;

      // Determine what's in this cell
      const cellType = getCellType(x, y, game);
      const cellContent = getCellContent(cellType);

      // Add appropriate class
      cell.classList.add(cellType);

      // Add content
      if (cellContent) {
        const contentSpan = document.createElement('span');
        contentSpan.className = 'cell-content';
        contentSpan.textContent = cellContent;
        cell.appendChild(contentSpan);
      }

      gameBoard.appendChild(cell);
    }
  }
}

/**
 * Updates control buttons based on whose turn it is
 */
function updateControls(game, username) {
  console.log('🎮 updateControls called!');
  console.log('Game:', game);
  console.log('Username:', username);
  console.log('Game status:', game.status);
  console.log('Current turn:', game.currentTurn);
  const controlsStatus = document.getElementById('controls-status');
  const moveUpBtn = document.getElementById('move-up');
  const moveDownBtn = document.getElementById('move-down');
  const moveLeftBtn = document.getElementById('move-left');
  const moveRightBtn = document.getElementById('move-right');

  if (game.status === 'finished') {
    // Game over - disable all
    moveUpBtn.disabled = true;
    moveDownBtn.disabled = true;
    moveLeftBtn.disabled = true;
    moveRightBtn.disabled = true;
    controlsStatus.textContent = `Game Over! ${game.winner} won!`;
  } else if (game.status === 'waiting') {
    // Waiting - disable all
    moveUpBtn.disabled = true;
    moveDownBtn.disabled = true;
    moveLeftBtn.disabled = true;
    moveRightBtn.disabled = true;
    controlsStatus.textContent = 'Waiting for opponent to join...';
  } else if (game.currentTurn === username) {
    // Your turn - enable only valid moves
    const validMoves = getValidMoves(game, username);
    moveUpBtn.disabled = !validMoves.up;
    moveDownBtn.disabled = !validMoves.down;
    moveLeftBtn.disabled = !validMoves.left;
    moveRightBtn.disabled = !validMoves.right;
    controlsStatus.textContent = 'Your turn! Choose a direction to move.';
  } else {
    // Opponent's turn - disable all
    moveUpBtn.disabled = true;
    moveDownBtn.disabled = true;
    moveLeftBtn.disabled = true;
    moveRightBtn.disabled = true;
    controlsStatus.textContent = `Waiting for ${game.currentTurn} to move...`;
  }
}

// ===========================
// HELPER FUNCTIONS
// ===========================

/**
 * Determines what type of cell this is
 */
function getCellType(x, y, game) {
  // Check player positions first (highest priority)
  if (game.positions.player1.x === x && game.positions.player1.y === y) {
    return 'player1';
  }
  if (game.positions.player2.x === x && game.positions.player2.y === y) {
    return 'player2';
  }

  // Check obstacles
  if (isObstacle(x, y, game.obstacles)) {
    return 'obstacle';
  }

  // Check bases (show even when empty)
  if (game.bases.player1.x === x && game.bases.player1.y === y) {
    return 'base1';
  }
  if (game.bases.player2.x === x && game.bases.player2.y === y) {
    return 'base2';
  }

  // Empty cell
  return 'empty';
}

/**
 * Returns the content (emoji/symbol) for each cell type
 */
function getCellContent(cellType) {
  const contentMap = {
    'player1': '🔵',
    'player2': '🔴',
    'obstacle': '■',
    'base1': '🏠',
    'base2': '🏠',
    'empty': ''
  };

  return contentMap[cellType] || '';
}

/**
 * Checks if a position has an obstacle
 */
function isObstacle(x, y, obstacles) {
  return obstacles.some(obstacle => obstacle.x === x && obstacle.y === y);
}

/**
 * Checks if it's the current user's turn
 */
function isMyTurn(game, username) {
  return game.currentTurn === username && game.status === 'active';
}

async function getGame(gameID) {
  const BASE_URL = 'http://localhost:5050/';
  const url = `${BASE_URL}api/games/${gameID}`;
  try {
    const response = await fetch(url, {
      credentials: 'include'
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

function getValidMoves(game, username) {
  console.log('=== getValidMoves Debug ===');
  console.log('Username:', username);
  console.log('Player1:', game.player1);
  console.log('Player2:', game.player2);
  console.log('Current Turn:', game.currentTurn);
  console.log('Game Status:', game.status);

  // Figure out which player you are
  const isPlayer1 = game.player1 === username;
  const isPlayer2 = game.player2 === username;

  console.log('isPlayer1:', isPlayer1);
  console.log('isPlayer2:', isPlayer2);

  if (!isPlayer1 && !isPlayer2) {
    console.log('ERROR: Not a player in this game!');
    return { up: false, down: false, left: false, right: false };
  }

  const currentPos = isPlayer1 ? game.positions.player1 : game.positions.player2;
  console.log('Current Position:', currentPos);

  // Check each direction
  const validMoves = {
    up: isValidMove(currentPos.x, currentPos.y - 1, game),
    down: isValidMove(currentPos.x, currentPos.y + 1, game),
    left: isValidMove(currentPos.x - 1, currentPos.y, game),
    right: isValidMove(currentPos.x + 1, currentPos.y, game)
  };

  console.log('Valid Moves:', validMoves);
  console.log('=========================');

  return validMoves;
}

function isValidMove(x, y, game) {
  // Check bounds
  if (x < 0 || x > 9 || y < 0 || y > 9) return false;

  // Check obstacle
  if (isObstacle(x, y, game.obstacles)) return false;

  // Check other player (optional - can you move through opponent?)
  // For now, let's allow it (you can step on opponent's base to win)

  return true;
}

async function makeMove(gameID, direction) {
  const BASE_URL = 'http://localhost:5050/';
  const url = `${BASE_URL}api/games/${gameID}/move`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ direction })
    });

    if (!response.ok) {
      const error = await response.text();
      alert(`Move failed: ${error}`);
      return;
    }

    const updatedGame = await response.json();

    // Re-render with updated game state
    renderGameInfo(updatedGame);
    renderGrid(updatedGame);
    updateControls(updatedGame, localStorage.getItem('username'));

  } catch (error) {
    console.error('Move error:', error);
    alert('Failed to make move. Please try again.');
  }
}

