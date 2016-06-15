function add(x, y) {
  console.log(`${x} + ${y} = ${x + y}`); // 2 + 8 = 10
}

add(2,8);

// tags

let name = 'Bill';
console.log(upperName`Hello ${name}`);

function upperName(literals, value) {
  return literals[0] + value.toUpperCase();
}
