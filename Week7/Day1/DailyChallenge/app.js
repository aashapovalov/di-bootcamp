import express from 'express';
import cors from "cors";
import nodemon from "nodemon";

import { router } from './routes/routes.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(5050, () => {
  console.log('Server for quiz is running on port 5050');
})