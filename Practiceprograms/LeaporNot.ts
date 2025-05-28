//16. Write a program to determine whether the given year is leap year or not.
//this method is input as year
//the output checks the given year leap year or not 
function leapYearOrNot(year) {
 
  if (year % 4 == 0) {
     " given year is leap year"
    console.log(year, "  is leap year", );
  } else {
    console.log(year, " is not a leap year");

  }
}
leapYearOrNot(2000);
leapYearOrNot(2011);
leapYearOrNot(2020);
leapYearOrNot(2019);
