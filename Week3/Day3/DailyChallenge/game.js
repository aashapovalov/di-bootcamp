//Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()

let form = document.getElementById('libform');
let spanElement = document.getElementById('story')
let inputList = form.querySelectorAll('input');
for (let i = 0; i < inputList.length; i++) {
  inputList[i].name = inputList[i].id
}
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  let storyObj = {}
  for (const [key, value] of formData.entries()) {
    if (value === '') {
      storyObj = {}
      break;
    } else {
      console.log(key, value);
      storyObj[key] = value;
    }

  }
  spanElement.textContent = `“The ${storyObj["adjective"]} ${storyObj["noun"]} decided to ${storyObj["verb"]} with ${storyObj["person"]} at the ${storyObj["place"]}.”`;
}

//Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.