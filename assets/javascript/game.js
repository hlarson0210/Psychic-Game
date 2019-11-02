var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

console.log(computerChoices.length);

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessed = [];


var winText = document.getElementById("wins");
var lossText = document.getElementById("losses");
var guessesText = document.getElementById("guesses-left");
var lettersGuessedText = document.getElementById("guessed");
var computerGuess = "";


document.onkeyup = function (event) {
    var userGuess = event.key;
    var letters = /^[a-zA-Z]+$/;
    if (userGuess.match(letters)) {
        guessed.push(userGuess);
    }
    else {
        return false;
    }

    //would add code here to only allow the user to choose a letter one time in a game
    if (guessesLeft === 9) {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }

    if (userGuess === computerGuess) {
        guessesLeft = 9;
        guessesText.textContent = "Guesses Left: " + guessesLeft;
        wins++;
        winText.textContent = "Wins: " + wins;
        lettersGuessedText.textContent = "Your Guesses so far: "
        guessed = [];

    } else if (userGuess !== computerGuess) {
        guessesLeft--;
        lettersGuessedText.textContent = "Your Guesses so far: " + guessed;
        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            guessesText.textContent = "Guesses Left: " + guessesLeft;
            lettersGuessedText.textContent = "Your Guesses so far: ";
            guessed = [];
        };
        guessesText.textContent = "Guesses Left: " + guessesLeft;
        lossText.textContent = "Losses: " + losses;
    }
}
