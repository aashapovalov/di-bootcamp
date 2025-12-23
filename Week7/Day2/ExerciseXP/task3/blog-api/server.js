import express from "express";
import { router as tasksRouter } from "./routes/todos.js";

const app = express();

app.use(express.json());
app.use("/api/todos", tasksRouter);

app.listen(5050, () => {
  console.log("Server is running on port 5050");
});
