let inputElement = document.createElement('input');
inputElement.type = 'text';
document.body.appendChild(inputElement);
inputElement.addEventListener('keypress', (event) => {
  event.preventDefault();
  if ((event.key.charCodeAt(0)>=65 && event.key.charCodeAt(0)<=90)||(event.key.charCodeAt(0) >= 97 && event.key.charCodeAt(0)<=122)) {
    inputElement.value += event.key
  }
})