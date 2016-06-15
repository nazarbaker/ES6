let staticLanguages = ['C', 'C++', 'Java'];
let dynamicLanguages = ['JS', 'PHP', 'Ruby'];

let languages1 = [staticLanguages, 'C#', dynamicLanguages, 'Python'];
// зверху просто вставляються масиви як елементи іншого
// знизу вставляться елементи з масивів, завдяки трьом крапкам
let languages2 = [...staticLanguages, 'C#', ...dynamicLanguages, 'Python'];

console.log(languages1);
// [Array[3], "C#", Array[3], "Python"]
console.log(languages2);
// ["C", "C++", "Java", "C#", "JS", "PHP", "Ruby", "Python"]

// function

let add = function(a,b,c){
  console.log(a + b + c);
}

let arr = [1,2,3];

add(...arr);
