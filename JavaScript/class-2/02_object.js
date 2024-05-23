// Object :

// A collection of properties, where each property is defined as a key-value pair.
// Each property has a key and a value.
// The value can be a string, number, boolean, array, object, or function.

// Syntax:

// Traditional method
/*
let student = {
  name: "John",
  age: 30,
  city: "Bhubaneswar",
  marks: [80, 90, 70],
  isMarried: false,
  address: { po: "RRL", pin: 751013 },
};
*/

// let array = ["John", 30, "Bhubaneswar", [80, 90, 70], false];

// Creating object :
// Using object literal :
let student = {
  name: "John",
  age: 30,
  city: "Bhubaneswar",
  marks: [80, 90, 70],
  isMarried: false,
  address: { po: "RRL", pin: 751013 },
};
console.log(student);

// Constructor :
let newStudent = new Object();
newStudent.name = "John";
newStudent.age = 30;
newStudent.city = "Bhubaneswar";
newStudent.marks = [80, 90, 70];
newStudent.isMarried = false;
newStudent.address = { po: "RRL", pin: 751013 };
// console.log(newStudent);

// Accessing object :

// myarray[0]
// console.log(student.name); // dot notation
// console.log(student["marks"]); // bracket notation

// Modifying object :

// dot notation
student.name = "Rahul";
student.age = 31;
console.log(student);

// bracket notation
student["name"] = "Pramod";
student["age"] = 26;
console.log(student);

// Deleting object

delete student.age;
console.log(student);

// Object keys

let keys = Object.keys(student);
console.log(keys); // it gives the only keys [ 'name', 'city', 'marks', 'isMarried', 'address' ]

// Object values
let value = Object.values(student);
console.log(value);  // it gives you the key values 

// Object entries
let entry = Object.entries(student);
console.log(entry);  // it gives you both keys and value

