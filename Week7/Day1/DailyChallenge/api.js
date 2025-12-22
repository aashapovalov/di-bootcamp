import {BASE_URL} from "./globals.js";

export async function getQuizInfo() {
  const fetchURL = BASE_URL + 'quiz';
  try {
    const response = await fetch(fetchURL);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function postRound(form) {
  const formData = new FormData(form);
  const userAnswer = formData.get("answer");
  const userAnswerStr = String(userAnswer ?? "").trim();

  if (!userAnswerStr) return null;

  const questionNum = Number(document.querySelector(".game")?.dataset.questionNum);
  console.log("userAnswer:", userAnswerStr, "questionNum:",  questionNum);

  const response = await fetch(BASE_URL + "quiz", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ questionNum, userAnswer: userAnswerStr }),
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

export async function getScore() {
  const fetchURL = BASE_URL + 'quiz/score';
  try {
    const response = await fetch(fetchURL);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
