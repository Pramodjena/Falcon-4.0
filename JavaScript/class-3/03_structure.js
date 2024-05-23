// De-structure :

// destructuring is a process to extract the values of array and object and to re-assign them into a new variables.
// it is a shorthand way to extract the values of array and object.

// let myArray = ["Pramod", "Rudra", "Akash", "Muna"];
// let [name1, name2, name3, name4] = myArray; // destructure
// console.log(myArray);
// console.log(name1, name2, name3, name4); // output : Pramod Rudra Akash Muna
// console.log(name1);
// console.log((name1 = "Smruti"));
// console.log((myArray[0] = name1));
// console.log(myArray);

// skipping elements :
// let [, , name3, name4] = myArray;
// console.log(name3, name4);

// rest operator :
// let [name1, name2, ...rest] = myArray;
// console.log(name1); // Pramod
// console.log(name2); // Rudra
// console.log(rest); // ["Akash","Muna"]

// destructure of object
let student = {
  name: "John",
  age: 30,
  city: "Bhubaneswar",
  marks: [80, 90, 70],
  isMarried: false,
  address: { po: "RRL", pin: 751013 },
};

// let { name, age, city } = student; // destructure
// console.log(name, age, city);

let { name, age, ...rest } = student;
console.log(name, age, rest);  // rest operator 
