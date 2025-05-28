//6. write a program to convert an year into weeks
//in this method we use year as input
//we get the total weeks in an year as the output by dividing the year with total days in a week

function calculateWeeks(year) {
  
  let totalweeks = year*365/ 7;
  console.log("total nof weeks in ",year , "years",totalweeks);
}

calculateWeeks(1);
calculateWeeks(4);
calculateWeeks(25);
