//35.Implement a function that takes as input three variables, and returns the largest of the three.
//in this method input is number 
//and output is check the given numbers and displays the largest number
function largestNumbers(number1, number2, number3) {
    if ((number1 >= number2) && (number1 >= number3)) {
        return number1;
    }
    else if ((number2 >= number1) && (number2 >= number3)) {
        return number2;
    }
    else {
        return number3;
    }
}
var largest = largestNumbers(10, 9, 17);
console.log("the largest number is ", largest);
