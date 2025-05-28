//31.Write a program that takes a list of numbers (for example, a = [5, 10, 15, 20, 25])
//  and makes a new list of only the first and last elements of the given list. For practice, write this code inside a function.
//this method is input as list and output printed in new list conle the frist and last letter
function listOfNumbers(numbers) {
  
  let num2: number[] = [];
  for (let i = 0; i <= numbers.length - 1; i++) {
    if (i == 0 || i == numbers.length - 1) {
      num2.push(numbers[i]);
    }
  }
  return num2;
}
let numbers1=[5,10,15,20,25];
let numbers2=[53,130,15,20,225];
let numbers3=[51,10,15,20,285];
console.log(listOfNumbers(numbers1));
console.log(listOfNumbers(numbers2));
console.log(listOfNumbers(numbers3));
