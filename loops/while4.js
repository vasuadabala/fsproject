//Reverse a Numbe
function reversenum() {
    var i = 10;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
//reversenum();
//reverse a function using do while
function reverseanumberusingforloo() {
    //for syntax we can declare and assin the 10 to i
    //because 10 is a starting number
    //subtract 1 from the value of previous value which is 10
    //compare 9 with greather than 1
    //loop the above vales grather than 1
    //   for(let i=10;i>=1;i--) 10
    //   for(let i=10;i>=1;i--) 9
    //   for(let i=10;i>=1;i--) 8
    //   for(let i=10;i>=1;i--) 7
    //   for(let i=10;i>=1;i--) 6
    //   for(let i=10;i>=1;i--) 5
    //   for(let i=10;i>=1;i--) 4
    //   for(let i=10;i>=1;i--) 3
    //   for(let i=10;i>=1;i--) 2
    //   for(let i=10;i>=1;i--) 1
    for (var i = 10; i >= 1; i--) { //for block
        console.log(i);
    }
}
reverseanumberusingforloo();
