let num1 = 100;
let num2 = 200;
console.log("Num1", num1); // traditional way
console.log("Num2", num2);
console.log(typeof num1);
// using backticks
console.log(`Num1: ${num1} and Num2: ${num2}`);

// Number to String conversion :

let conversion_num1 = String(num1);
console.log(typeof conversion_num1); // string

// String to Number conversion :

let conversion_num2 = Number(conversion_num1);
console.log(typeof conversion_num2); // number

let con_num1 = "100";
let con_num2 = "200";

console.log(typeof con_num1); // string
console.log(typeof con_num2); // string

// without using constructor function we can convert
console.log(typeof +con_num1); // number
console.log(typeof +con_num2); // number


