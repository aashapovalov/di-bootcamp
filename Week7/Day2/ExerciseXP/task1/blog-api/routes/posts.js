import express from "express";
import {
  createBlogPost,
  deleteBlogPost,
  getBlogPosts,
  getSingleBlogPost,
  updateBlogPost
} from "../controllers/controllers.js";

export const router = express.Router();

router.get("/", getBlogPosts);
router.get("/:id", getSingleBlogPost);
router.post("/", createBlogPost);
router.put("/:id", updateBlogPost);
router.delete("/:id", deleteBlogPost);

router.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
    path: req.originalUrl
  });
});