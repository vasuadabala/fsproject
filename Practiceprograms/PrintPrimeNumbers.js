//18. Write a program to print 1st five prime numbers.
function printPrimeNumber() {
    var count = 0;
    var number = 2;
    while (count < 5) {
        var isPrime = true;
        for (var i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(number);
            count++;
        }
        number++;
    }
}
printPrimeNumber();
