//24.Ask the user for a number. Depending on whether the number is even or odd, print out an appropriate message to the user.
//  Hint: how does an even / odd number react differently when divided by 2?
//the method is input as number
//output give us given number is even or odd
function givenNumberEvenorOdd(number) {
  
  if (number % 2 == 0) {
 
    console.log("Given number is even number  ");
  } else {
  
    console.log("Given number is odd number");
  }
}
givenNumberEvenorOdd(10);
givenNumberEvenorOdd(1);
givenNumberEvenorOdd(2);
