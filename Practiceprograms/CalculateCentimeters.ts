//9. Write a function to calculate height in centimetries
// we take the input as feet of an person and convert it into centimeters

function convertHeight(feet) {
 
  let totalinches = feet * 12;
  let totalcentimeters = totalinches * 2.5;

  console.log(" convert height ", feet , " equal to " , totalcentimeters);
  return totalcentimeters;
}
convertHeight(5.7);
convertHeight(6.3);
convertHeight(5.5);
