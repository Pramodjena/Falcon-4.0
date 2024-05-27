// on load
const myName = prompt("Please enter your name: ");
window.addEventListener("load", () => {
  alert(`Hey ${myName} welcome back`);
});

const heading = document.querySelector(".heading");
heading.innerText = `Hey ${myName} welcome back`;
heading.style.color = "black";

// to select the body tag
const body = document.querySelector("body");

const color = document.querySelectorAll(".color"); // nodeList[]

// random color generator
// hexacode #212121(grey)

function randomColorGenerator() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += Math.floor(Math.random() * 16).toString(16); //output: #201564
  }
  return randomColor;
}
// console.log(randomColorGenerator());

function colorChange(e) {
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
      body.style.backgroundColor = randomColorGenerator();
      break;

    default:
      body.style.backgroundColor = "white";
      break;
  }
}

color.forEach((color) => {
  color.addEventListener("click", (e) => colorChange(e));
});
