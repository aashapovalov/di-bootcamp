//Create an empty array. For example: let shoppingList=[].
let shoppingList=[]

//Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
let rootElement=document.getElementById('root')
let formElement = document.createElement('form');
let inputElement = document.createElement('input');
let addButtonElement = document.createElement('button');
let clearButtonElement = document.createElement('button');
inputElement.type = 'text';
inputElement.name = 'input';
addButtonElement.type = 'submit';
addButtonElement.textContent = 'Add Item'
clearButtonElement.type = 'button';
clearButtonElement.textContent = 'Clear All'
formElement.appendChild(inputElement);
formElement.appendChild(addButtonElement);
formElement.appendChild(clearButtonElement);
rootElement.appendChild(formElement);
formElement.addEventListener('submit', addItem)
clearButtonElement.addEventListener('click', clearAll)

function addItem(e) {
  e.preventDefault();
  let formData = new FormData(formElement);
  shoppingList.push(formData.get("input"))
  console.log(shoppingList);
}

function clearAll() {
  shoppingList = [];
  console.log(shoppingList);
}