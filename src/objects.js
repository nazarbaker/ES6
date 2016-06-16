let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@microsoft.com';

let person = {
  firstName,
  lastName,
  email,
  sayHello(){
    console.log(`Hi my name is ${firstName} ${lastName}`);
  },
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  set fullName() {
    this.firstName = value;
  }
};


// es5 раніше було так
// Object.defineProperty(person, 'fullName', {
//   get: function(){
//     return this.firstName + ' ' + this.lastName;
//   },
//   set: function(value){
//     this.firstName = value;
//   }
// })

console.log(person);

person.sayHello();
//

let property = 'age';

let person2 = {
  [property]: '33'
}

console.log(person2);

function createCAr(property, value) {
  return {
    [property]: value,
    ['_' + property]: value,
    [property.toUpperCase()]: value
  }
}

console.log(createCAr('vin', 1));
