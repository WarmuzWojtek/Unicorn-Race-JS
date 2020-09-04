const chalengeBtn = document.querySelector(".chalenge");
const opponent1 = document.querySelector(".opp1");
const opponent2 = document.querySelector(".opp2");
const opponent1time = document.querySelector("div.opp1 p");
const opponent2time = document.querySelector("div.opp2 p");

function showOpponent1Time() {
  opponent1time.style.opacity = 1;
}
function showOpponent2Time() {
  opponent2time.style.opacity = 1;
}

const chalengeFn = () => {
  let opponent1speed = (Math.random() * 6 + 13).toFixed(2);
  let opponent2speed = (Math.random() * 6 + 13).toFixed(2);
  opponent1time.textContent = `${opponent1speed}`;
  opponent2time.textContent = `${opponent2speed}`;

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
  opponent1.animate(
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
  opponent1.animate(
    [
      // keyframes
      { transform: "translateX(0)" },
      { transform: "translateX(850%)" },
    ],
    {
      // timing options
      duration: `${opponent1speed}` * 1000,
      easing: "ease-in",
      delay: 4000,
    }
  );
  opponent2.animate(
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
  opponent2.animate(
    [
      // keyframes
      { transform: "translateX(0)" },
      { transform: "translateX(850%)" },
    ],
    {
      // timing options
      duration: `${opponent2speed}` * 1000,
      delay: 4000,
      easing: "ease-in-out",
    }
  );
  setTimeout(showOpponent1Time, opponent1speed * 1000 + 4000);
  setTimeout(showOpponent2Time, opponent2speed * 1000 + 4000);
  runner.style.opacity = 1;
  opponent1.style.opacity = 1;
  opponent2.style.opacity = 1;
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
      divCounter.style.top = "-20%";
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

chalengeBtn.addEventListener("click", chalengeFn);
