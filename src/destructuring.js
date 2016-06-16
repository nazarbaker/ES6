// arrays

// let languages = ['JavaScript', 'PHP', 'Ruby'];

// es5
// let js = languages[0];
// let php = languages[1];
// let rb = languages[2];

// es6
// let js, php, rb;
// let [js, php, rb] = languages;
// або так
let [js, php, rb] = ['JavaScript', 'PHP', 'Ruby'];

console.log(js, php, rb);

// objects

let person = {
  firstName: 'Jonh',
  lastName: 'Doe'
};

let fn = person.firstName;
let ln = person.lastName;

// es6
let {firstName, lastName} = person;
console.log(firstName, lastName);
