import express from "express";
import {
  createTask,
  getTasks,
  getSingleTask,
  updateTask,
  deleteTask
} from "../controllers/controllers.js";

export const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.get("/:id", getSingleTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

router.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
    path: req.originalUrl
  });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server error" });
});