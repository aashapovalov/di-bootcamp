const socket = io('http://localhost:5050');

// Make socket accessible globally for debugging
window.socket = socket;

const joinForm = document.getElementById("join-form");
const joinModal = document.getElementById("join-modal");
const usernameInput = document.getElementById("username-input");
const roomInput = document.getElementById("room-input");
const joinErrorMsg = document.getElementById("join-error-message");
const messageInput = document.getElementById("message-input");
const sendMessageBtn = document.getElementById("send-message-btn");
const messageContainer = document.getElementById("message-container");
const usersList = document.getElementById("users-list");
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
});