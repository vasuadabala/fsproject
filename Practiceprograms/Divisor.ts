//26.Create a program that asks the user for a number and then prints out a list of all the divisors of that number. (If you don’t know what a divisor is, it is a number that divides evenly into another number. For example, 13 is a divisor of 26 because 26 / 13 has no remainder.)
function divisorOfThenumber(number){
    let num = 1;
    console.log(num);
    for(let i = 2 ; i <= number;i++ ){
        if(number % i == 0){
        console.log(i);
        
        
        }
    }
}
divisorOfThenumber(25);

