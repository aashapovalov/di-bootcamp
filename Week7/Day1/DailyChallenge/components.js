export function renderGame(gameInfo) {
  const startBtn = document.querySelector(".start-btn");
  const container = document.querySelector(".game-container");

  if (!container) {
    console.warn("renderGame: .game-container not found");
    return;
  }

  if (!gameInfo || typeof gameInfo !== "object") {
    console.warn("renderGame: invalid gameInfo", gameInfo);
    return;
  }

  // Hide Start button after first server response
  if (startBtn) startBtn.classList.add("is-hidden");

  if (gameInfo.isGameOver) {
    container.innerHTML = `
    <section class="game game--over">
      <h1 class="game__over-title">🎉 Game Over</h1>

      <p class="game__final-score">
        Your final score:
        <strong>${gameInfo.scoreCounter}</strong>
      </p>

      <button class="game__final-btn" id="final-score-btn">
        Get the final score
      </button>
    </section>
  `;

    return;
  }

  // Create UI skeleton only once
  let card = container.querySelector(".game");
  if (!card) {
    container.innerHTML = `
      <section class="game" aria-live="polite">
        <header class="game__header">
          <div class="game__meta">
            <div class="game__qnum" id="question-num"></div>
            <div class="game__score" id="score-counter"></div>
          </div>
          <h1 class="game__question" id="question-text"></h1>
        </header>

        <form class="answer" id="answer-form" autocomplete="off">
          <label class="answer__label" for="answer-input">Your answer</label>
          <div class="answer__row">
            <input
              class="answer__input"
              id="answer-input"
              name="answer"
              type="text"
              placeholder="Type your answer…"
              required
            />
            <button class="answer__btn" type="submit">Submit</button>
          </div>
          <div class="answer__hint" id="answer-hint" aria-live="polite"></div>
        </form>

        <div class="game__last" id="last-round" hidden></div>
      </section>
    `;

    // Optional: basic submit handler (prevents page reload)
    const form = container.querySelector("#answer-form");
    const hint = container.querySelector("#answer-hint");

    card = container.querySelector(".game");
  }
  card.dataset.questionNum = String(gameInfo.questionNum);


  const qNumEl = container.querySelector("#question-num");
  const qTextEl = container.querySelector("#question-text");
  const scoreEl = container.querySelector("#score-counter");
  const lastEl = container.querySelector("#last-round");
  const answerInput = container.querySelector("#answer-input");
  const answerHint = container.querySelector("#answer-hint");
  answerInput.setAttribute("name", "answer");

  if (!qNumEl || !qTextEl || !scoreEl || !lastEl) {
    console.warn("renderGame: required elements missing");
    return;
  }

  // Render current round
  qNumEl.textContent = `Question ${gameInfo.questionNum}`;
  qTextEl.textContent = gameInfo.question ?? "";
  scoreEl.textContent = `Score: ${gameInfo.scoreCounter ?? 0}`;

  // Reset hint on new render
  if (answerHint) answerHint.textContent = "";
  if (answerInput) {
    answerInput.value = "";
    answerInput.focus();
  }

  // Render last round info (optional)
  const last = gameInfo.lastRound;

  if (!last) {
    lastEl.hidden = true;
    lastEl.className = "game__last";
    lastEl.textContent = "";
    return;
  }

  const normalizeAnswer = (v) => {
    if (v == null) return "—";
    if (typeof v === "object") {
      return (
          v.correctAnswer ??
          v.answer ??
          v.text ??
          JSON.stringify(v)
      );
    }
    return String(v);
  };

  const verdict =
      last.isCorrect === true ? "✅ Correct" :
          last.isCorrect === false ? "❌ Wrong" :
              "⏳ Not answered";

  const userAnswerStr = normalizeAnswer(last.userAnswer);
  const correctAnswerStr = normalizeAnswer(last.correctAnswer);

  lastEl.hidden = false;
  lastEl.className = "game__last";
  if (last.isCorrect === true) lastEl.classList.add("is-correct");
  if (last.isCorrect === false) lastEl.classList.add("is-wrong");

  lastEl.textContent =
      `Last round (Q${last.questionNum}): ${verdict}. ` +
      `Your answer: ${userAnswerStr}. Correct answer: ${correctAnswerStr}.`;
}


export function renderScore(scoreInfo) {
  const container = document.querySelector(".game-container");
  let card = container.querySelector(".game");
  card.innerHTML = `
    <section class="game game--over">
    <h1 class="game__score">Your score is : ${scoreInfo}</h1>
    </section>
    `
}