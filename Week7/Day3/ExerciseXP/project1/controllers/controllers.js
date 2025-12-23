import { ToDoTask } from "../task-class.js";


// in-memory store
const posts = [];

export function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

export function findTaskIndexById(id) {
  return tasks.findIndex((task) => task.id === id);
}

// GET /tasks  (because mounted at /tasks)
export const getTasks = (req, res) => {
  res.status(200).json(tasks);
};

// GET /tasks/:id
export const getSingleTask = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((taskEntry) => taskEntry.id === id);

  if (!task) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.status(200).json(task);
};

// POST /tasks
export const createTask = (req, res) => {
  const { name } = req.body;

  if (!isNonEmptyString(name)) {
    return res.status(400).json({
      error: "Validation error",
      details:  "required non-empty string"
    });
  }

  const newTask = new ToDoTask(name.trim());
  tasks.push(newTask);

  res.status(201).json(newTask);
};

// PUT /tasks/:id
export const updateTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = findTaskIndexById(id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  // allow partial updates
  const { name } = req.body;

  if (!name || !isNonEmptyString(name)) {
    return res.status(400).json({ error: "Validation error", details: "must be non-empty string" });
  }

  res.status(200).json(tasks[taskIndex]);
};

// DELETE /tasks/:id
export const deleteTask =  (req, res) => {
  const { id } = req.params;
  const taskIndex = findTaskIndexById(id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deleted = tasks.splice(taskIndex, 1)[0];
  res.status(200).json({ message: "Post deleted", deleted });
};
