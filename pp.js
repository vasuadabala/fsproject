function checknum(numbers) {
    var message = "";
    if (numbers > 0) {
        message = "this is positive number";
    }
    else if (numbers < 0) {
        message = "this is negative number";
    }
    else {
        message = "this number is zero";
    }
    console.log(message);
    return message;
}
checknum(-35);
checknum(0);
