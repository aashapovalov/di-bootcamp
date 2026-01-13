import express from 'express';
import cookieParser from "cookie-parser";

import {authenticateJWT} from "./auth-middleware.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Welcome to the main page');
})

app.get('/profile', authenticateJWT, (req, res) => {
  res.json({message: `Welcome ${req.user.username}!`});
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})