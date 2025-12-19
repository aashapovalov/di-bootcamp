import express from "express";

const posts = [
  {
    id: 1,
    title: "Getting Started with JavaScript",
    content: "JavaScript is a versatile language used for both frontend and backend development.",
  },
  {
    id: 2,
    title: "Understanding Node.js",
    content: "Node.js allows you to run JavaScript outside the browser using the V8 engine.",
  },
  {
    id: 3,
    title: "What Is REST API?",
    content: "REST is an architectural style for building scalable web services.",
  },
  {
    id: 4,
    title: "Async/Await Explained",
    content: "Async and await make asynchronous JavaScript code easier to read and maintain.",
  },
];

const app = express();
app.use(express.json());

app.get('/posts', (req, res) => {
res.json(posts);
})

app.get('/posts/:id', (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find(post => post.id === id);
  if (!post) {
    return res.status(404).send('Post not found.');
  }
  res.json(post);
})

app.post('/posts', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content,
  }
  posts.push(newPost);
  res.status(201).json(newPost);
})

app.put('/posts/:id', (req, res) => {
  const id = Number(req.params.id);
  const postIndex = posts.findIndex(post => post.id === id);
  if (postIndex === -1) {
    return res.status(404).send('Post not found.');
  }
  const updatedPost =  {
    id: id,
    title: req.body.title,
    content: req.body.content,
  }
  posts[postIndex] = updatedPost;
  res.json(updatedPost);
})

app.delete('/posts/:id', (req, res) => {
  const id = Number(req.params.id);
  const postIndex = posts.findIndex(post => post.id === id);
  if (postIndex === -1) {
    return res.status(404).send('Post not found.');
  }
  posts.splice(postIndex, 1);
  res.status(200).json("Post deleted");
})

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Server error" });
});

app.listen(3000, () => {console.log("Server started on port 3000")});