function cal_snr_citizen(age) {
    // let is a key word to declare a variable 
   //  x + y = 5
   // variable holds data 
   // we can assign / put data to a variable using = symbol
   // message is a variable that contains empty string
   // empty string is denoted by "" - two quotes
    let message = "";
    // if is a conditional statement and a key word ; condition is to compare 
    // equal to, not equal to , less than , greater than, not great than 
    // syntaxt is that the condition must be in the braces
    if (age > 60) { // flower brace - start of the if condition satisfied we can write any statements in the if block
        // string is a continuous list of words including spaces, special characters, characters and numbers
        // string = "fsgdsajgsfjr43532432r5jrewrn,w%%%% sfgregregegre ###"
        message = "Person is senior citizen"; 
    } // closure if condition 
    else  { // if condition not satisfied then it is called else block, the set of statements should be in the flower brace 
         message = "Person is not senior citizen";
    }
    console.log(message);
    return message;
}

cal_snr_citizen(45);
cal_snr_citizen(70);
cal_snr_citizen(60);