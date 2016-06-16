"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;

// es5
// arr.forEach(function(num){
//   sum += num;
// })

// es6
arr.forEach(function (num) {
  return sum += num;
});
console.log(sum);

// es5
// let square = arr.map(function(num){
//   return num * 2;
// })

// es6
var square = arr.map(function (num) {
  return num * 2;
});
console.log(square);

var person = {
  name: "Nazar",
  greet: function greet() {
    var _this = this;

    setTimeout(function () {
      console.log(_this.name);
    }, 2000);
  }
};

person.greet();