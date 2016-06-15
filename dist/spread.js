'use strict';

var staticLanguages = ['C', 'C++', 'Java'];
var dynamicLanguages = ['JS', 'PHP', 'Ruby'];

var languages1 = [staticLanguages, 'C#', dynamicLanguages, 'Python'];
// зверху просто вставляються масиви як елементи іншого
// знизу вставляться елементи з масивів, завдяки трьом крапкам
var languages2 = [].concat(staticLanguages, ['C#'], dynamicLanguages, ['Python']);

console.log(languages1);
// [Array[3], "C#", Array[3], "Python"]
console.log(languages2);
// ["C", "C++", "Java", "C#", "JS", "PHP", "Ruby", "Python"]

// function

var add = function add(a, b, c) {
  console.log(a + b + c);
};

var arr = [1, 2, 3];

add.apply(undefined, arr);