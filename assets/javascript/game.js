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
var computerGuess = "";
//set array for letters only - no letter return "false"

console.log(winText);
console.log(lossText);
console.log(guessesText);
console.log(lettersGuessedText);


document.onkeyup = function (event) {

    var userGuess = event.key;
    if (guessesLeft === 9) {
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    }
    console.log(userGuess);
    console.log(computerGuess);
    //var letters;



    guessed.push(userGuess);

    for (var j = 0; j < guessed.length; j++) {
        lettersGuessedText.textContent = "Your Guesses so far: " + (guessed[j]);
    }

    //function adderReturn(r, s, t, u, v, w, x, y, z) {
    //    return r + s + t + u + v + w + x + y + z;
    //}
    //var results = adderReturn(userGuess);

    //lettersGuessedText.textContent = "Your Guesses so far: " + userGuess;


    if (userGuess === computerGuess) {
        guessesLeft = 9;
        guessesText.textContent = "Guesses Left: " + guessesLeft;
        console.log(guessesLeft);
        wins++;
        console.log(wins);
        winText.textContent = "Wins: " + wins;
        console.log(lettersGuessedText);
        console.log(losses);
        lettersGuessedText.textContent = "Your Guesses so far: "
        guessed = [];

    } else if (userGuess !== computerGuess) {
        guessesLeft--;
        console.log(guessesLeft);
        lettersGuessedText.textContent = "Your Guesses so far: " + guessed;
        console.log(guessed);
        //lettersGuessedText.textContent = "Your Guesses so far: " + guessed;
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