//25.write a program that prints out all the elements of the list that are less than 5.
//the method input is an array of 5 numbers it gives the output in lessthan 5
//  let numbers: number[] = [4, 3, 9, 6, 17];
function leThanFive(number) {
    for (var i = 0; i < number.length; i++) {
        if (number[i] < 5) {
            console.log(number[i]);
        }
    }
    console.log(" ");
}
var nmbers1 = [4, 3, 9, 6, 17];
var umbers2 = [1, 3, 2, 6, 17];
var umbers3 = [2, 3, 5, 6, 17];
lessThanFive(numbers1);
lessThanFive(numbers2);
lessThanFive(numbers3);
