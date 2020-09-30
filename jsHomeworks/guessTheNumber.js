let difficulty = parseInt(prompt("Pick a difficulty level (1,2 or 3): "), 10);
let guesses = 1;
var isCorrect = false;
var track = "";

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function higherOrLower(guess, randomNumber) {
  if (guess > randomNumber) {
    console.log("Too High.");
  } else if (guess < randomNumber) {
    console.log("Too low.");
  }
}
function checkGuess(userGuess, randomNumber) {
  if (userGuess == randomNumber) {
    console.log("Congratulations! You got it right!");
    console.log("You got it in " + guesses + " tries");
    console.log("Your previous guesses: " + track);
    isCorrect = true;
  } else {
    console.log("You have to try again!");
    track += " " + userGuess;
    guesses++;
    console.log("Your previous guesses: " + track + " ");
  }
}

function playAgain(userResponse) {
  if (userResponse == "yes") {
    return (isCorrect = false);
  } else if (userResponse == "no") {
    console.log("Goodbye!");
    return (isCorrect = true);
  }
}

switch (difficulty) {
  case 1:
    //random number is between 1-10
    let randomDiff1 = parseInt(getRndInteger(1, 11), 10);
    do {
      let userGuess = prompt("What's your guess?");
      checkGuess(userGuess, randomDiff1);
      higherOrLower(userGuess, randomDiff1);
      if (isCorrect == true) {
        let repeatGame = prompt("Play again? yes/no");
        playAgain(repeatGame);
        randomDiff1 = parseInt(getRndInteger(1, 11), 10);
        track = "";
        guesses = 1;
      }
    } while (Boolean(isCorrect) == false);
    break;
  case 2:
    //random number is between 1-100
    let randomDiff2 = parseInt(getRndInteger(1, 101), 10);
    do {
      let userGuess = prompt("What's your guess?");
      checkGuess(userGuess, randomDiff2);
      higherOrLower(userGuess, randomDiff2);
      if (isCorrect == true) {
        let repeatGame = prompt("Play again? yes/no");
        playAgain(repeatGame);
        randomDiff2 = parseInt(getRndInteger(1, 11), 10);
        track = "";
        guesses = 1;
      }
    } while (Boolean(isCorrect) == false);
    break;
  case 3:
    //random number is between 1-1000
    let randomDiff3 = parseInt(getRndInteger(1, 1001), 10);
    do {
      let userGuess = prompt("What's your guess?");
      checkGuess(userGuess, randomDiff3);
      higherOrLower(userGuess, randomDiff3);
      if (isCorrect == true) {
        let repeatGame = prompt("Play again? yes/no");
        playAgain(repeatGame);
        randomDiff3 = parseInt(getRndInteger(1, 11), 10);
        track = "";
        guesses = 1;
      }
    } while (Boolean(isCorrect) == false);
    break;
  default:
    console.log("You have to choose between 1-3");
    break;
}
