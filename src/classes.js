class Task {
  constructor(title = Task.getDefaultTitle()) {
    this.title = title,
    this._done = false
    Task.count += 1;
  }

  get done() {
    return this._done === true ? 'Виконано' : 'Не виконано'
  }

  set done(value) {
    if(value !== undefined && typeof value === 'boolean'){
      this._done = value;
    } else {
      console.error('Вкажіть true або false')
    }
  }
  // цей метод можна викликати, або він передається
  complete() {
    this.done = true;
    console.log('Задача виконана');
  }
  // статичний метод викликається тільки так Task.getDefaultTitle()
  static getDefaultTitle(){
    return 'Task'
  }
}
// статичні властивості
Task.count = 0;

let task = new Task('Learn ES6');
let task2 = new Task('Learn React');
let task3 = new Task();

console.log(typeof(Task)); //function
console.log(typeof task); // object
console.log(task instanceof Task); // true

console.log(task3.title);
console.log(task.done);
task2.complete();
console.log(task.done);

console.log(Task.count);

console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);
