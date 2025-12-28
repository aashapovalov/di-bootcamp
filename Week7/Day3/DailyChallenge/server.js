import express from "express";
import { createServer } from "http";
import bcrypt from "bcrypt";

const users = [];

const app = express();
const server = createServer();

app.use(express.json());

app.post("/register", async (req, res) => {
  const { first_name, last_name, email, username, password } = req.body;
  const userEntry = { first_name, last_name, email, username };
  if (!password || typeof password !== "string") {
    return res.status(400).json({message: `Incorrect password`});
  }
  for (let [key, value] of Object.entries(userEntry)) {
    if (typeof value !== "string" || !value) {
      return res.status(400).json({message: `${key} is incorrect`});
    }
    if (value.trim()) {
      return res.status(400).json({message: `${key} cannot be blank`});
    }
    userEntry[key] = value.trim();
  }
  userEntry.password = bcrypt.hashSync(password, 10);
  const usernameEntry = users.find((entry) => entry.username === userEntry.username);
  const passwordEntry = users.find((entry) => bcrypt.compareSync(password, entry.password));
  if (usernameEntry) {
    return res.status(409).json({ message: `${userEntry.username} already exists` });
  }
  if (passwordEntry) {
    return res.status(400).json({ message: "This password is already in use" });
  }
  users.push(userEntry);
  return res.status(200).json( {message: `User ${username} has been registered`});
})

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({message: `Password and username cannot be empty`});
  }
  if (!username.trim()) {
    return res.status(400).json({message: `Username cannot be empty`});
  }
  const usernameTrimmed = username.trim();
  const userEntry = users.find((entry) => entry.username === usernameTrimmed);
  if (!userEntry) {
    return res.status(404).json({message: `${usernameTrimmed} not found`});
  }
  if (!bcrypt.compareSync(password, userEntry.password)) {
    return res.status(401).json({message: `Incorrect password`});
  }
  return res.status(200).json({message: `${usernameTrimmed} welcome to the app`})
})

app.get("/users", async (req, res) => {
  if (users.length === 0) {
    return res.status(401).json({message: `No users found.`});
  }
  res.status(200).json(users)
})

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  const userEntry = users.find((entry) => entry.username === id);
  if (!userEntry) {
    return res.status(404).json({message: `No users found.`});
  }
  res.status(200).json({userEntry});
})

app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const userEntryIndex = users.findIndex((entry) => entry.username === id);
  if (userEntryIndex === -1) {
    return res.status(404).json({message: `No users found.`});
  }
  const { first_name, last_name, email, username, password } = req.body;
  const passwordHashed = bcrypt.hashSync(password, 10);
  users[userEntryIndex] = {first_name, last_name, email, username, passwordHashed};
  return res.status(200).json({message: `User ${username} has been updated`});
})

server.listen(5050, () => {
  console.log(`Server is running on 5050 port`);
})