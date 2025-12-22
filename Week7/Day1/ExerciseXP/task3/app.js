import express from 'express';
import { router } from './routes/books.js'
const app = express();

app.use(express.json());
app.use('/', router);

app.listen(3000, () => {
  console.log('Server for task3 is running on port 3000');
})