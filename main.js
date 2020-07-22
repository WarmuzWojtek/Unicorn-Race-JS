const initButton = document.querySelector(".init");
const header = document.querySelector("header");

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
};

initButton.addEventListener("click", initFunction);
window.addEventListener("keyup", raceFunction);
