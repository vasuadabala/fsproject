//47.Smallest among N numbers in an array
////this method input as numbers and output give us numbers
function smallestNumbersinArray(numbers) {
    var largest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
var smallest = smallestNumbersinArray([25, 35, 20, 30]);
console.log(smallest);
