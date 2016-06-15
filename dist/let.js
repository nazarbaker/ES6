'use strict';

var buttons = document.querySelectorAll('button');

var _loop = function _loop(i) {
  buttons[i].innerText = i + 1;
  buttons[i].onclick = function (e) {
    console.log(i);
  };
};

for (var i = 0; i < buttons.length; i++) {
  _loop(i);
}