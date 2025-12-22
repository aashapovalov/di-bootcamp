import express from 'express';
import crypto from 'crypto';
const books = [];

export const router = express.Router();
router.get('/books', (req, res) => {
  res.status(201).send(books);
})
router.post('/books', (req, res) => {
  const bookTitle = req.body.todoName;
  const bookID = crypto.randomUUID();
  const bookEntry = {bookTitle, bookID};
  books.push(bookEntry);
  res.send(bookEntry);
})
router.put('/books/:id', (req, res) => {
  const id = req.params.id;
  const title = req.body.todoName;
  const bookEntry = books.find((entry) => entry.bookID === id);
  if (!bookEntry) {
    return res.status(404).send('No todos found.');
  }
  bookEntry.todoName = title;
  res.send(bookEntry);
})
router.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  const bookIndex = books.findIndex((entry) => entry.bookID === id);
  if (bookIndex >= 0) {
    books.splice(bookIndex, 1);
    return res.send("The task has been deleted.");
  }
  res.status(404).send('No todos found.');
})