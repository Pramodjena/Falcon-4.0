// Scope

// The current context of execution where values and expressions are visible or can be referenced.

// global scope :
let globalVariable = "Hey I am Global"; // global variable

function funScope() {
  // function scope
  let myProps = "It's mine";
  console.log(globalVariable); 
  console.log(myProps);  
}
console.log(globalVariable); 
// console.log(myProps); // not defined 
// let resultScope = funScope(); // function call  whenever return(variable) 
// console.log(resultScope);   // undefined 

// right way 
funScope()

