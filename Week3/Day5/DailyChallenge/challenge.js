const tasks = [];
let submitBtn = document.getElementById('submit-btn');
let form = document.forms[0]
let allTasksElement = document.getElementsByClassName('listTasks')[0];
let taskID = 0;
let done = false;

function addTask(event) {
  //accessing new task name
  event.preventDefault();
  let text = form.elements.task.value;
  if (!text) {
    alert("Please enter a task");
  }
  taskID++;
  tasks.push({taskID, text, done});

  //add X-icon and event listener
  const icon = document.createElement("i");
  icon.classList.add("icon");
  icon.classList.add("fa-solid", "fa-xmark")
  icon.addEventListener('click', deleteTask)

  //add checkbox and event listener
  const inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.addEventListener("change", doneTask)

  //add task label
  const taskLabelElement = document.createElement("label");
  taskLabelElement.setAttribute("for", inputElement.id);
  taskLabelElement.textContent = text;

  //add task container and appending all elements
  const newTaskElement = document.createElement("div");
  newTaskElement.classList.add("task");
  newTaskElement.id = taskID.toString();
  newTaskElement.appendChild(icon);
  newTaskElement.appendChild(inputElement);
  newTaskElement.appendChild(taskLabelElement);
  allTasksElement.appendChild(newTaskElement);
}

//remove a task
function deleteTask(event) {
  event.preventDefault();
  let parentEl = event.target.parentElement;
  allTasksElement.removeChild(parentEl);
  for (let task of tasks) {
    if (task.taskID.toString() === parentEl.id) {
      tasks.splice(tasks.indexOf(task), 1);
      return
    }
  }
}

//change status of a task
function doneTask(event) {
  let parentEl = event.target.closest(".task");
  for (let task of tasks) {
    if (task.taskID.toString() === parentEl.id) {
      task.done = !task.done;
      return
    }
  }
}

submitBtn.addEventListener('click', addTask);


