//23.Create a program that asks the user to enter their name and their age. Print out a message addressed to them that tells them the year that they will turn 100 years 
function AgeTurnInto100(name, age) {
    var currentyear = 2025;
    var turninto100year = currentyear + (100 - age);
    console.log("name:", name);
    console.log("you will turn 100 in :", turninto100year);
}
AgeTurnInto100("vasu", 25);
