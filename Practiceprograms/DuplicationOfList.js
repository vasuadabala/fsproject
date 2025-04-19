//32.Write a program (function!) that takes a list and returns a new list that contains all the elements of the first list minus all the duplicates.
function duplicationOFList() {
    var numbers = [1, 2, 3, 4, 2, 3];
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
    return num1;
}
console.log(duplicationOFList());
