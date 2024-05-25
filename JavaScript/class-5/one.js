const parent = document.querySelector(".parent"); // catch or select
parent.setAttribute("id", "parent-id");
//   parent.setAttribute("class", "parent-class");
parent.innerHTML += `<div class="day">Saturday</div>`;
parent.innerHTML += `<div class="day">Sunday</div>`;
console.log(parent);

//todo? optimized way add colors to every child

let child = document.querySelectorAll(".day"); // nodelist
console.log(child);

// remove a child
child[6].remove();

//   for (let i = 0; i < child.length; i++) {
// child[i].style.background = `hsl(${i * 30}, 50%, 50%)`;
//     if (child[i].innerHTML === "Monday") {
//       child[i].style.color = "red";
//   console.log(child[i]);
//     }
// child[i].style.color = "red";
//   }

// using hof forEach method :
child.forEach((el, i) => {
  // el.style.background = `hsl(${i * 30}, 50%, 50%)`;
  el.style.background = "blue";
});

console.log(child[0]);
const monday = child[0];
console.log(monday);
//   monday = monday.innerText = "Pramod";
//   const paragraph = document.querySelector("#paragraph");
//   console.log(paragraph);
const paragraph = document.getElementById("paragraph");
console.log(paragraph);

// create a another div and append inside the parent div
const newDay = document.createElement("div");
newDay.innerText = "Invalid Day";
parent.append(newDay);

// create a heading tag
const main_heading = document.querySelector(".main_heading");
const heading = document.createElement("h1");
heading.innerText = "DOM manipulation using JS";
main_heading.append(heading);
