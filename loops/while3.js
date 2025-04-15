//First Even Number
function enumber() {
    var i = 0;
    while (i <= 20) {
        console.log(i);
        i += 2;
    }
}
//enumber();
//even numbers using while loop
function evennumber() {
    // //we can declare and assign 2 to i
    //because 0 is the starting number
    //and come to the while condition is true loop will exicute 
    //add 2 from the previous value which is zero 2
    //compare 4 with lessthan 10
    // the above loop value is less than 10
    //i=2 while(i<=10) i+=2 2
    //i=2 while(i<=10) i+=2 4
    //i=2 while(i<=10) i+=2 6
    //i=2 while(i<=10) i+=2 8
    //i=2 while(i<=10) i+=2 10
    var i = 2;
    while (i <= 10) {
        console.log(i);
        i += 2;
    }
}
evennumber();
