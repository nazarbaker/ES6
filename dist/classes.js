'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
  function Task() {
    var title = arguments.length <= 0 || arguments[0] === undefined ? Task.getDefaultTitle() : arguments[0];

    _classCallCheck(this, Task);

    this.title = title, this._done = false;
    Task.count += 1;
  }

  _createClass(Task, [{
    key: 'complete',

    // цей метод можна викликати, або він передається
    value: function complete() {
      this.done = true;
      console.log('Задача виконана');
    }
    // статичний метод викликається тільки так Task.getDefaultTitle()

  }, {
    key: 'done',
    get: function get() {
      return this._done === true ? 'Виконано' : 'Не виконано';
    },
    set: function set(value) {
      if (value !== undefined && typeof value === 'boolean') {
        this._done = value;
      } else {
        console.error('Вкажіть true або false');
      }
    }
  }], [{
    key: 'getDefaultTitle',
    value: function getDefaultTitle() {
      return 'Task';
    }
  }]);

  return Task;
}();
// статичні властивості


Task.count = 0;

var task = new Task('Learn ES6');
var task2 = new Task('Learn React');
var task3 = new Task();

console.log(typeof Task === 'undefined' ? 'undefined' : _typeof(Task)); //function
console.log(typeof task === 'undefined' ? 'undefined' : _typeof(task)); // object
console.log(task instanceof Task); // true

console.log(task3.title);
console.log(task.done);
task2.complete();
console.log(task.done);

console.log(Task.count);

console.log(task.done, task._done);
task.complete();
console.log(task.done, task._done);