'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var symbol = Symbol('name');
var symbol2 = Symbol('name');

console.log(symbol === symbol2); // false

var s1 = Symbol.for('name');
var s2 = Symbol.for('name');

console.log(s1 === s2); //true

var title = Symbol.keyFor(s1);
console.log(title);

//

var user = _defineProperty({
  username: 'r2d2'
}, Symbol.for('password'), 'c3po');

// console.log(user.password);// undefined
// console.log(Object.keys(user));// ["username"]
// console.log(Object.getOwnPropertyNames(user));//["username"]

var password = user[Symbol.for('password')];
console.log(password);

console.log(Object.getOwnPropertySymbols(user));