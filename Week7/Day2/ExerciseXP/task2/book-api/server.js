import express from "express";
import { router as booksRouter } from "./routes/books.js";

const app = express();

app.use(express.json());
app.use("/api/books", booksRouter);

app.listen(5050, () => {
  console.log("Server is running on port 5050");
});
