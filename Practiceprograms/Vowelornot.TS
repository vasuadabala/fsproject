//44.Check whether a character is vowel or consonant
//This method is input as character and give output as character
function vowelsOrConsonant(letters) {
  
  if (
    (letters == "a") ||
    (letters == "e") ||
    (letters == "i") ||
    (letters == "o") ||
    (letters == "u")
  ) {
     console.log(" given letters is vowel");
     return ;
  } 
  else {
    console.log(" given letters is consonent");
  }
 
}
vowelsOrConsonant("a");
vowelsOrConsonant("k");
vowelsOrConsonant("e");