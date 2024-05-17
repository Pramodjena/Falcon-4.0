// decalre a variable

// Number :

let num = 100;
console.log(num); // to print the output

let Num = 50;
console.log(Num);

// space dosn't allow while declaring variable
// let second num = 1000;

let second_num = 1000; // second_num(snakeCase)
console.log(second_num);

let secondNum = 1000; // secondNum(camelCase)
console.log(secondNum);

let decimal_num = 15.35;
console.log(decimal_num);

console.log(typeof decimal_num);

// Task:
// task1: Declare a number variable and assign a value to it.
// task2: Declare different variables of numbers and assign different values to perform mathematical operation.
// eg: addition , subtraction , multiplication , division and modulus.

// Examples:
// let num1 = 12;
// let num2 = 13;
// let addition = num1 + num2;
// console.log(addition); // 25

// String :

// String is a collection of charcters.
// String should be in " ... "

let name = "Pramod";
console.log("My name is:", name); // Pramod

// using backtick `` :
console.log(`My name is ${name}`);

console.log(typeof name); // string

// Fun Fact :

let numbers = "1000"; // let,var,const(keyword) , =(assign operator), "1000"(value);
let strings = 1000;

console.log(typeof numbers); // string
console.log(typeof strings); // number

// BigInt :

// BigInt is a new data type in JavaScript that can represent integers of any size. It is used to store integers that are too large or too small.

let bigInt = 1000000000000000;
console.log(bigInt);

// Null :

let result = null; // null : void / empty;
console.log(typeof result); // null

// Undefined :

// let value = undefined;
let value; // nothing is assigned.
console.log(value); // undefined
console.log(typeof value); // undefined

// Boolean :

let isMarried = false;
console.log(typeof isMarried); // boolean
console.log(!isMarried); // true

// Symbol :

// Symbol is a data types in JS to produce unique key values and it's introduced in ES6.
// It is used to create unique identifiers for objects.

let symbol1 = Symbol("abc"); // differnet value
let symbol2 = Symbol("def"); // differnet value
console.log(symbol1 === symbol2); // false

console.log(symbol1.description);
console.log(symbol2.description);

// NaN :
// NaN is a data type in JS that represents a non-numeric value. It is used to represent values that are not numbers, such as 1 , 2 , 3 ... etc"

let num_value1 = 100;
let num_value2 = "150";
console.log(num_value1 + num_value2); // 100150 

let output = 0 / 0;
console.log(output); // NaN(Not a Number)

