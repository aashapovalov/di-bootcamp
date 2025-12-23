import express from "express";
import {
  getTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/controllers.js";

export const router = express.Router();

router.get("/", getTasks);
router.get("/:id", getSingleTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

router.use((req, res) => {
  res.status(404).json({
    message: "Route Not Found",
    path: req.originalUrl
  });
});