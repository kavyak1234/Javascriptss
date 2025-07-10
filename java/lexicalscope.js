// const newFunction = function () {
//     console.log("hello") ;
// };

// newFunction();
// // closure
// function parent() {
//     const a = 20;
//     console.log(a)

// function Child() {
//     console.log(a);

// }
// }
// Child();
// parent();

// CLOSURE
// function counter() {
//     let count = 0;

// function increment() {
//     count++;
//     console.log(count);
// }
// return increment;
// }
// // console.log(counter());

// let functionbody = counter();
// console.log(functionbody);

// functionbody();
// functionbody();
// functionbody();
// functionbody();
// functionbody();
// functionbody();



// questions
function createAdder(x) {
    return function(y) {
        return x+y;
    }

}
const add5 = createAdder(5);
console.log(add5(10)); 

// 4. 
function greet(name) {
  return function() {
    console.log(`Hello ${name}`);
  }
}


const greetKavya = greet("Kavya");
greetKavya(); 

// 5.
function outer() {
    let x =5;
    return function inner() {
        console.log(x);
    }
}
const fn = outer();
fn();