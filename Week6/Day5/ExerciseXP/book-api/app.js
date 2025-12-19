import express from "express";

const books = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
  },
  {
    id: 4,
    title: "Brave New World",
    author: "Aldous Huxley",
    publishedYear: 1932,
  },
];

const app = express();
app.use(express.json());

app.get("/api/books", (req, res) => {
  res.send(books);
})

app.get("/api/books/:id", (req, res) => {
  const bookID = Number(req.params.id);
  const bookIndex = books.findIndex(book => book.id === bookID);
  if (bookIndex === -1) {
    res.status(404).json({ error: "Book Not Found" });
  }
  res.json({ book: books[bookIndex] });
})

app.post("/api/books", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: req.body.title,
    author: req.body.author,
    publishedYear: req.body.publishedYear,
  }
  books.push(newBook);
  res.status(201).json(newBook);
})

app.listen(5000, () => {console.log("App listening on port 5000...")});