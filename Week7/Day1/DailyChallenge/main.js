import {getQuizInfo, getScore, postRound} from "./api.js";
import {renderGame, renderScore} from "./components.js";

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector(".start-btn");
  if (!startBtn) return;

  startBtn.addEventListener("click", async () => {
    const data = await getQuizInfo();
    if (data) renderGame(data);
  });

  document.addEventListener("submit", async (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    if (form.id !== "answer-form") return;

    event.preventDefault();

    const data = await postRound(form);
    if (data) renderGame(data);
  });
});


document.addEventListener("click", async (event) => {
  const button = event.target;
  if (button.id !== "final-score-btn") return;

  const data = await getScore();
  if (data) renderScore(data);
})
