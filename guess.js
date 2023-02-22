function rand(randValue) {
  return Math.floor(Math.random() * randValue) + 1;
}

const onceMore = document.querySelector(".again");
const checker = document.querySelector(".check");
const random = rand(20);
const clue = document.querySelector(".guide");
const dissplayMessage = (message) => {
  clue.textContent = message;
};

checker.addEventListener("click", () => {
  const body = document.querySelector("body");
  const guessInput = document.querySelector(".number");
  const guessoutput = document.querySelector(".correct");
  const score = document.querySelector(".score");
  const highScore = document.querySelector(".highscore");
  const scoreVal = Number(score.textContent);
  const guess = Number(guessInput.value);
  if (guess > 0) {
    guessoutput.textContent = "?";
    if (guess === random) {
      dissplayMessage('"🎉🎉 correct"');
      // clue.textContent = "🎉🎉 correct";
      score.textContent = scoreVal;
      guessoutput.textContent = guess;
      body.style.backgroundColor = "violet";
      if (Number(score.textContent) > Number(highScore.textContent)) {
        highScore.textContent = scoreVal;
      }
    } else if (guess !== random) {
      if (Number(score.textContent) > 1) {
        dissplayMessage(
          guess > random
            ? " 📈 too high  guess harder "
            : " 📉 too low , guess harder "
        );
        score.textContent = scoreVal - 1;
        /*  clue.textContent =
          guess > random
            ? " 📈 too high  guess harder "
            : " 📉 too low , guess harder ";
        score.textContent = scoreVal - 1;*/
      } else {
        score.textContent = 0;
        dissplayMessage("😢😭💔💔💔 Game Over ");
        //clue.textContent = "😢😭💔💔💔 Game Over ";
      }
    }
  } else {
    dissplayMessage("⛔⛔ value not allowed");
    // clue.textContent = "⛔⛔ value not allowed";
    guessoutput.textContent = "🚫";
  }
});

onceMore.addEventListener("click", () => {
  const body = document.querySelector("body");
  const guessInput = document.querySelector(".number");
  const guessoutput = document.querySelector(".correct");
  const score = document.querySelector(".score");
  const clue = document.querySelector(".guide");
  const random = rand(20);
  dissplayMessage("💭💭Start Guess");
  //clue.textContent = "💭💭Start Guess";
  score.textContent = 20;
  guessInput.value = "";
  guessoutput.textContent = "?";
  body.style.backgroundColor = "black";
});
