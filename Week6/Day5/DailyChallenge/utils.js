import { EMOJIS, OPTIONS_NUMBER } from "./constants.js";
import {historyData, userData} from "./data.js";

export function designGame() {
  const gameOptions = getRandomOptions()
  const winnerOptionIndex = Math.floor(Math.random() * gameOptions.length);
  return {gameOptions, winnerOptionIndex};
}

export function getRandomOptions(){
  let emojisCopy = [...EMOJIS];
  const maxIndex = emojisCopy.length;
  for (let i = maxIndex - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [emojisCopy[i], emojisCopy[randomIndex]] = [emojisCopy[randomIndex], emojisCopy[i]];
  }
  return emojisCopy.slice(0, OPTIONS_NUMBER);
}

export function generateID() {
  return crypto.randomUUID();
}

export function getUserData(name) {
  let userID = '';
  let userHistory = [];
  const user = userData.find(user => user.username === name);
  if (user === undefined) {
    userID = generateID();
    userData.push({userID: userID, username:name});
    return { userID, userHistory }
  }
  userID = user.userID;
  const userEntry = historyData.find(history => history.userID === userID);
  if (userEntry === undefined) {
    return { userID, userHistory }
  }
  return { userID, userHistory: userEntry.history };
}