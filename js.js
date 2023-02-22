let row = "";
for (let i = 10; i > 0; i--) {
  console.log("a");
  for (let j = i - 1; j < i; j++) {
    row = row + "#";
    console.log(row);
  }
}
const pep = "moi";
function see() {
  console.log(pep);
}

see(pep);
/*checker.addEventListener("click", () => {
  const guessInput = document.querySelector(".number");
  const guessoutput = document.querySelector(".correct");
  const score = document.querySelector(".score");
  const highScore = document.querySelector(".highscore");
  const onceMore = document.querySelector(".again");
  const checker = document.querySelector(".check");
  const clue = document.querySelector(".guide");
  const scoreVal = counter;
  const guess = Number(guessInput.value);
  console.log(i);
  if (guess < random) {
    clue.textContent = ` 🤦‍♀️ too low , keep guessing...`;
    guessoutput.textContent = `${guess}`;
    score.textContent = i - 1;
  }
});

*/
