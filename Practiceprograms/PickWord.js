//41.pick word
function pickWord(words) {
    var randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}
var wordList = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
var pickedWord = pickWord(wordList);
console.log('Picked word:', pickedWord);
