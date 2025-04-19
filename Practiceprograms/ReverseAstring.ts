//33.Write a program (using functions!) that asks the user for a long string containing multiple words. Print back to the user the same string, except with the words in backwards order. For example, say I type the string:
function  reverseAsentence():string{
    let sentence :string ="this is typr script program";  
        let words:string[] =sentence.split(" ");
    let reversed: string[]=[];
    for(let i = sentence.length-1;i=0;i--){
        reversed.push(sentence[i]);

    }console.log(words);
    console.log(reversed)

    return reversed.join(" ");
}
reverseAsentence();