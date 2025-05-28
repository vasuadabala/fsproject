//9. Write a function to calculate height in centimetries
function convertHeight(feet) {
    var totalinches = feet * 12;
    var totalcentimeters = totalinches * 2.5;
    console.log(" convert height ", feet, " equal to ", totalcentimeters);
}
convertHeight(5.7);
convertHeight(6.3);
convertHeight(5.5);
