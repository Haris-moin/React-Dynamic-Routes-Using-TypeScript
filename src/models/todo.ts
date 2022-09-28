class Todo {
  id: string;
  task: string;
  status: string;

  constructor(task: string, status: string) {
    this.id = new Date().toISOString();
    this.task = task;
    this.status = status;
  }
}

export default Todo;
