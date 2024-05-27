// to get the element
const clock = document.querySelector(".clock");
const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".second");

function startClock() {
  const myDate = new Date();
  const hour = myDate.getHours();
  const minute = myDate.getMinutes();
  const second = myDate.getSeconds();
  hours.innerText = hour;
  minutes.innerText = minute;
  seconds.innerText = second;
}

// to run every 1sec interval
setInterval(() => {
  startClock();
}, 1000);
