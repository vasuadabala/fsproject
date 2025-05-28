//10. Write a program to calculate interest amount for loan amount, rate of interest and time period
////in this method we use year as input
//we get the total year in an year as the output is the rts / 100
function raeOfIntrest(intrestamount, rateofintrest, timeperiod) {
    var totalintrest = (intrestamount * rateofintrest * timeperiod) / 100;
    console.log("intrestamount of loan amount ", totalintrest);
}
rateOfIntrest(10000, 20, 2);
rateOfIntrest(30000, 10, 2);
rateOfIntrest(50000, 15, 2);
