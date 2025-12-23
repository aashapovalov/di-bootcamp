import express from "express";
import {
  hashPassword,
  createUser,
  loginUser,
  getUsers,
  getSingleUser,
  updateUser
} from "../controllers/controllers.js";

export const router = express.Router();

router.post("/register", hashPassword, createUser);
router.post("/login", loginUser);
router.get("/users", getUsers);
router.get("/users/:id", getSingleUser);
router.put("/users/:id", updateUser);

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