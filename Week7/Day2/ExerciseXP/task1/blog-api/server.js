import express from "express";
import { router as postsRouter } from "./posts.js";

const app = express();

app.use(express.json());
app.use("/posts", postsRouter);

app.listen(5050, () => {
  console.log("Server is running on port 5050");
});
