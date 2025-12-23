import express from "express";
import { router as postsRouter } from "./routes/tasks.js";

const app = express();

app.use(express.json());
app.use("/tasks", postsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
