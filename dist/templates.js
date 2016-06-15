'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function add(x, y) {
  console.log(x + ' + ' + y + ' = ' + (x + y)); // 2 + 8 = 10
}

add(2, 8);

// tags

var name = 'Bill';
console.log(upperName(_templateObject, name));

function upperName(literals, value) {
  return literals[0] + value.toUpperCase();
}