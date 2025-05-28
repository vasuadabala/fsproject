//33.Write a program (using functions!) that asks the user for a long string containing multiple words.
//  Print back to the user the same string, except with the words in backwards order. For example, say I type the string:
//this method takes inuput as string and output give us reversed a string
//in this program we use reversed mrthod
function reverseAsentence(): string{
  let sentence: string = "this is type script program";
  let words: string[] = sentence.split(" ");
  let reversed: string[] = [];
 
     for (let j = words.length - 1; j >= 0; j--){
      reversed.push(words[j]);
     } 
  
  
  
  console.log(reversed);
  return reversed.join();

}
reverseAsentence();
