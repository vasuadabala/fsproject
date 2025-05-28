//4.write a function to calculate seconds in a day
// in this method the inputs are hours and minutes and seconds 
//we get the output as total seconds in a day
function calculateSeconds(hours, minutes, seconds) {
 
  let totalseconds = hours * minutes * seconds;

  console.log(" totalseconds in a day ", totalseconds);
}
calculateSeconds(24, 60, 60);
