//todo Q1. Print your birthday in the console using the Date object.

let birthday = new Date("1998-08-21"); // date variable

// let day = birthday.getDate();
// let month = birthday.getMonth() + 1; // Months are zero-indexed
// let year = birthday.getFullYear();

// console.log("My birthday is on: " + day + "-" + month + "-" + year);

//todo Q3. Print your current age in the console using the Date object.

let currentDate = new Date("2024-05-22"); // format

let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

let MyBirthday = new Date("1998-08-21"); // format

let birthDay = MyBirthday.getDate();
let birthMonth = MyBirthday.getMonth() + 1; // Months are zero-indexed
let birthYear = MyBirthday.getFullYear();

console.log(`My Current age: ${currentYear - birthYear}`);

// Q: How can you add multiple elements to the end of an array in one push call?

let myArray = ["Smruti", "Sudeshna", "Muna", "Akash", 4];
myArray.push("Pramod", 50, 10);  // adding multiple element
console.log(myArray);
