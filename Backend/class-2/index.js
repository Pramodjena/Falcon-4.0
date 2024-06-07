// Import the modules
const readline = require("readline");
const { sum, subtract, multiply, division } = require("./data");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter your name: ", (name) => {
  rl.question("Enter first number:", (num1) => {
    rl.question("Enter second number:", (num2) => {
      const number1 = parseFloat(num1);
      const number2 = parseFloat(num2);
      const result = sum(number1, number2);
      console.log(`The sum result is: ${result}`);
      console.log(`My name is ${name}`);
      rl.close();
    });
  });
});

// console.log(sum(5, 8));
// console.log(subtract(5, 8));
// console.log(multiply(5, 8));
// console.log(division(5, 8));
