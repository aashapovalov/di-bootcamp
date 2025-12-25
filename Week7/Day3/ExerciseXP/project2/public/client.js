const socket = io('http://localhost:5050');

// Make socket accessible globally for debugging
window.socket = socket;

const joinForm = document.getElementById("join-form");
const joinModal = document.getElementById("join-modal");
const usernameInput = document.getElementById("username-input");
const roomInput = document.getElementById("room-input");
const joinErrorMsg = document.getElementById("join-error-message");
const messageInput = document.getElementById("message-input");
const messageForm = document.getElementById("message-form");
const sendMessageBtn = document.getElementById("send-message-btn");
const messagesDiv = document.getElementById("messages");
const usersListElement = document.getElementById("users-list");
const changeRoomBtn = document.getElementById("change-room-btn");
const roomName = document.getElementById("room-name");
let currentRoom = null;
let currentUserName = null;


joinForm.addEventListener("submit", (e) => {
    e.preventDefault();
    joinErrorMsg.textContent = "";

    //username and room inputs validation
    const room = roomInput.value.trim();
    const username = usernameInput.value.trim();
    if (username === "") {
      joinErrorMsg.textContent = "Please enter a username";
      if (room === "") {
        joinErrorMsg.textContent = "Please enter a username and a room";
        return;
      }
      return;
    }
    if (room === "") {
      joinErrorMsg.textContent += "Please enter a room name";
      return;
    }
  //close modal, enable message input and send button
  currentRoom = room;
  currentUserName = username;
  joinModal.classList.remove("active");
  messageInput.disabled = false;
  messageInput.placeholder = "Please enter a message";
  sendMessageBtn.disabled = false;
  roomName.textContent = currentRoom;

  //send room and username to the server
  socket.emit("joinRoom", {username, room});

  //clean modal input values
  roomInput.value = '';
  usernameInput.value = '';

  messageInput.focus();
  messagesDiv.innerHTML = "";
});

//new message listener
socket.on("send-message", (message) => {
  const { username , text, timestamp} = message;

  //define the type of the message

  let messageType = '';
  switch (username) {
    case "System":
      messageType = "system";
      break;
    case currentUserName:
      messageType = "own"
      break;
    default:
      messageType = "other"
      break;
    }
  const newMessage = document.createElement("div");
  newMessage.classList.add("message", messageType)

    //create new message element and add it to DOM
  newMessage.innerHTML = messageType === "system"
      ?
      `<p>${text}</p>`
      :
      `<span class="username">${username}</span>
      <p class="text">${text}</p>
      <span class="time">${timestamp}</span>`
      ;
  messagesDiv.appendChild(newMessage);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
})

//user-list update listener
socket.on("user-list", (userList) => {
  usersListElement.innerHTML = "";

  //if new user list is empty, show default element
  if (userList.length === 0) {
    usersListElement.innerHTML = '<li class="no-users">No users yet</li>';
    return;
    }

  // if new user list is not empty, delete default element and create list element for each user
  userList.forEach(user => {
    const userEntry = document.createElement("li");
    userEntry.classList.add("user-item");
    userEntry.innerHTML = `
    <span class="user-status">●</span>
    <span class="user-name">${user}</span>
    `;
    usersListElement.appendChild(userEntry);
  })
})

//listener for message input submit
messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const messageText = messageInput.value;
  if (!messageText) {
    return;
  }
  socket.emit("chat-message", messageText);
  messageInput.value = "";
})

//listener for change room button