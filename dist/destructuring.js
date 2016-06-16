'use strict';

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
var js = 'JavaScript';
var php = 'PHP';
var rb = 'Ruby';


console.log(js, php, rb);

// objects

var person = {
  firstName: 'Jonh',
  lastName: 'Doe'
};

var fn = person.firstName;
var ln = person.lastName;

// es6
var firstName = person.firstName;
var lastName = person.lastName;

console.log(firstName, lastName);