const loginForm = document.getElementById('login-form');
const loginModal = document.getElementById('login-section');
const usernameInput = document.getElementById('username-input');
const loginError = document.getElementById('login-error');
const currentUser = document.getElementById('current-username');
const lobbySection = document.getElementById('lobby-section');
const refreshGamesBtn = document.getElementById('refresh-games-btn');
const createGameBtn = document.getElementById('create-game-btn');
const noGamesElement = document.querySelector('.no-games');
const gameListElement = document.getElementById('games-list');

const BASE_URL = 'http://localhost:5050/';

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  loginError.textContent = '';
  const username = usernameInput.value.trim();
  if (!username) {
    loginError.textContent = 'Username should not be empty';
    return;
  }
  try {
    const response = await postUserName(username);
    if (response && response.success) {
      localStorage.setItem('username', response.username);
      currentUser.textContent = response.username;
      loginModal.classList.add('hidden');
      lobbySection.classList.remove('hidden');
    } else {
      loginError.textContent = response?.message || 'Login failed.';
    }
  } catch (error) {
    console.error('Login error: ', error);
    loginError.textContent = 'Connection error. Make sure your server is running.';
  }
})

refreshGamesBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  try {
    const gamesList = await getAllGames();
    if (!gamesList || gamesList.length === 0) {
      const option = Math.floor(Math.random() * 3);
      noGamesElement.textContent = [
          'Still no games available. Consider starting one!',
          'No luck - no games to play. Create your own game.!',
          "Unfortunately, didn't find a game for you. Create a new one!"
      ][option];
      return;
    }
    gameListElement.textContent = "";
    noGamesElement.textContent = "";
    for (let i = 0; i < gamesList.length; i++) {
      const gameOptionContainer = document.createElement('div');
      gameOptionContainer.id = `${gamesList[i].id}`;
      gameOptionContainer.classList.add('game-option-container');
      gameOptionContainer.innerHTML = `
      <p>Game ${i + 1}, 
        <span>Player1: ${gamesList[i].player1}
        </span>
      </p>
      <button class="join-game-btn" data-game-id="${gamesList[i].gameID}"">Join the game</button>
    `
      gameListElement.appendChild(gameOptionContainer);

    }
  } catch (error) {
    console.error('Connection error: ', error);
    noGamesElement.textContent = 'Connection error. Make sure your server is running.';
  }

})

gameListElement.addEventListener('click', async (event) => {
  event.preventDefault();
  if (event.target.classList.contains("join-game-btn")) {
    const gameID = event.target.dataset.gameId;
    try {
      const game = await joinGame(gameID);
      if (!game) {
        alert("Couldn't find a game!");
        refreshGamesBtn.click();
      }
      window.location.href = `game.html?gameID=${gameID}`;
      } catch (error) {
      console.error('Connection error: ', error);
    }
  }
})

createGameBtn.addEventListener('click', async (event) => {
  event.preventDefault();
  try {
    createGameBtn.disabled = true;
    createGameBtn.textContent = 'Creating...';
    const newGame = await createGame();
    createGameBtn.disabled = false;
    createGameBtn.textContent = 'Create New Game';
    refreshGamesBtn.click();
  } catch (error) {
    console.error('Connection error: ', error);
    noGamesElement.textContent = 'Connection error. Make sure your server is running.';
  }
})

async function postUserName(username) {
  const url = `${BASE_URL}api/login`
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({username: username}),
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function getAllGames() {
  const url = `${BASE_URL}api/games`;
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function createGame() {
  const url = `${BASE_URL}api/games`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include'
    });
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getGame(gameID) {
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

async function joinGame(gameID) {
  const url = `${BASE_URL}api/games/${gameID}/join`;
  try {
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include'
    })
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}