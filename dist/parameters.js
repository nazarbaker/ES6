'use strict';

function greet(greeting, name) {
  console.log(greeting + ' ' + name);
}

greet('Hi', 'Bill');
greet('Hi'); // "Hi undefined"

function greet2() {
  var greeting = arguments.length <= 0 || arguments[0] === undefined ? 'Hi' : arguments[0];
  var name = arguments.length <= 1 || arguments[1] === undefined ? 'Bill' : arguments[1];

  console.log(greeting + ' ' + name);
}

greet2();
//
// es5
function sum() {
  console.log(arguments instanceof Array); //false
  var sum = 0;
  // додавання аргументам методу forEach через прототип масиву
  Array.prototype.forEach.call(arguments, function (value) {
    sum += value;
  });
  console.log(sum);
}

sum(6, 10, 3, 5);

// es6

function sum2() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  console.log(values instanceof Array); //true

  var sum = 0;

  values.forEach(function (value) {
    sum += value;
  });
  console.log(sum);
}

sum2(6, 10, 3, 5);

// es6 reduce
function sum3() {
  for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    values[_key2] = arguments[_key2];
  }

  console.log(values.reduce(function (prevValue, curentValue) {
    return prevValue + curentValue;
  }));
}

sum3(6, 10, 3, 5);