import { users, rooms } from "./data.js";


export function addUser(userID, username, roomName) {
  const userIndex = users.findIndex(user => user.userID === userID);
  if (userIndex === -1) {
    const userEntry = {
      userID,
      username,
      roomName,}
    users.push(userEntry);
  } else {
    users[userIndex].username = username;
    users[userIndex].roomName = roomName;
  }
}

export function addRoom(userID, roomName) {
  const roomIndex = rooms.findIndex(room => room.roomName === roomName);
  if (roomIndex === -1) {
    const roomEntry = {
      roomName,
      users: new Set([userID])
    }
    rooms.push(roomEntry);
  } else {
    rooms[roomIndex].users.add(userID);
  }
}

export function removeUser(userID) {
  const userIndex = users.findIndex(user => user.userID === userID);
  if (userIndex === -1) {
    return;
  }
  const roomName = users[userIndex].roomName;
  const roomIndex = rooms.findIndex(room => room.roomName === roomName);
  if (roomIndex >= 0) {
    rooms[roomIndex].users.delete(userID);
  }
  users.splice(userIndex, 1);
  }

export function getAllRoomUsers(roomName) {
  const room = rooms.find(room => room.roomName === roomName);
  if (!room) {
    return [];
  }
  const roomUsersID = Array.from(room.users);
  return roomUsersID.map((userID) => {
    const user = users.find(user => user.userID === userID);
    return user ? user.username : null;
  }).filter(Boolean).sort((a, b) => a.localeCompare(b));
}

export function removeUserFromRoom(userID, roomName) {
  const roomIndex = rooms.findIndex(room => room.roomName === roomName);
  if (roomIndex >= 0) {
    rooms[roomIndex].users.delete(userID);

    // clean up empty rooms
    if (rooms[roomIndex].users.size === 0) {
      rooms.splice(roomIndex, 1);
    }
  }
}