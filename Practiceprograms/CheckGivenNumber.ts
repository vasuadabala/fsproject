//17. Write a program to check whether given numbers are positive, negative or zero.
// this method is input as number and it give output 
//output give us given number as postive and negative and zero   

function checkingTheGivenNumbers(number) {
 
  if (number > 0) {
  
    console.log(" Given number is positive ");

  } else if (number < 0) {
    
    console.log("Given number is negative");
    
  } else {
   
    console.log("Given number is zero");
   
  }
}
checkingTheGivenNumbers(6);
checkingTheGivenNumbers(-1);
checkingTheGivenNumbers(0);
