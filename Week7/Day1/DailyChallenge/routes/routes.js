import express from 'express';
import {QUESTIONS} from "../globals.js";
import { state } from "../data.js";



function updateRound(req, res, next) {
  const questionNum = req.body.questionNum;
  const userAnswer = req.body.userAnswer;
  const roundEntry = state.scores.find(entry => entry.questionNum === questionNum);
  if (!roundEntry) {
    return res.status(404).send('Question Not Found');
  }
  roundEntry.userAnswer = userAnswer;
  roundEntry.isCorrect = userAnswer.toLowerCase() === roundEntry.correctAnswer.toLowerCase();
  if (roundEntry.isCorrect) {
    state.scoreCounter ++
  }
  next();
}

export const router = express.Router();
router.get('/quiz', (req, res) => {
  state.scores.length = 0;
  state.scoreCounter = 0;
  const questionNum = 1;
  const question = QUESTIONS[questionNum - 1].question;
  const roundScore = {questionNum, isCorrect: null, userAnswer: null, correctAnswer: QUESTIONS[questionNum - 1].answer};
  state.scores.push(roundScore);

  const gameInfo = {
    isGameOver: false,
    questionNum,
    question,
    lastRound: null,
    scoreCounter: state.scoreCounter
  }

  res.status(200).send(gameInfo);
})

router.post('/quiz', updateRound, (req, res) => {
  const questionNum = req.body.questionNum + 1;
  if (questionNum > QUESTIONS.length) {
    const gameOver = {
      isGameOver: true,
      questionNum: null,
      question: null,
      lastRound: state.scores[questionNum - 2],
      scoreCounter:state.scoreCounter
    }
    return res.send(gameOver);
  }
  const question = QUESTIONS[questionNum - 1].question;
  const roundScore = {questionNum, isCorrect: null, userAnswer: null, correctAnswer: QUESTIONS[questionNum - 1].answer};
  state.scores.push(roundScore);
  const gameInfo = {
    isGameOver: false,
    questionNum,
    question,
    lastRound: state.scores[questionNum - 2],
    scoreCounter: state.scoreCounter
  }
  res.status(200).send(gameInfo);
});

router.get('/quiz/score', (req, res) => {
  res.status(200).send(state.scoreCounter)
});
// router.post('/todos', (req, res) => {
//   const todoName = req.body.todoName;
//   const todoID = crypto.randomUUID();
//   const todoEntry = {todoName, todoID};
//   todos.push(todoEntry);
//   res.send(todoEntry);
// })
// router.put('/todos/:id', (req, res) => {
//   const id = req.params.id;
//   const name = req.body.todoName;
//   const todoEntry = todos.find((entry) => entry.todoID === id);
//   if (!todoEntry) {
//     return res.status(404).send('No todos found.');
//   }
//   todoEntry.todoName = name;
//   res.send(todoEntry);
// })
// router.delete('/todos/:id', (req, res) => {
//   const id = req.params.id;
//   const todoIndex = todos.findIndex((entry) => entry.todoID === id);
//   if (todoIndex >= 0) {
//     todos.splice(todoIndex, 1);
//     return res.send("The task has been deleted.");
//   }
//   res.status(404).send('No todos found.');
// })