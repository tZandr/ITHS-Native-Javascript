/* ----------------------------------------------------
                    ****FÄRDIG****

const correctNumber = Math.floor(Math.random() * 100) + 1;

let guess = Number(prompt("Guess a number between 1-100."));
let attempts = 0;
while (guess != correctNumber) {
  if (guess > correctNumber) {
    guess = Number(prompt("Too high! Try again."));
    attempts++;
  } else if (guess < correctNumber) {
    guess = Number(prompt("Too low, try again."));
    attempts++;
  }
}

alert(
  `Correct! ${correctNumber} was the answer! You guessed it in ${attempts} attempts.`
);

------------------------------------------------------------- */

let difficultySetting = prompt(
  `Choose a difficulty: "easy", "medium" or "hard"`
);

switch (difficultySetting) {
  case "easy":
    const correctNumber = Math.floor(Math.random() * 10) + 1;
    let guess = Number(prompt("Guess a number between 1-10."));
while (guess != correctNumber) {
  if (guess > correctNumber) {
    guess = Number(prompt("Too high! Try again."));
    attempts++;
  } else if (guess < correctNumber) {
    guess = Number(prompt("Too low, try again."));
    attempts++;
  }
}

    difficultySetting = prompt(
      `Correct! Try a new difficulty? Answer with "easy", "medium" or "hard".`
    );
}
