var buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].innerText = i + 1;
  buttons[i].onclick = function(e) {
    console.log(i);
  }
}
