import crypto from "crypto";

export class ToDoTask {
  constructor(name, complete = false, postID = crypto.randomUUID()) {
    this.id = postID;
    this.name = name;
    this.complete = complete;
  }
}