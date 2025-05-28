//45.Amstrong checking
//this method is input as number and give us output
function isArmstrg(num) {
    var sum = 0;
    var temp = num;
    var digits = num.toString().length;
    while (temp > 0) {
        var digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}
var numb = 153;
var nuer= 370;
if (isArmstrong(number1)) {
    console.log("".concat(number1, " is an Armstrong number."));
}
else {
    console.log("".concat(number1, " is not an Armstrong number."));
}
if (isArmstrong(number2)) {
    console.log("".concat(number2, " is an Armstrong number."));
}
else {
    console.log("".concat(number2, " is not an Armstrong number."));
}
