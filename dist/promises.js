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

function getVisa(visa) {
  console.info('Віза отримана!');
  // return visa;
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve(visa);
    }, 2000);
  });
}

function bookHotel(visa) {
  // return new Promise(function(resolve, reject){
  //   return Math.random() > 0.5 ? resolve({}) : reject('Нема місць!');
  // });
  return Promise.resolve(visa);
}

function buyTiсkets(booking) {
  console.log('Купили квитки');
  console.log('Бронь', booking);
}

// виклик функції з трьома аргументами
applyForVisa({}).then(getVisa).then(bookHotel).then(buyTiсkets).catch(function (error) {
  return console.error(error);
});