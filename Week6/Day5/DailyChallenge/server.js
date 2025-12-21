import express from "express";
import cors from "cors";
import {designGame, getUserData, generateID } from "./utils.js";
import {historyData, userData} from "./data.js";

const app = express();
app.use(cors());
app.use(express.json());
console.log("🚀 THIS SERVER.JS IS RUNNING");

app.post("/login", (req, res) => {
  const username = req.body.username;
  const { userID, userHistory} = getUserData(username);
  const { gameOptions, winnerOptionIndex } = designGame()
  const roundID = generateID();
  const newRound = {roundID, winnerOptionIndex, userOptionIndex: null, gameOptions}
  let userEntry = historyData.find(history => history.userID === userID);
  if (!userEntry) {
    userEntry = { userID, history: [] };
    historyData.push(userEntry);
  }

  const response = {
    userID,
    username,
    gameInfo: {
      roundID,
      gameOptions
    },
    userHistory,
    lastAnswer: null
  }
  userEntry.history.push(newRound);
  res.status(200).json(response)
})

app.post("/guess", (req, res) => {
  const emojiOption = Number(req.body.emojiOption);
  const userID = req.body.userID;
  const roundID = req.body.roundID;
  const userEntry = historyData.find(history => history.userID === userID);
  const lastRound = userEntry.history.find(round => round.roundID === roundID);
  lastRound.userOptionIndex = emojiOption;
  const lastAnswer = {
    isCorrect: lastRound.userOptionIndex === lastRound.winnerOptionIndex,
    winnerOptionIndex: lastRound.winnerOptionIndex,
    chosenOptionIndex: emojiOption
  };

  const newRoundID = generateID();
  const { gameOptions, winnerOptionIndex } = designGame();
  const newRound = {roundID: newRoundID, winnerOptionIndex, userOptionIndex: null, gameOptions}
  const user = userData.find(u => u.userID === userID);
  const username = user?.username;
  const {userHistory} = getUserData(username)
  const response = {
    userID,
    username,
    gameInfo: {
      roundID: newRoundID,
      gameOptions
    },
    userHistory,
    lastAnswer
  }
  userEntry.history.push(newRound);
  res.status(200).json(response)
})

app.listen(5050, () => {
  console.log("Express server listening on port 5050...");
})