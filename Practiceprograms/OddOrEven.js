//24.Ask the user for a number. Depending on whether the number is even or odd, print out an appropriate message to the user. Hint: how does an even / odd number react differently when divided by 2?
function givenNumberEvenorOdd(number) {
    var message = "";
    if (number % 2 == 0) {
        message = "Given number is even number  ";
        console.log(message);
    }
    else {
        message = "Given number is odd number";
        console.log(message);
    }
}
givenNumberEvenorOdd(10);
givenNumberEvenorOdd(1);
givenNumberEvenorOdd(2);
