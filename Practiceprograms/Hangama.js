//43.write a program to hangman
function displayWord(word, guessed) {
    return word
        .split('')
        .map(function (ch) { return (guessed.indexOf(ch) !== -1 ? ch : '_'); })
        .join(' ');
}
var word = 'apple';
var guessed = '';
var attempts = 6;
var guesses = ['a', 'e', 'i', 'o', 'u', 'p', 'l'];
for (var _i = 0, guesses_1 = guesses; _i < guesses_1.length; _i++) {
    var guess = guesses_1[_i];
    if (word.indexOf(guess) !== -1) {
        guessed += guess;
    }
    else {
        attempts--;
    }
    console.log('Word:', displayWord(word, guessed));
    console.log('Attempts left:', attempts);
    if (word.split('').every(function (ch) { return guessed.indexOf(ch) !== -1; })) {
        console.log('You win!');
        break;
    }
}
if (attempts === 0) {
    console.log('Game over! The word was:', word);
}
