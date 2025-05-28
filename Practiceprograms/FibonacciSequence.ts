//22. Write a program to print first 10 fibonacci series starting with 0,1.
//in this we print the fibonacci series we can get that by add the last two numbers in the series
function fibonacciSeries(num1,num2) {
  console.log(" The Fibonacci Series is :")
  console.log(num1); 
  console.log(num2); 
  for (var i = 2; i < 10; i++) {
      var num3 = num1 + num2;
      console.log(num3);
      num1 = num2;
      num2 = num3;
  }
}
fibonacciSeries(0,1);
fibonacciSeries(2,3);
fibonacciSeries(5,1);
fibonacciSeries(6,4);


