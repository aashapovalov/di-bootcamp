import {db} from "../config/db.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await db('tasks').
    select('id', 'title', 'completed');
    return res.json(tasks);
  } catch (err) {
    console.log(err);
    returnres.status(404).send('Not found books');
  }
}

export const getSingleTask =  async (req, res, next) => {
  const { id } = req.params;
  try {
    const task = await db('tasks').
    select('id', 'title', 'completed').
    where({ id }).
    first();
    if (!task) {
      return res.status(404).send('The book not found');
    }

    res.status(200).json(task);
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

export const createTask = async (req, res, next) => {
  const { title, completed } = req.body;
  try {
    const newTask = await db('tasks').
    returning(['id', 'title', 'completed']).
    insert({ title, completed });
    if (!newTask) {
      return res.status(500).send("Couldn't create a new task");
    }
    res.json(newTask);
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

export const updateTask = async (req, res, next) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  try {
    const updatedTask = await db('tasks').
    where({ id}).
    update({ title, completed }, ['id', 'title', 'completed']);
    if (!updatedTask) {
      return res.status(500).send("Couldn't create a new task");
    }
    return  res.json(updatedTask);
  } catch (err) {
    console.log(err);
    return next(err);
  }
}

export const deleteTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedTask = await db('tasks').
    where({ id }).
    del(['id', 'title', 'completed']);

    if (!deletedTask) {
      return res.status(500).send("Couldn't delete task");
    }
    return res.json(deletedTask);
  } catch (err) {
    console.log(err);
    return next(err);
  }
}