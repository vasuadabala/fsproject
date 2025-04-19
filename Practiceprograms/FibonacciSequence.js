function fibonacciSeries() {
    var num1 = 0;
    var num2 = 1;
    console.log(num1); // First number
    console.log(num2); // Second number
    for (var i = 2; i < 10; i++) {
        var num3 = num1 + num2;
        console.log(num3);
        num1 = num2;
        num2 = num3;
    }
}
fibonacciSeries();
