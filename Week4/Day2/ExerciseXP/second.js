const resultSection = document.getElementById("form-result");

const formData = new URLSearchParams(location.search);
const inputName = formData.get("name");
const inputLastName = formData.get("last-name");
resultSection.textContent = `Your name is ${inputName} and last-name is ${inputLastName}`;
