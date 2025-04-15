//10. Write a program to calculate interest amount for loan amount, rate of interest and time period

function rateOfIntrest(){
    let intrestamount = 10000;
    let rateofintrest = 10;
    let timeperiod    = 2;
    let totalintrest =  intrestamount * rateofintrest * timeperiod /100; 
    console.log(totalintrest);
}
rateOfIntrest()