//31.Write a program that takes a list of numbers (for example, a = [5, 10, 15, 20, 25]) and makes a new list of only the first and last elements of the given list. For practice, write this code inside a function.
function listOfNumbers() {
    var numbers = [5, 10, 15, 20, 25];
    var num2 = [];
    for (var i = 0; i <= numbers.length - 1; i++) {
        if ((i == 0) || (i == numbers.length - 1)) {
            num2.push(numbers[i]);
        }
    }
    return num2;
}
console.log(listOfNumbers());
