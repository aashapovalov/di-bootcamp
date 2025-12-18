import {TodoList} from "./todo.js";

const todoList = new TodoList();

const tasks = [
  {
    number: 1,
    name: "Buy groceries",
    status: "pending",
  },
  {
    number: 2,
    name: "Finish JavaScript homework",
    status: "pending",
  },
  {
    number: 3,
    name: "Clean the apartment",
    status: "pending",
  },
  {
    number: 4,
    name: "Read 30 pages of a book",
    status: "pending",
  },
];

for (const task of tasks) {
  todoList.addTask(task);
}

todoList.markTask(1);
todoList.markTask(4);
todoList.listTasks()