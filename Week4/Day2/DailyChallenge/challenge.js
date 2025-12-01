const form = document.getElementById('form');
const output = document.getElementById('output');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let dataObject = {};
  const formData = new FormData(form);
  for (let [key, value] of formData.entries()) {
    dataObject[key] = value;
  }
  output.textContent = JSON.stringify(dataObject)
})