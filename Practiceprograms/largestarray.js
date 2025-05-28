//46.Largest among N numbers in an array
//this method input as numbers and output give us numbers
function largestNumbery(numbers) {
    var largest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
var rest = largestNumbersinArray([25, 35, 20, 30]);
console.log(result);
