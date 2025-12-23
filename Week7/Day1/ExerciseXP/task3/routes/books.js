import express from 'express';
import crypto from 'crypto';
const books = [];

export const booksRouter = express.Router();
booksRouter.get('/books', (req, res) => {
  res.status(200).send(books);
})
booksRouter.post('/books', (req, res) => {
  const newBookTitle = req.body.bookTitle;
  const bookID = crypto.randomUUID();
  const bookEntry = {bookTitle: newBookTitle, bookID};
  books.push(bookEntry);
  res.send(bookEntry);
})
booksRouter.put('/books/:id', (req, res) => {
  const bookID = req.params.id;
  const newBookTitle = req.body.bookTitle;
  const bookEntry = books.find((entry) => entry.bookID === bookID);
  if (!bookEntry) {
    return res.status(404).send('No books found.');
  }
  bookEntry.bookTitle = newBookTitle;
  res.send(bookEntry);
})
booksRouter.delete('/books/:id', (req, res) => {
  const bookID = req.params.id;
  const bookIndex = books.findIndex((entry) => entry.bookID === bookID);
  if (bookIndex >= 0) {
    books.splice(bookIndex, 1);
    return res.send("The task has been deleted.");
  }
  res.status(404).send('No books found.');
})

export default booksRouter;