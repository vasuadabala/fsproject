//21. Write a program to print given 5 numbers in ascending order.
//the method input is an array of 5 numbers it gives the output in ascending order of the given numbers
//  let numbers: number[] = [25, 10, 45, 5, 7];
//
function ascendingOrder(numbers) {
    // let numbers: number[] = [25, 10, 45, 5, 7];
    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                var num = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = num;
            }
        }
    }
    console.log(numbers);
}
var numbers1 = [36, 10, 5, 7, 9];
var numbers2 = [6, 50, 56, 37, 59];
var numbers3 = [369, 100, 54, 97, 90];
var numbers4 = [360, 130, 25, 7, 19];
var numbers5 = [136, 103, 5, 74, 91];
ascendingOrder(numbers1);
ascendingOrder(numbers2);
ascendingOrder(numbers3);
ascendingOrder(numbers4);
ascendingOrder(numbers5);
