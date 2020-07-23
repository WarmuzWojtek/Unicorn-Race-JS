const initButton = document.querySelector(".init");
const header = document.querySelector("header");
const tittle = document.querySelector("header p");
const gameMode = document.querySelector(".gameMode");
const timeTrialBtn = document.querySelector(".timeTrial");
const chalengeBtn = document.querySelector(".chalenge");
const divCounter = document.querySelector(".counter");
const startLine = document.querySelector(".start");
const stopLine = document.querySelector(".stop");
let countNumber = 3;
const runner = document.querySelector(".you");
let position = 0;

// running function declaration

function raceFunction(e) {
  e.preventDefault();
  if (e.keyCode === 32) {
    console.log("działa");
    runner.style.left = `${position}%`;
    position++;
  }
}

// function for initButton
const initFunction = () => {
  header.classList.toggle("activeHeader");
  tittle.classList.add("activeHeaderP");
  initButton.classList.add("hide");
  gameMode.classList.remove("gameMode");
  gameMode.classList.add("active");
};

// function for timeTrial
const timeTrialFunction = () => {
  gameMode.classList.remove("active");
  gameMode.classList.add("gameMode");
  divCounter.style.display = "block";
  startLine.animate(
    [
      // keyframes
      { opacity: 0 },
      { opacity: 1 },
    ],
    {
      // timing options
      duration: 4000,
    }
  );
  startLine.style.opacity = 1;

  stopLine.animate(
    [
      // keyframes
      { opacity: 0 },
      { opacity: 1 },
    ],
    {
      // timing options
      duration: 4000,
    }
  );
  stopLine.style.opacity = 1;

  runner.animate(
    [
      // keyframes
      { opacity: 0 },
      { opacity: 1 },
    ],
    {
      // timing options
      duration: 4000,
    }
  );
  runner.style.opacity = 1;
  const countFunction = () => {
    if (countNumber > 0) {
      divCounter.textContent = countNumber;
      divCounter.animate(
        [
          // keyframes
          { transform: "translateX(-50%) scale(1)" },
          { transform: "translateX(-50%) scale(0)" },
        ],
        {
          // timing options
          duration: 1000,

          // iterations: Infinity
        }
      );

      countNumber--;
    } else {
      divCounter.textContent = "START!!!";
      divCounter.style.fontSize = "10vh";
      divCounter.style.top = "-10%";
      divCounter.animate(
        [
          // keyframes
          { opacity: 1 },
          { opacity: 0 },
        ],
        {
          // timing options
          duration: 1000,

          iterations: 1,
        }
      );
      setTimeout(() => {
        divCounter.style.display = "none";
      }, 1000);
      clearInterval(myInterval);
      window.addEventListener("keyup", raceFunction);
    }
  };

  const myInterval = setInterval(countFunction, 1000);
};

initButton.addEventListener("click", initFunction);
timeTrialBtn.addEventListener("click", timeTrialFunction);
// window.addEventListener("keyup", raceFunction);
