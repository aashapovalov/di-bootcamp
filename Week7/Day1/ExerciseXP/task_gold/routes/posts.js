import express from 'express';
import crypto from 'crypto';
const todos = [];

export const router = express.Router();
router.get('/todos', (req, res) => {
  res.status(201).send(todos);
})
router.post('/todos', (req, res) => {
  const todoName = req.body.todoName;
  const todoID = crypto.randomUUID();
  const todoEntry = {todoName, todoID};
  todos.push(todoEntry);
  res.send(todoEntry);
})
router.put('/todos/:id', (req, res) => {
  const id = req.params.id;
  const name = req.body.todoName;
  const todoEntry = todos.find((entry) => entry.todoID === id);
  if (!todoEntry) {
    return res.status(404).send('No todos found.');
  }
  todoEntry.todoName = name;
  res.send(todoEntry);
})
router.delete('/todos/:id', (req, res) => {
  const id = req.params.id;
  const todoIndex = todos.findIndex((entry) => entry.todoID === id);
  if (todoIndex >= 0) {
    todos.splice(todoIndex, 1);
    return res.send("The task has been deleted.");
  }
  res.status(404).send('No todos found.');
})