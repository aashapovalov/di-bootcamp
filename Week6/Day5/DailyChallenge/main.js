import axios from "axios";


const userForm = document.querySelector("#login-form");
const errorElement = document.getElementById("login-error");

async function postUser(event) {
  event.preventDefault();
  const formData = new FormData(userForm);
  const username = formData.get("username");
  if (!username) {
    errorElement.textContent = "Username is required!"
    return;
  }
  const userJSON = JSON.stringify({username: username});
  try {
    const resolve = await axios.post("/users", userJSON);
    return resolve.data;
  } catch (error) {
    errorElement.textContent = error.message;
  }
}

function renderResults() {

}

function renderGame(data) {

}

