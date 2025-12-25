import express from "express";
import { createServer } from "http";
import {Server} from "socket.io";
import { getAllRoomUsers, addUser, addRoom, removeUser } from "./utils.js";
import { users, SystemMessage } from "./data.js";

const app = express();
app.use(express.json());
app.use(express.static("public"));

const server = createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);

  socket.on("joinRoom", (data) => {
    console.log(`${data.username} joined ${ data.room}`)
    //add or update users array when user joins a room
    addUser(socket.id, data.username, data.room)
    addRoom(socket.id, data.room)
    socket.join(data.room)

    //sending welcome message to the user
    const welcomeMsg = new SystemMessage(`${data.username} welcome to ${data.room} room!`)
    socket.emit("send-message", welcomeMsg);

    //sending notification to everyone in the room about user joined
    const welcomeBroadcastMsg = new SystemMessage(`${data.username} joined!`)
    socket.to(data.room).emit("send-message", welcomeBroadcastMsg);

    //sending everyone new users list
    const userList = getAllRoomUsers(data.room);
    io.to(data.room).emit("user-list", userList);
  })

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);

    // Get user info before removing
    const user = users.find(user => user.userID === socket.id);

    if (!user) return;

    const { username, roomName } = user;

    // Remove user from data
    removeUser(socket.id)

    //sending notification to everyone in the room about user left
    const welcomeBroadcastMsg = new SystemMessage(`${username} left!`)
    socket.to(roomName).emit("send-message", welcomeBroadcastMsg);

    //sending everyone new users list
    const userList = getAllRoomUsers(roomName);
    io.to(roomName).emit("user-list", userList);
  })
})

const PORT = 5050

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));