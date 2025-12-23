import {db} from "../config/db.js";

export const getBlogPosts = async (req, res) => {
  try {
    const posts = await db('posts').
    select('id', 'title', 'content');
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(404).send('Not found posts');
  }
}

export const getSingleBlogPost =  async (req, res) => {
  const { id } = req.params;
  try {
    const posts = await db('posts').
    select('id', 'title', 'content').
    where({ id: id}).
    first();
    if (!posts) {
      res.status(404).send('The posts not found');
    }

    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
}

export const createBlogPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = await db('posts').
    returning(['id', 'title', 'content']).
    insert({ title, content });
    if (!newPost) {
      res.status(500).send("Couldn't create a new post");
    }
    res.json(newPost);
  } catch (err) {
    console.log(err);
  }
}

export const updateBlogPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedPost = await db('posts').
    where({ id: id}).
    update({ title: title, content: content }, ['id', 'title', 'content']);
    if (!updatedPost) {
      res.status(500).send("Couldn't create a new post");
    }
    res.json(updatedPost);
  } catch (err) {
    console.log(err);
  }
}

export const deleteBlogPost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await db('posts').
    where({ id: id }).
    del(['id', 'title', 'content']);

    if (!deletedPost) {
      res.status(500).send("Couldn't delete post");
    }
    res.json(deletedPost);
  } catch (err) {
    console.log(err);
  }
}