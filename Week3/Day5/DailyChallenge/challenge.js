const tasks = [];
let submitBtn = document.getElementById('submit-btn');
let form = document.forms[0]
let allTasksElement = document.getElementsByClassName('listTasks')[0];
console.log(form.elements.task.value)

function addTask(event) {
  event.preventDefault();
  let newTask = form.elements.task.value;
  tasks.push(newTask);
  const newTaskElement = document.createElement("div");
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-xmark")
  const inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = `task-${tasks.length}`;
  const taskLabelElement = document.createElement("label");
  taskLabelElement.setAttribute("for", inputElement.id);
  taskLabelElement.textContent = newTask;

  newTaskElement.appendChild(icon);
  newTaskElement.appendChild(inputElement);
  newTaskElement.appendChild(taskLabelElement);
  allTasksElement.appendChild(newTaskElement);
}

submitBtn.addEventListener('click', addTask);

