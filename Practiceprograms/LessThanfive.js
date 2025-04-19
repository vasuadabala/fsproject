//25.write a program that prints out all the elements of the list that are less than 5.
function lessThanFive() {
    var number = [4, 3, 9, 6, 17];
    for (var i = 0; i < number.length; i++) {
        if (number[i] < 5) {
            console.log(number[i]);
        }
    }
}
lessThanFive();
