//Determine if a Number is Even or Odd
function checkeo(num){
    let message = "";
    if(num % 2 == 0){
        message = "this is a even number ";
    }
    else{
        message = "this is a odd number ";   
    }
    console.log(message);
    return message;
}

 checkeo(6);
 checkeo(7);