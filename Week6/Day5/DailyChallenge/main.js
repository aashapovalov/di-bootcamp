const errorElement = document.getElementById("login-error");
const userForm = document.querySelector(".login-form");
const loginContainer = document.querySelector(".container");

async function postUser(event) {
  event.preventDefault();
  const formData = new FormData(userForm);
  const username = formData.get("username");
  if (!username) {
    errorElement.textContent = "Username is required!"
    return;
  }
  try {
    const response = await axios.post("http://127.0.0.1:5050/login", {username});
    return response.data;
  } catch (error) {
    const message =
        error?.response?.data?.message ||
        error?.response?.data ||
        error?.message ||
        "Request failed";

    if (errorElement) errorElement.textContent = String(message);
    return null;
  }
}

async function postRound(event) {
  event.preventDefault();

  const gameShell = document.querySelector(".game-shell");
  if (!gameShell) {
    errorElement.textContent = "Game Shell is not initialized!";
    return
  }
  const userID = gameShell.getAttribute("data-user-id");
  const roundID = gameShell.getAttribute("data-round-id");
  if (!userID || !roundID) {
    errorElement.textContent = "User ID or round ID is not defined!";
    return
  }

  const guessForm = document.getElementById("guess-form");
  if (!guessForm) return;
  const formData = new FormData(guessForm);
  const userChoice = formData.get("emojiOption");
  if (!userChoice) {
    errorElement.textContent = "You should choose an option!"
    return;
  }
  const emojiOption = Number(userChoice);
  try {
    const response = await axios.post("http://127.0.0.1:5050/guess", {userID, roundID, emojiOption});
    return response.data;
  } catch (error) {
    const message =
        error?.response?.data?.message ||
        error?.response?.data ||
        error?.message ||
        "Request failed";

    if (errorElement) errorElement.textContent = String(message);
    return null;
  }
}

  function renderGame(data) {
    loginContainer.style.display = "none";
    const app = document.getElementById("app");
    if (!app) throw new Error('Missing #app container in HTML');

    const username = data?.username ?? "Player";
    const userID = data?.userID ?? "";
    const gameInfo = data?.gameInfo ?? {};
    const roundID = gameInfo?.roundID ?? "";
    const gameOptions = Array.isArray(gameInfo?.gameOptions) ? gameInfo.gameOptions : [];
    const userHistory = Array.isArray(data?.userHistory) ? data.userHistory : [];
    const lastAnswer = data?.lastAnswer ?? null;
    console.log(gameOptions);

    if (gameOptions.length === 0) {
      app.innerHTML = `
      <div class="container">
        <h1 class="title">Emoji Guess Game 🎯</h1>
        <p style="text-align:center;margin-top:10px;">
          No game options received from server.
        </p>
      </div>
    `;
      return;
    }

    const lastAnswerHtml = (() => {
      if (!lastAnswer) return "";
      const isCorrect = lastAnswer.isCorrect;

      if (isCorrect === null || typeof isCorrect === "undefined") return "";

      // show user-friendly status
      const text = isCorrect ? "✅ Correct!" : "❌ Wrong!";
      return `<div class="last-answer" aria-live="polite">${text}</div>`;
    })();

    const optionsHtml = gameOptions
        .map((opt, index) => {
          // opt can be {emoji, name} or something similar
          const emoji = opt.emoji ?? "❓";
          const name = opt.name ?? `Option ${index + 1}`;

          return `
        <label class="option">
          <input type="radio" name="emojiOption" value="${index}" />
          <span class="option-emoji" aria-hidden="true">${emoji}</span>
          <span class="option-name">${escapeHtml(name)}</span>
        </label>
      `;
        })
        .join("");

    const historyRowsHtml = userHistory.length
        ? userHistory
            .map((row, idx) => {
              const round = idx + 1;

              const chosenIndex =
                  row.userOptionIndex === null || typeof row.userOptionIndex === "undefined"
                      ? null
                      : Number(row.userOptionIndex);

              const correctIndex =
                  row.winnerOptionIndex === null || typeof row.winnerOptionIndex === "undefined"
                      ? null
                      : Number(row.winnerOptionIndex);

              const chosenEmoji =
                  chosenIndex === null ? "" : (row.gameOptions?.[chosenIndex]?.emoji ?? "");
              const correctEmoji =
                  chosenIndex === null
                      ? ""
                      : (row.gameOptions?.[correctIndex]?.emoji ?? "");


              const isCorrect =
                  chosenIndex === null || correctIndex === null ? null : chosenIndex === correctIndex;

              const resultText = isCorrect === true ? "✅" : isCorrect === false ? "❌" : "";

              return `
          <tr>
            <td>${escapeHtml(String(round))}</td>
            <td>${escapeHtml(String(chosenEmoji))}</td>
            <td>${escapeHtml(String(correctEmoji))}</td>
            <td>${resultText}</td>
          </tr>
        `;
            })
            .join("")
        : `<tr><td colspan="4" class="history-empty">No results yet.</td></tr>`;

    app.innerHTML = `
    <div class="game-shell" data-user-id="${userID}" data-round-id="${roundID}">
      <header class="game-header">
        <h1 class="game-title">Emoji Guess Game 🎯</h1>
        <div class="player">
          <span class="player-label">Player:</span>
          <span class="player-name">${escapeHtml(username)}</span>
        </div>
      </header>

      ${lastAnswerHtml}

      <section class="card">
        <h2 class="card-title">Guess the emoji</h2>

        <form id="guess-form" class="options">
          ${optionsHtml}

          <button type="submit" class="submit-button">Submit</button>
        </form>
      </section>

      <section class="card">
        <h2 class="card-title">Results</h2>
        <div class="table-wrap">
          <table class="history-table">
            <thead>
              <tr>
                <th>Round</th>
                <th>Chosen</th>
                <th>Correct</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              ${historyRowsHtml}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  `;
  }

  function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.querySelector(".login-form");
  if (!userForm) return;

  userForm.addEventListener("submit", async (event) => {
    const data = await postUser(event);
    renderGame(data);
  });
});

document.addEventListener("submit", async (event) => {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;

  if (form.id === "guess-form") {
    const data = await postRound(event);
    if (data) renderGame(data);
  }
});
