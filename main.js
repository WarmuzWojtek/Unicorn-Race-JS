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
const divTimer = document.querySelector(".timer");
const score = document.querySelector(".score");
const yourScore = document.querySelector("div.score h1");
let position = 0;

// timer jako interwał

// let ms = 0;
// let s = 0;
// let m = 0;
// let run;

// const timer = () => {
//   ms++;
//   if (ms === 100) {
//     ms = 0;
//     s++;
//     if (s === 60) {
//       s = 0;
//       m++;
//     }
//   }

//   const sec = s <= 9 ? "0" + s : s;
//   const msec = ms <= 9 ? "0" + ms : ms;
//   const min = m <= 9 ? "0" + m : m;

//   divTimer.textContent = `${min}:${sec}:${msec}`;
// };

// function runFunction() {
//   run = setInterval(timer, 10);
// }

// dotąd

// timer z użyciem Date obj
function runFunction() {
  const date = new Date();
  const startTime = date.getTime();

  const timer = () => {
    let currentDate = new Date();
    let currentTime = currentDate.getTime();
    let time = ((currentTime - startTime) / 1000).toFixed(2);
    divTimer.textContent = time < 10 ? "0" + time : time;
  };

  run = setInterval(timer, 10);
}

// running function declaration

function raceFunction(e) {
  e.preventDefault();

  if (position < 90) {
    if (e.keyCode === 32) {
      runner.style.left = `${position}%`;
      position++;
      if (position === 85) {
        clearInterval(run);
        score.classList.add("activescore");
        yourScore.textContent = divTimer.textContent;
      }
    }
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

      runFunction();
      window.addEventListener("keyup", raceFunction);
    }
  };

  const myInterval = setInterval(countFunction, 1000);
};

initButton.addEventListener("click", initFunction);
timeTrialBtn.addEventListener("click", timeTrialFunction);
// window.addEventListener("keyup", raceFunction);
