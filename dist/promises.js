'use strict';

// звичайні колбеки
// function applyForVisa(documents, resolve, reject) {
//   console.log('Обробка заявки');
//   setTimeout(function(){
//     Math.random() > 0.5 ? resolve({}) : reject('Відмова!!!')
//   }, 2000);
// }
//
// // виклик функції з трьома аргументами
// applyForVisa({},
//   function(visa){
//     console.info('Віза отримана!');
//   },
//   function(reason){
//     console.error(reason);
// });

//
function applyForVisa(documents) {
  console.log('Обробка заявки');
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      Math.random() > 0.5 ? resolve({}) : reject('Відмова!!!');
    }, 2000);
  });
  return promise;
}

function bookHotel() {
  console.log('Забукано Готель');
}

function buyTiсkets() {
  console.log('Купили квитки');
}

// виклик функції з трьома аргументами
applyForVisa({}).then(function (visa) {
  return console.info('Віза отримана!');
}
// reason => console.error(reason)
).then(bookHotel).then(buyTiсkets).catch(function (error) {
  return console.error(error);
});