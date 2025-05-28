//30.Generate a random number between 1 and 9 (including 1 and 9). Ask the user to guess the number, 
// then tell them whether they guessed too low, too high, or exactly right.
//this method is input as number and give us output
//outpuit shows us to number is too low, too high, or exactly right.

function randomNumber(num) {
  let number = Math.floor(Math.random() * 9) ;
  console.log(number);
  if (num < number) {
    console.log(num , "is to low");
  } else if (num > number) {
    console.log(num , "is to high");
  } else if (num == number) {
    console.log(num , "is excatly right");
  } else {
    console.log(num , "is invalid number");
  }
}
randomNumber(5);
randomNumber(4);
randomNumber(1);
