
//41.pick word
function pickWord(words: string[]): string {
  let randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

let wordList = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let pickedWord = pickWord(wordList);
console.log('Picked word:', pickedWord);
