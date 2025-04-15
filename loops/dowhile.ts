// print 10 numbers using do while loop
function printtennumbers() {
    let i = 10; // initialize the variable i as 1 
    do { //executes the loop
        console.log(i);
        i++; // incrementor
    } while (i <= 100); // later condition
}

//printtennumbers();

function evennumbers(){
    //we can declare and assin 2 to i
    //because 2 is the starting number
    //do condition will be execute the value 
    //value stored in i
    //add 2 from the value to previous value which is 2
    //the loop go to the while condition if the condition is write loop will be exicuted
    //compare 4 with lessthan 20
    //loop continue the value will be lessthan or equal to 20
      
    let i=2;
    do{
        console.log(i);
        i+=2;

    }
    while(i<=20);
}

evennumbers();