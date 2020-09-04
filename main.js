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
const runnerImg = document.querySelector(".you img");
const divTimer = document.querySelector(".timer");
const score = document.querySelector(".scores");
const score1 = document.querySelector(".score");
const score2 = document.querySelector(".highscores");
const yourScore = document.querySelector("div.score h1");
let position = 0;
const playerName = document.querySelector(".score input");
const place1 = document.querySelector(".first");
const place2 = document.querySelector(".second");
const place3 = document.querySelector(".third");
const place4 = document.querySelector(".fourth");
const place5 = document.querySelector(".fifth");
const reTimeTrialBtn = document.querySelector(".newTrial");
const restartBtn = document.querySelector(".restart");
let newScore;

let highScores = [
  {
    name: "Hila",
    score: "45.12",
  },
  {
    name: "Hela",
    score: "20.20",
  },
  {
    name: "Hercia",
    score: "25.56",
  },
  {
    name: "Holly",
    score: "34.56",
  },
  {
    name: "Hola",
    score: "33.14",
  },
];

const reTimeTrialFn = () => {
  score.classList.remove("activescores");
  score1.classList.remove("hide");
  divCounter.style.display = "block";
  countNumber = 3;
  position = 0;
  runner.style.left = `${position}%`;
  divCounter.style.fontSize = "50vh";
  divCounter.style.top = "0";
  divCounter.textContent = "";
  divTimer.textContent = "";
  score2.classList.remove("activehighscores");
  timeTrialFunction();
};

// funkcja zapisywania najlepszych wyników
const highScoresFunction = (e) => {
  score1.classList.add("hide");
  newScore = { name: e.target.value, score: yourScore.textContent };
  function compare(a, b) {
    if (a.score < b.score) {
      return -1;
    }
    if (a.score > b.score) {
      return 1;
    }
    return 0;
  }
  highScores.push(newScore);
  let newHighScores = highScores.sort(compare);
  place1.textContent = `1. ${newHighScores[0].name} czas ${newHighScores[0].score}`;
  place2.textContent = `2. ${newHighScores[1].name} czas ${newHighScores[1].score}`;
  place3.textContent = `3. ${newHighScores[2].name} czas ${newHighScores[2].score}`;
  place4.textContent = `4. ${newHighScores[3].name} czas ${newHighScores[3].score}`;
  place5.textContent = `5. ${newHighScores[4].name} czas ${newHighScores[4].score}`;
  score2.classList.add("activehighscores");
  reTimeTrialBtn.addEventListener("click", reTimeTrialFn);
};

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
  runner.style.left = `${position}%`;
  runnerImg.src = "/Img/runningUnicorn.png";
  if (position < 90) {
    if (e.keyCode === 32) {
      // runner.style.left = `${position}%`;
      position++;
      if (position === 85) {
        clearInterval(run);
        runnerImg.src = "/Img/runner.png.png";
        score.classList.add("activescores");
        playerName.value = "";
        yourScore.textContent = divTimer.textContent;
        playerName.addEventListener("change", highScoresFunction);
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
