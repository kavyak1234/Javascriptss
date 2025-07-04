// // 1.question1
// function checkEvenOrodd(num1,num2) {
//     const sum = num1 + num2
//     return sum % 2 ===0 ? "this number is even":"this number is odd";
// }
// console.log(checkEvenOrodd(3,5));
// console.log(checkEvenOrodd(2,5));

// 2.question2
// function formatString(num,str) {
//     return num >10? str.toUpperCase():str.toLowerCase();
// }
// console.log(formatString(12,"uppercase"));
// console.log(formatString(5,"lowercase"));

// 3.question3
function checkAgeStatus(name,age) {
    return age <18 ? `${name} is a minor` : `${name} is a adult`;
}
console.log(checkAgeStatus("kavya",21));
console.log(checkAgeStatus("adarsh",21))