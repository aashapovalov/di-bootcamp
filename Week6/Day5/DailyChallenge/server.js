import express from "express";
import {designGame, getUserData, generateID } from "./utils.js";

const app = express();
app.use(express.json());

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

app.listen(5000, () => {
  console.log("Express server listening on port 5000...");
})