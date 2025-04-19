//21. Write a program to print given 5 numbers in ascending order.
function ascendinOrder() {
    let numbers = [25, 10, 45, 5, 7];
    for (let i = 0; i < numbers.length ; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                 temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
                console.log(numbers);
            }
        }
    }
}
ascendingOrder();
