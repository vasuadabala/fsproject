//1.Write a program to calculate if a person is a senior citizen or not
//age > 60 and age < 80
//this method is input as number and it gives output
function seniorCitizen(age) {

  if (age > 60 && age < 80) {
  console.log(age ," person is  senior citizen");
  } else {
    console.log(age," person is not senior citizen");
  }
}
seniorCitizen(15);
seniorCitizen(70);
seniorCitizen(79);
