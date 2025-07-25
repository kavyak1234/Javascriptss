let names = new Array("John", "Jane", "Joe");

let empty = Array(5);

console.log(empty.length);

// push

console.log(array);

array.push("String");

console.log(array);

// pop

let value = array.pop();

console.log(value);

// shift

let value2 = array.shift();

console.log(value2);

console.log(array);

// unshift

array.unshift("String");

console.log(array);

let array = [7, 8, 4, 5, 6, 7, 10000, "acbc", 7, 8, 10000, 9];

array.splice(1, 1);

console.log(array);

console.log(array.includes(100));

console.log(array.lastIndexOf(10000));

console.log(array.sort((a, b) => b - a));

console.log(array.find((value) => value === "abc"));
