// Create secretNumber
var secretNumber = 4;

// Ask user for guess
var stringGuess = prompt("Guess a Number.");
var guess = Number(stringGuess);

// Check if guess is right
if(guess === secretNumber) {
  alert("YOU GOT IT RIGHT!!!");
}

// Otherwise, check if guess is higher 
else if(guess > secretNumber) {
  alert("Too high, Guess again!");
}

// Otherwise, check if gues is lower
else {
  alert("Too low, Guess again!");
}