//Implement a Simple Traffic Light System
function checklight(color) {
    var message = "";
    if (color == "red") {
        message = "stop";
    }
    else if (color == "yellow") {
        message = "get ready to stop";
    }
    else if (color == "green") {
        message = "go";
    }
    else {
        message = "invalid color";
    }
    console.log(message);
    return message;
}
checklight("red");
checklight("green");
checklight("yellow");
checklight("black");
