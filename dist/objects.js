'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

var person = {
  firstName: firstName,
  lastName: lastName,
  email: email,
  sayHello: function sayHello() {
    console.log('Hi my name is ' + firstName + ' ' + lastName);
  }
};

// es5
Object.defineProperty(person, 'fullName', {
  get: function get() {
    return this.firstName + ' ' + this.lastName;
  },
  set: function set(value) {
    this.firstName = value;
  }
});

console.log(person);

person.sayHello();
//

var property = 'age';

var person2 = _defineProperty({}, property, '33');

console.log(person2);

function createCAr(property, value) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_' + property, value), _defineProperty(_ref, property.toUpperCase(), value), _ref;
}

console.log(createCAr('vin', 1));