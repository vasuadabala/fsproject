//43.write a program to hangman

function displayWord(word: string, guessed: string): string {
  return word
    .split('')
    .map(ch => (guessed.indexOf(ch) !== -1 ? ch : '_'))
    .join(' ');
}

const word = 'apple';
let guessed = '';
let attempts = 6;

const guesses = ['a', 'e', 'i', 'o', 'u', 'p', 'l'];

for (const guess of guesses) {
  if (word.indexOf(guess) !== -1) {
    guessed += guess;
  } else {
    attempts--;
  }

  console.log('Word:', displayWord(word, guessed));
  console.log('Attempts left:', attempts);

  if (word.split('').every(ch => guessed.indexOf(ch) !== -1)) {
    console.log('You win!');
    break;
  }
}

if (attempts === 0) {
  console.log('Game over! The word was:', word);
}
