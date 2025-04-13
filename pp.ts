//Check if a Number is Positive, Negative, or Zero
function checknum(numbers){
  let message = "";
  if(numbers>0){
    message = "this is positive number";
  }
  else if(numbers<0){
    message = "this is negative number";
  }
  else{
    message = "this number is zero";
  }
  console.log(message);
  return message;
}

 checknum(76);
 checknum(-35);
 checknum(0);