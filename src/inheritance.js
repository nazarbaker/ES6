class Task {
  constructor(title){
    this._title = title,
    this.done = false,
    Task.count += 1;
    console.log('task inside');
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  static getDefaultTitle() {
    return 'Default Task'
  }

  complete() {
    this.done = true;
    console.log(`Task "${this.title}" complete`);
  }
}

Task.count = 0;

class SubTask extends Task {
  constructor(title, parent){
    super(title);
    this.parent = parent;
  }
  // змінюємо complete
  complete() {
    // this.done = true;
    // замість верхньої але тоді повториться і вивід в консолі
    super.complete();
    console.log(`SubTask "${this.title}" complete`);
  }
}

let task = new Task('Вивчити JS');
let subtask = new SubTask('Вивчити ES6', task);

console.log(SubTask.getDefaultTitle());
console.log(SubTask.count);

task.complete();
subtask.complete();

console.log(task);
console.log(subtask);
