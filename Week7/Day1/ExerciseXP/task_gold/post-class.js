import crypto from "crypto";

export class BlogPost {
  constructor(title, content, timestamp = new Date().toISOString(), postID = crypto.randomUUID()) {
    this.id = postID;
    this.title = title;
    this.content = content;
    this.timestamp = timestamp;
  }
}