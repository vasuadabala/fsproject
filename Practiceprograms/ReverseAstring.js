//33.Write a program (using functions!) that asks the user for a long string containing multiple words.
//  Print back to the user the same string, except with the words in backwards order. For example, say I type the string:
function reverseAsentence() {
    var sentence = "this is type script program";
    var words = sentence.split(" ");
    var reversed = [];
    for (var j = words.length - 1; j >= 0; j--) {
        reversed.push(words[j]);
    }
    console.log(reversed);
    return reversed.join();
}
reverseAsentence();
