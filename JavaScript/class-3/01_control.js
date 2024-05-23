// Control flow statement :

// Conditional statement :
// Statements that are perform different actions based on different conditions used to make decision in code.

// Types :
// 1. If Statement :
// 2. Else..if Statement :
// 3. Else Statement :
// 4. Switch Statement :
// 5. Ternary Operator :

// if statement :

// syntax :

// if (condition) {

// }

// let age = 26; // decalre a variable
// if (age >= 18) {
//   console.log("You are an adult");
// }

// if ...else statement

// let age = 18; // decalre a variable
// if (age > 18) {
//   console.log("You are an adult");
// } else if (age == 18) {
//   console.log("You are 18");
// } else {
//   console.log("You are not an adult");
// }

// else statement :

// let age = 17; // decalre a variable
// if (age >= 18) {
//   console.log("You are an adult");
// } else {
//   console.log("You are not an adult");
// }

// switch statement :
// syntax :
let day = 0; // declare a variable

switch (day) {
  case 1:
    console.log("Today is Monday");
    break; // break wont allow to the next
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednsday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;
  case 7:
    console.log("Today is Sunday");
    break;

  // default: // if none of the above cases match
  default:
    console.log("Invalid day");
    break;
}

// Ternary operator :
// syntax : ?
let age = 19;
age>=18 ? console.log("You are an adult") : console.log("You are not an adult");
