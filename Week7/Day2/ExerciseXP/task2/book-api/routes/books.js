import express from "express";
import {
  createBook,
  deleteBook,
  getBooks,
  getSingleBook,
  updateBook
} from "../controllers/controllers.js";

export const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getSingleBook);
router.post("/", createBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

router.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
    path: req.originalUrl
  });
});