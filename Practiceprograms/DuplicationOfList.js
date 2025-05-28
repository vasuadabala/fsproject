//32.Write a program (function!) that takes a list and returns a new list that contains 
//all the elements of the first list minus all the duplicates.
//the method input is an array of 6 numbers it gives the output minus all the duplicates of the given numbers
//
function duplicationOFList(numbers) {
    //let numbers: number[] = [1, 2, 3, 4, 2, 3];
    var num1 = [];
    for (var i = 0; i < numbers.length; i++) {
        var exit = false;
        for (var j = 0; j < num1.length; j++) {
            if (numbers[i] == num1[j]) {
                exit = true;
                break;
            }
        }
        if (!exit) {
            num1.push(numbers[i]);
        }
    }
    console.log(num1);
    return num1;
}
var number1 = [1, 2, 3, 3, 4, 2];
var number2 = [5, 4, 7, 3, 4, 2];
var number3 = [1, 2, 4, 3, 4, 2];
var number4 = [1, 4, 3, 3, 4, 2];
duplicationOFList(number1);
duplicationOFList(number2);
duplicationOFList(number3);
duplicationOFList(number4);
