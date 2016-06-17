let symbol = Symbol('name');
let symbol2 = Symbol('name');

console.log(symbol === symbol2);// false

let s1 = Symbol.for('name');
let s2 = Symbol.for('name');

console.log(s1 === s2); //true

let title = Symbol.keyFor(s1);
console.log(title);

//

let user = {
  username: 'r2d2',
  [Symbol.for('password')]: 'c3po'
};

// console.log(user.password);// undefined
// console.log(Object.keys(user));// ["username"]
// console.log(Object.getOwnPropertyNames(user));//["username"]

let password = user[Symbol.for('password')];
console.log(password);

console.log(Object.getOwnPropertySymbols(user));
