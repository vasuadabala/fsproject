function fibonacciSeries() {
    let num1 = 0;
    let num2 = 1;

    console.log(num1);
    console.log(num2); 

    for (let i = 2; i < 10; i++) {
        let num3 = num1 + num2;
        console.log(num3);
        num1 = num2;
        num2 = num3;
    }
}

fibonacciSeries();
