export const users = [];
export const rooms = [];
export class Message {
  constructor(username, text) {
    this.username = username;
    this.text = text;
    this.timestamp = new Date().toLocaleString("en-GB", {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
}

export class SystemMessage extends Message {
  constructor(text) {
    super("System", text);
  }
}