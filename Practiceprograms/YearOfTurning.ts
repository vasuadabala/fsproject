//23.Create a program that asks the user to enter their name and their age.
//  Print out a message addressed to them that tells them the year that they will turn 100 years
//this method is input as string and number and it gives output

function ageTurnInto100(name, age) {
  let currentyear = 2025;
  let turninto100year = currentyear + (100 - age);
  console.log("name:", name);
  console.log("you will turn 100 in :", turninto100year);
}

ageTurnInto100("vasu", 25);
ageTurnInto100("sai", 23);
ageTurnInto100("ramu", 19);
