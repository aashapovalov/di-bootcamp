import axios from "axios";


const userForm = document.querySelector("#login-form");
const errorElement = document.getElementById("login-error");

async function postUser(event) {
  event.preventDefault();
  const formData = new FormData(userForm);
  const username = formData.get("username");
  if (!username) {
    errorElement.textContent = "Username is required!"
    return;
  }
  const userJSON = JSON.stringify({username: username});
  try {
    const resolve = await axios.post("/users", userJSON);
    return resolve.data;
  } catch (error) {
    errorElement.textContent = error.message;
  }
}

function renderResults() {

}

function renderGame(data) {
  function renderGame(data) {
    const app = document.getElementById("app");
    if (!app) throw new Error('Missing #app container in HTML');

    const username = data?.username ?? "Player";
    const userID = data?.userID ?? "";
    const gameInfo = data?.gameInfo ?? {};
    const roundID = gameInfo?.roundID ?? "";
    const gameOptions = Array.isArray(gameInfo?.gameOptions) ? gameInfo.gameOptions : [];
    const userHistory = Array.isArray(data?.userHistory) ? data.userHistory : [];
    const lastAnswer = data?.lastAnswer ?? null;

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

    const historyRowsHtml = userHistory.length ? userHistory
            .map((row, idx) => {
              const round = row.roundID ?? row.roundId ?? idx + 1;
              const isCorrect = row.isCorrect;
              const chosen = row.chosenEmoji ?? row.chosen ?? row.chosenOption ?? "";
              const correct = row.correctEmoji ?? row.correct ?? row.winner ?? "";

              const resultText =
                  isCorrect === true ? "✅" : isCorrect === false ? "❌" : "";
              return `
            <tr>
              <td>${escapeHtml(String(round))}</td>
              <td>${escapeHtml(String(chosen))}</td>
              <td>${escapeHtml(String(correct))}</td>
              <td>${resultText}</td>
            </tr>
          `;
            })
            .join("")
        : `<tr><td colspan="4" class="history-empty">No results yet.</td></tr>`;

    app.innerHTML = `
    <div class="game-shell" data-user-id="${escapeHtml(userID)}" data-round-id="${escapeHtml(roundID)}">
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


}

