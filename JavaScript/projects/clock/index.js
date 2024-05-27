// update clock

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourHand = document.querySelector("#hour");
  const minuteHand = document.querySelector("#minute");
  const secondHand = document.querySelector("#second");

  const hourHandRotate = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  const minuteHandRotate = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const secondHandRotate = (seconds / 60) * 360 + 90;

  hourHand.style.transform = `rotate(${hourHandRotate}deg)`;
  minuteHand.style.transform = `rotate(${minuteHandRotate}deg)`;
  secondHand.style.transform = `rotate(${secondHandRotate}deg)`;
}

setInterval(() => {
  updateClock();
}, 1000);

updateClock();
