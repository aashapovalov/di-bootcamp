import * as crypto from "node:crypto";

export const users = new Set();
export const games = [];
const OBST_NUM = 10;

export class Game {
  constructor(player1) {
    this.player1 = player1;
    this.player2 = null;
    this.id = null;
    this.status = 'waiting';
    this.winner = null;
    this.currentTurn = null;
    this.positions = { player1: {x: 0, y: 0}, player2: {x: 9, y: 9} };
    this.bases =  { player1: {x: 0, y: 0}, player2: {x: 9, y: 9} };
    this.obstacles = [];
  }
  initiateGame() {
    this.id = crypto.randomUUID();
    this.generateObstacles();
  }

  generateObstacles() {
    const obstaclesSet = new Set;
    while (obstaclesSet.size < OBST_NUM) {
      const randomPosition = Math.floor(Math.random() * 98) + 1;
      obstaclesSet.add(randomPosition)
    }

    this.obstacles = Array.from(obstaclesSet).map((obstacle) => {
      return {
        x: Math.floor(obstacle / 10),
        y: obstacle % 10
      }
    });
  }
}

//{
//   id: "game-1703123456789",
//   player1: "alice",
//   player2: null,  // waiting for player 2
//   status: "waiting",  // "waiting", "active", "finished"
//   winner: null,
//   currentTurn: null,  // will be set when game starts
//   positions: {
//     player1: { x: 0, y: 0 },
//     player2: { x: 9, y: 9 }
//   },
//   bases: {
//     player1: { x: 0, y: 0 },
//     player2: { x: 9, y: 9 }
//   },
//   obstacles: [
//     { x: 2, y: 3 },
//     { x: 5, y: 5 },
//     // ... 8 more random obstacles
//   ]
// }