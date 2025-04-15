//16. Write a program to determine whether the given year is leap year or not.
function leapYearOrNot(year) {
    var message = "";
    if (year % 4 == 0) {
        message = " given year is leap year";
        console.log(message);
        return message;
    }
    else {
        message = "given year is not a leap year";
        console.log(message);
        return message;
    }
}
leapYearOrNot(2000);
leapYearOrNot(2011);
leapYearOrNot(2020);
leapYearOrNot(2019);
