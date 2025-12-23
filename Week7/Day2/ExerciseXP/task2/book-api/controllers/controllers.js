import {db} from "../config/db.js";

export const getBooks = async (req, res) => {
  try {
    const books = await db('books').
    select('id', 'title', 'author', 'published_year');
    res.json(books);
  } catch (err) {
    console.log(err);
    res.status(404).send('Not found books');
  }
}

export const getSingleBook =  async (req, res) => {
  const { id } = req.params;
  try {
    const books = await db('books').
    select('id', 'title', 'author', 'published_year').
    where({ id: id}).
    first();
    if (!books) {
      res.status(404).send('The book not found');
    }

    res.status(200).json(books);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
}

export const createBook = async (req, res) => {
  const { title, author, published_year } = req.body;
  try {
    const newBook = await db('posts').
    returning(['id', 'title', 'author', 'published_year']).
    insert({ title, author, published_year });
    if (!newBook) {
      res.status(500).send("Couldn't create a new book");
    }
    res.json(newBook);
  } catch (err) {
    console.log(err);
  }
}

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, published_year } = req.body;
  try {
    const updatedBook = await db('posts').
    where({ id: id}).
    update({ title: title, author: author, published_year: published_year }, ['id', 'title', 'author', 'published_year']);
    if (!updatedBook) {
      res.status(500).send("Couldn't create a new book");
    }
    res.json(updatedBook);
  } catch (err) {
    console.log(err);
  }
}

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBook = await db('posts').
    where({ id: id }).
    del(['id', 'title', 'author', 'published_year']);

    if (!deletedBook) {
      res.status(500).send("Couldn't delete book");
    }
    res.json(deletedBook);
  } catch (err) {
    console.log(err);
  }
}