const tasks = [];
const taskObj = {}
let submitBtn = document.getElementById('submit-btn');
let form = document.forms[0]
let allTasksElement = document.getElementsByClassName('listTasks')[0];
console.log(form.elements.task.value)

function addTask(event) {
  //accessing new task name
  event.preventDefault();
  let newTask = form.elements.task.value;
  if (!newTask) {
    alert("Please enter a task");
  }
  tasks.push(newTask);

  //add X-icon
  const icon = document.createElement("i");
  icon.classList.add("icon");
  icon.classList.add("fa-solid", "fa-xmark")
  icon.addEventListener('click', removeTask)

  //add checkbox
  const inputElement = document.createElement("input");
  inputElement.type = "checkbox";

  //add task label
  const taskLabelElement = document.createElement("label");
  taskLabelElement.setAttribute("for", inputElement.id);
  taskLabelElement.textContent = newTask;

  //add task container and appending all elements
  const newTaskElement = document.createElement("div");
  newTaskElement.id = generateID(newTask);
  newTaskElement.appendChild(icon);
  newTaskElement.appendChild(inputElement);
  newTaskElement.appendChild(taskLabelElement);
  allTasksElement.appendChild(newTaskElement);
}

//generate unique ID and write it to task object
function generateID(str) {
  let state = true;
  let newId = '';
  while (state === true) {
    newId = (Math.floor(Math.random() * 1000)).toString();
    if (Object.keys(taskObj).indexOf(newId) === -1) {
      state = false;
    }
  }
  taskObj[newId] = str;
  return newId;
}

//remove a task
function removeTask(event) {
  event.preventDefault();
  let parentEl = event.target.parentElement;
  allTasksElement.removeChild(parentEl);
  const i = tasks.indexOf(taskObj[parentEl.id])
  tasks.splice(i, 1);
  delete taskObj[parentEl.id];
}

submitBtn.addEventListener('click', addTask);


