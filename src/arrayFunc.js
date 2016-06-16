let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

// es5
// arr.forEach(function(num){
//   sum += num;
// })

// es6
arr.forEach( num => sum += num );
console.log(sum);

// es5
// let square = arr.map(function(num){
//   return num * 2;
// })

// es6
let square = arr.map(num => num * 2);
console.log(square);

let person = {
  name: "Nazar",
  greet: function(){
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  }
};

person.greet();
