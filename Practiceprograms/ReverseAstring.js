//33.Write a program (using functions!) that asks the user for a long string containing multiple words. Print back to the user the same string, except with the words in backwards order. For example, say I type the string:
function reverseAsentence() {
    var sentence = "this is typr script program";
    var words = sentence.split(" ");
    var reversed = [];
    console.log(reversed);
    for (var i = words.length - 1; i = 0; i--) {
        reversed.push(words[i]);
    }
    console.log(words);
    console.log(reversed);
    return reversed.join(" ");
}
reverseAsentence();
