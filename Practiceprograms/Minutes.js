//convert week into minutes
// in this method the inputs are days and hours and minutes  
//we get the output as total seconds in a day
function calculateMinutes(days, hours, minutes) {
    var totalminutes = days * hours * minutes;
    console.log(totalminutes);
}
calculateMinutes(7, 24, 60);
