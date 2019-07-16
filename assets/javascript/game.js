console.log("HI!");

var computerChoices = ["q"] //, "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

console.log(computerChoices.length);

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessed = [];

console.log(wins);
console.log(losses);
console.log(guessesLeft);
console.log(guessed);

var instructionText = document.getElementById("instructions");
var winText = document.getElementById("wins");
var lossText = document.getElementById("losses");
var guessesText = document.getElementById("guesses-left");
var lettersGuessedText = document.getElementById("guessed");

console.log(winText);
console.log(lossText);
console.log(guessesText);
console.log(lettersGuessedText);

document.onkeyup = function (event) {

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(userGuess);
    console.log(computerGuess);

    if (userGuess === computerGuess) {
        wins++;
        console.log(wins);
        console.log(lettersGuessedText);
        console.log(guessesLeft);
        //next step needs to reset the "Guesses Left"
        guessesLeft = 9;
        console.log(guessesLeft);
        console.log(losses);
        //lettersGuessedText.textContent = "";


    } else if (userGuess !== computerGuess) {
        guessesLeft--;
        console.log(guessesLeft);
        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            lettersGuessedText.textContent = "";
        };

        //instructionText.textContent = "";
        //lettersGuessedText.textContent = "You chose: " + userGuess;
        //winText.textContent = wins;
    }
};
