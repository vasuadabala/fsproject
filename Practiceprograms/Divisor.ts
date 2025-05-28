//26.Create a program that asks the user for a number and then prints out a list of all the divisors of that number. 
// (If you don’t know what a divisor is, it is a number that divides evenly into another number.
//  For example, 13 is a divisor of 26 because 26 / 13 has no remainder.)
//this method we take a number as input and output
//output displays divisors of the number

function divisorOfThenumber(number) {
  console.log("the divisers of ", number, "is" );
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      console.log(i );
    }
  }
  console.log(" ")
}
divisorOfThenumber(25);
divisorOfThenumber(13);
divisorOfThenumber(6);
