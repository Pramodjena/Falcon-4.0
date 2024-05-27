// on load
const myName = prompt("Please enter your name: ");
window.addEventListener("load", () => {
  alert(`Hey ${myName} welcome back`);
});
// select the element

const body = document.querySelector("body");
const heading = document.querySelector(".heading");
const color = document.querySelectorAll(".color");

// generate random color in hexacode #212121

function generateRandomColor() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += Math.floor(Math.random() * 16).toString(16);
  }
  return randomColor;
}

function colorChanger(e) {
  //   console.log(e.target.id);
  switch (e.target.id) {
    case "grey":
      body.style.backgroundColor = "grey";
      break;
    case "green":
      body.style.backgroundColor = "green";
      break;
    case "black":
      body.style.backgroundColor = "black";
      heading.style.color = "white";
      break;
    case "blue":
      body.style.backgroundColor = "blue";
      break;
    case "random":
      body.style.backgroundColor = generateRandomColor();
      break;
    default:
      body.style.backgroundColor = "white";
      break;
  }
}

color.forEach((color) => {
  color.addEventListener("click", (e) => colorChanger(e));
});
