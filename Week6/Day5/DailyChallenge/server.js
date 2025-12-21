import express from "express";
import cors from "cors";
import {designGame, getUserData, generateID } from "./utils.js";

const app = express();
app.use(cors());
app.use(express.json());
console.log("🚀 THIS SERVER.JS IS RUNNING");

app.post("/login", (req, res) => {
  const username = req.body.username;
  const { userID, userHistory} = getUserData(username);
  const { gameOptions, winnerOptionIndex } = designGame()
  const roundID = generateID();

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
  res.status(200).json(response)
})

app.post("/login/:username/game", (req, res) => {
  const emojiOption = req.body.emojiOption;

})

app.listen(5050, () => {
  console.log("Express server listening on port 5050...");
})