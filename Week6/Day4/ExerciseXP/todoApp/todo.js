export class TodoList {
  constructor() {
    this.list = [];
  }
  addTask(task) {
    this.list.push(task);
  }

  listTasks() {
    console.log(`You have ${this.list.length} tasks:`);
    for (let task of this.list) {
      console.log(`${task.number}. ${task.name} - ${task.status}`);
    }
  }

  markTask(taskNumber) {
    for (let task of this.list) {
      if (taskNumber === task.number) {
        task.status = 'done';
      }
    }
  }
}