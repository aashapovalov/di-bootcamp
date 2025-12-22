import express from 'express';
import crypto from 'crypto';
const books = [];

export const router = express.Router();
router.get('/books', (req, res) => {
  res.status(200).send(books);
})
router.post('/books', (req, res) => {
  const bookTitle = req.body.bookTitle;
  const bookID = crypto.randomUUID();
  const bookEntry = {bookTitle, bookID};
  books.push(bookEntry);
  res.send(bookEntry);
})
router.put('/books/:id', (req, res) => {
  const bookID = req.params.id;
  const title = req.body.bookTitle;
  const bookEntry = books.find((entry) => entry.bookID === bookID);
  if (!bookEntry) {
    return res.status(404).send('No books found.');
  }
  bookEntry.bookTitle = title;
  res.send(bookEntry);
})
router.delete('/books/:id', (req, res) => {
  const bookID = req.params.id;
  const bookIndex = books.findIndex((entry) => entry.bookID === bookID);
  if (bookIndex >= 0) {
    books.splice(bookIndex, 1);
    return res.send("The task has been deleted.");
  }
  res.status(404).send('No books found.');
})