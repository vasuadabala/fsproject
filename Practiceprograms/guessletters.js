//42.write a program to guess letters
function guessLetters(word, guess) {
    var found = false;
    for (var i = 1; i < word.length; i++) {
        if (word[i] === guess) {
            console.log("good guess the letter position at ", i);
            found = true;
        }
    }
    if (!found) {
        console.log("Sorry, the letter  is not in the word.");
    }
}
var secretWord = "apple";
var letterToGuess = "p";
guessLetters(secretWord, letterToGuess);
