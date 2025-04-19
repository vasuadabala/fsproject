//17. Write a program to check whether given numbers are positive, negative or zero.

function checkingTheGivenNumbers(number){
    let message ="";
     if(number > 0){
        message = "Given number is positive";
        console.log(message);
        return message;
     }
     else if(number < 0){
        message = "Given number is negative";
        console.log(message);
        return message;

     }
     else{
        message ="Given number is zero";
        console.log(message);
        return message;

     }
}
checkingTheGivenNumbers(6);
checkingTheGivenNumbers(-1);
checkingTheGivenNumbers(0);