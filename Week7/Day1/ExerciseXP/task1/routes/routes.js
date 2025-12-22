import express from 'express';
export const router = express.Router();
router.get('/', (req, res) => {
  console.log('You are accessing the routes')
  res.send('Users home');

})
router.get('/about', (req, res) => {
  console.log('What would you like to know about?');
  res.send('About users');
})