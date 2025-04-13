function checklarge(num1, num2) {
    var message = "";
    if (num1 > num2) {
        message = "num1 is large number";
    }
    else {
        message = "num2 is not a large number";
    }
    console.log(message);
    return message;
}
checklarge(15, 6);
checklarge(15, 15);
