import express from 'express';
import { router } from './routes/todo.js'
const app = express();

app.use(express.json());
app.use('/', router);

app.listen(3000, () => {
  console.log('Server for task2 is running on port 3000');
})