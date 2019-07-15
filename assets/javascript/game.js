console.log("HI!");

var computerChoices = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

console.log(computerChoices.length);

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessed = [];

console.log(wins);
console.log(losses);
console.log(guessesLeft);
console.log(guessed);

var winColumn = document.getElementById("wins");
var lossColumn = document.getElementById("losses");
var guessesColumn = document.getElementById("guesses-left");
var guessedColumn = document.getElementById("guessed");

console.log(winColumn);
console.log(lossColumn);
console.log(guessesColumn);
console.log(guessedColumn);

document.onkeyup = function (event) {

    var userGuess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(userGuess);
    console.log(computerGuess);

    //if (userGuess === computerGuess) {
    //    wins++;

//    } else if (userGuess !== computerGuess) {
  //      guessedColumn.textContent = [userGuess(event.key)];
    //}


    //winColumn.textContent = wins;
}

