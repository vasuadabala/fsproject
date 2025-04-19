//30.Generate a random number between 1 and 9 (including 1 and 9). Ask the user to guess the number, then tell them whether they guessed too low, too high, or exactly right.
function randomNumber(num) {
    var number = Math.floor(Math.random() * 9) + 1;
    console.log(number);
    var message = "";
    if (num < number) {
        message = "to low";
        console.log(message);
    }
    else if (num > number) {
        message = "to high";
        console.log(message);
    }
    else if (num == number) {
        message = "excatly right";
        console.log(message);
    }
    else {
        message = "invalid number";
        console.log(message);
    }
}
randomNumber(5);
randomNumber(4);
randomNumber(1);
