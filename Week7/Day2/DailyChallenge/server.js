import express from "express";
import { router as usersRouter } from "./routes/users.js";

const app = express();

app.use(express.json());
app.use("/", usersRouter);

app.listen(5050, () => {
  console.log("Server is running on port 5050");
});
