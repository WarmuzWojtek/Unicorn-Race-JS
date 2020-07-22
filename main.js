const initButton = document.querySelector(".init");
const header = document.querySelector("header");
const tittle = document.querySelector("header p");
const gameMode = document.querySelector(".gameMode");
const timeTrialBtn = document.querySelector("timeTrial");
const chalengeBtn = document.querySelector(".chalenge");

const runner = document.querySelector(".you");
let position = 0;

const raceFunction = (e) => {
  if (e.keyCode === 32) {
    console.log("działa");
    runner.style.left = `${position}%`;
    position++;
  }
};
const initFunction = () => {
  header.classList.toggle("activeHeader");
  tittle.classList.add("activeHeaderP");
  initButton.classList.add("hide");
  gameMode.classList.remove("gameMode");
  gameMode.classList.add("active");
};

initButton.addEventListener("click", initFunction);

window.addEventListener("keyup", raceFunction);
