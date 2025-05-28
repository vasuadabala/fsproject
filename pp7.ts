// Check if a Character is a Vowel or a Consonant
function vowels(letters){
    let message = "";
    if((letters='a') ||(letters='e')||(letters='i')||(letters='o')||(letters='u')){
     message    = "letters is vowel";

    }
    else {
        message = " not a vowel";
        return ;
    }
    console.log(message);
    return message;
}

vowels('a');
vowels('e');
vowels('o');
