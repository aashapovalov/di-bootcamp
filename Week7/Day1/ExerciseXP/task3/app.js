import express from 'express';
import booksRouter from './routes/books.js';
const app = express();

app.use(express.json());
app.use('/books', booksRouter);

app.listen(3000, () => {
  console.log('Server for task3 is running on port 3000');
})