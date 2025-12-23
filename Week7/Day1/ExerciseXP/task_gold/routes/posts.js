import express from "express";
import { BlogPost } from "../post-class.js";

export const router = express.Router();

// in-memory store
const posts = [];

function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

function findPostIndexById(id) {
  return posts.findIndex((p) => p.id === id);
}

// GET /posts  (because mounted at /posts)
router.get("/", (req, res) => {
  res.status(200).json(posts);
});

// GET /posts/:id
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.status(200).json(post);
});

// POST /posts
router.post("/", (req, res) => {
  const { title, content } = req.body;

  if (!isNonEmptyString(title) || !isNonEmptyString(content)) {
    return res.status(400).json({
      error: "Validation error",
      details: {
        title: "required non-empty string",
        content: "required non-empty string",
      },
    });
  }

  const newPost = new BlogPost(title.trim(), content.trim());
  posts.push(newPost);

  res.status(201).json(newPost);
});

// PUT /posts/:id
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const idx = findPostIndexById(id);

  if (idx === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  // allow partial updates
  const { title, content } = req.body;

  if (title !== undefined && !isNonEmptyString(title)) {
    return res.status(400).json({ error: "Validation error", details: { title: "must be non-empty string" } });
  }
  if (content !== undefined && !isNonEmptyString(content)) {
    return res.status(400).json({ error: "Validation error", details: { content: "must be non-empty string" } });
  }

  if (title !== undefined) posts[idx].title = title.trim();
  if (content !== undefined) posts[idx].content = content.trim();

  // update timestamp on edit
  posts[idx].timestamp = new Date().toISOString();

  res.status(200).json(posts[idx]);
});

// DELETE /posts/:id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const idx = findPostIndexById(id);

  if (idx === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const deleted = posts.splice(idx, 1)[0];
  res.status(200).json({ message: "Post deleted", deleted });
});
