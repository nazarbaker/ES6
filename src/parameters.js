function greet(greeting, name) {
  console.log(`${greeting} ${name}`);
}

greet('Hi', 'Bill');
greet('Hi');// "Hi undefined"

function greet2(greeting = 'Hi', name = 'Bill') {
  console.log(`${greeting} ${name}`);
}

greet2();
//
// es5
function sum() {
  console.log(arguments instanceof Array);//false
  var sum = 0;
// додавання аргументам методу forEach через прототип масиву
  Array.prototype.forEach.call(arguments, function(value){
    sum += value;
  });
  console.log(sum);
}

sum(6, 10, 3, 5);

// es6

function sum2(...values){
  console.log(values instanceof Array);//true

  let sum = 0;

  values.forEach(function(value){
    sum += value;
  });
  console.log(sum);
}

sum2(6, 10, 3, 5);

// es6 reduce
function sum3(...values){
  console.log(values.reduce(function(prevValue, curentValue){
    return prevValue + curentValue;
  }));
}

sum3(6, 10, 3, 5);
