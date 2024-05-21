// Array :

// An array in js is a data structure to store multiple values of any type under a single name, including number, string, array and objects.
// An array is a collection of items stored at a contiguous memory location.
// An array is a zero-indexed meaning it starts from index 0.

// How to create an array :

// let numArray = [1, 2, 3, 45, 10];
// console.log(numArray); // [1,2,3,45,10]
// console.log(typeof numArray); // array

// let nums = 100;
// let chars = "Pramod";

// let arrayStore = [nums, chars];
// console.log(arrayStore);

// let randomArray = ["Pramod", "Ramesh", "Peeyush", 25];
// console.log(randomArray);

// Accessing elements :

// console.log(randomArray.length); // 4
// console.log(randomArray[0]);

// in optimized way

// Print me the last value of randomArray
// console.log(randomArray[3]);
// console.log(randomArray[randomArray.length - 1]);

// Modifying the element :

// randomArray[1] = "Suresh";
// console.log(randomArray);

// Array Methods :

// Push method :
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

let bikes = ["Pulsar", "Ninja", "KTM", "Harley", "Triumph"];
console.log(bikes);

bikes.push("Beneli");
console.log(bikes);

// Pop method :
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

console.log(bikes.pop()); // Triumph
console.log(bikes.pop()); // Beneli
console.log(bikes);