//45.Amstrong checking
//this method is input as number and give us output
function isArmstrong(num: number): boolean {
    let sum = 0;
    let temp = num;
    const digits = num.toString().length;

    while (temp > 0) {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}
const number1 = 153;
const number2 = 370;

if (isArmstrong(number1)) {
    console.log(`${number1} is an Armstrong number.`);
} else {
    console.log(`${number1} is not an Armstrong number.`);
}

if (isArmstrong(number2)) {
    console.log(`${number2} is an Armstrong number.`);
} else {
    console.log(`${number2} is not an Armstrong number.`);
}
