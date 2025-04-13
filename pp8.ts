//Determine the Type of Triangle Based on Side Lengths
function triangle(side1,side2,side3){
    let message = "";

if(side1==side2 && side2==side3){
    message = "it is a equilateral triangle";
}
else if(side1==side2||side2==side3||side3==side2){
    message="it is a Isosceles triangle"
}
else{
    message="it is a scalene triangle"
}
 console.log(message);
 return message;
}

triangle(7,7,7);
triangle(9,9,7);
triangle(9,8,7);