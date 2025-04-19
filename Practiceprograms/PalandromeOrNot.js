//28.Ask the user for a string and print out whether this string is a palindrome or not. (A palindrome is a string that reads the same forwards and backwards.)
function palindromeOrNot(name) {
    var message = "";
    var reverse = "";
    for (var i = name.length - 1; i >= 0; i--) {
        reverse += name[i];
    }
    console.log(reverse);
    if (reverse == name) {
        message = "its a palandeone";
        console.log(message);
    }
    else {
        message = " not a palandrome";
        console.log(message);
    }
}
palindromeOrNot("abcdef");
