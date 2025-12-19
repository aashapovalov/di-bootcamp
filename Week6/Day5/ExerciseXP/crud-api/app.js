import express from 'express';
import { fetchPosts} from "./data/dataService.js";

const app = express();
app.use(express.json());

app.get("/posts", async (req, res) =>  {
  const posts = await fetchPosts();
  if (!posts) {
    return res.status(500).json({error: "Failed to fetch posts"});
  }
  res.json(posts);
  console.log('Posts loaded');
})

app.listen(5000, () => {
  console.log('Express server listening on port 5000.');
})