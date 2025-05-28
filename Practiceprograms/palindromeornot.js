//28.Ask the user for a string and print out whether this string is a palindrome or not.
//  (A palindrome is a string that reads the same forwards and backwards.)
//this method is input as numbers and string
//output give us to input is palindrome or not
function palindromeOrNot(name) {
    var reverse = "";
    for (var i = name.length - 1; i >= 0; i--) {
        reverse += name[i];
    }
    if (reverse == name) {
        console.log(name, "is a palandeone");
    }
    else {
        console.log(name, " is not a palandrome");
    }
}
palindromeOrNot("abcdef");
palindromeOrNot("abccba");
palindromeOrNot("143341");
palindromeOrNot("123432");
