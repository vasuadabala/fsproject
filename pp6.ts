//Determine the Sign of the Product of Two Numbers (without multiplying)
function checksign(n1 , n2){
    let message = "";
    if((n1<0 && n2<0 ||n1 >0 && n2 > 0))
        {
        message = "It is a positive number";
    }
    else if(n1==0 && n2==0){
        message = "zero"
    }
    else{
        message = "It is a negative number";
    }
    console.log(message);
    return message;
}

 checksign(1,1);
 checksign(-2,3);
 checksign(0,0);
 checksign(-2,-3);