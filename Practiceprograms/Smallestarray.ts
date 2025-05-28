//47.Smallest among N numbers in an array
////this method input as numbers and output give us numbers



function smallestNumbersinArray(numbers){
  let largest = numbers[0]; 
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < largest){
      largest = numbers[i];
    }
  }return largest;
  
}
let smallest = smallestNumbersinArray([25, 35, 20, 30]);
console.log(smallest);