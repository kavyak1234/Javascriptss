// let age = 17;
// // SIMPLE IF CONDITION
// if (age >= 19) {
//     console.log("you can apply for voter id");

// }
// // IF ELSE CONDITION

// if (age >= 18) {
//     console.log("you can apply for voter id");
// } else {
//     console.log("you are under age");

// }

// // IF ELSE IF LADDER
// let number = 41;
// if (number == 20) {
//     console.log("number is 20");

// }else if (number == 30) {
//     console.log("number is 30");
// } else if (number == 40) {
//     console.log("number is 40");
// } else {
//     console.log("you entered the wrong number" );
// }

let username = "admin";
let password = 1234567;

if (username === "admin") {
    if (password === 1234567) {
        console.log("you are authenticated success login");
    } else {
        console.log("invalid password");
    }
}else{
    console.log("invalid user name");
}
// finding the largest among three number

let num1 = 1030;
let num2 = 400;
let num3 = 50;
 if (num1 > num2) {
    if (num1 > num3) {
        console.log("number 1 is the largest");
    }else if (num2>num3) {
        console.log("number 3 is the largest");
    }
    
 }else if (num2 > num3) {
    console.log("number  2 is the largest");
 }else {
    console.log("number 3 is the largest")
 }
// //  switch case
let today = "wednesday";

switch (today) {
    case "monday":
    console.log("today is monday");
    break;

    case "tuesday":
        console.log("today is tuesday");
        break;

    case "wednesday":
        console.log("today is wednesday");
        break;

    case "thursday":
        console.log("today is thursday");
        break;
    case "friday":
        console.log("today is friday");
        break;
    case "satarday":
        console.log ("today is satarday");
        break;
    default:
        console.log("today is sunday");

}