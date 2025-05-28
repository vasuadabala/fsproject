//25.write a program that prints out all the elements of the list that are less than 5.
//the method input is an array of 5 numbers it gives the output in lessthan 5
//  let numbers: number[] = [4, 3, 9, 6, 17];

function lessThanFive(number) {
 
  for (let i = 0; i < number.length; i++) {
    if (number[i] < 5) {
      console.log(number[i]);
    }
  }
  console.log(" ")
}
let numbers1 = [4, 3, 9, 6, 17];
let numbers2 = [1, 3, 2, 6, 17];
let numbers3 = [2, 3, 5, 6, 17];

lessThanFive(numbers1);
lessThanFive(numbers2);
lessThanFive(numbers3);
