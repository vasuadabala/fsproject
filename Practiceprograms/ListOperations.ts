//31.Write a program that takes a list of numbers (for example, a = [5, 10, 15, 20, 25]) and makes a new list of only the first and last elements of the given list. For practice, write this code inside a function.
function listOfNumbers(){
    let numbers = [5 , 10 , 15 , 20 ,25];
    let num2 :number[]   = [];
    for(let i = 0 ;i<=numbers.length-1;i++ ){
        if((i==0)||(i==numbers.length-1)){
            num2.push(numbers[i]);
        }
    }
    return num2;
}
console.log(listOfNumbers());