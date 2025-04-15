//1.1. Write a program to calculate if a person is a senior citizen or not 
//age > 60 and age < 80


function seniorCitizen(age){
    let seniorcitizenornot = "";
    if(age > 60 && age < 80){
        seniorcitizenornot = " person is  senior citizen";
    }
  
    else {
        seniorcitizenornot =" not a senior citizen ";
    }
    console.log(seniorcitizenornot);
    return seniorcitizenornot;
}
seniorCitizen(15);
seniorCitizen(70);
seniorCitizen(79);