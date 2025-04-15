// Check if a Character is a Vowel or a Consonant
function vowel(letters) {
    var message = "";
    if ((letters = 'a') || (letters = 'e') || (letters = 'i') || (letters = 'o') || (letters = 'u')) {
        message = "letters is vowel";
    }
    else {
        message = " not a vowel";
    }
    console.log(message);
    return message;
}
vowel('a');
vowel('A');
vowel('b');
