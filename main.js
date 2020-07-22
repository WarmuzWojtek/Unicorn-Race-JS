const initButton = document.querySelector(".init");
const header = document.querySelector("header");
const tittle = document.querySelector("header p");
const gameMode = document.querySelector(".gameMode");
const timeTrialBtn = document.querySelector(".timeTrial");
const chalengeBtn = document.querySelector(".chalenge");
const divCounter = document.querySelector(".counter");
let countNumber = 3;
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

const countFunction = () => {
  if (countNumber > 0) {
    divCounter.textContent = countNumber;
    countNumber--;
  } else {
    clearInterval(myInterval);
  }
};

const timeTrialFunction = () => {
  gameMode.classList.remove("active");
  gameMode.classList.add("gameMode");
  const myInterval = setInterval(countFunction, 1000);
  //       if (divCounter.textContent === 1) {
  //         clearInterval(myInterval);
  //   };
};

initButton.addEventListener("click", initFunction);
timeTrialBtn.addEventListener("click", timeTrialFunction);
window.addEventListener("keyup", raceFunction);
