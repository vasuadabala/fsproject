//Determine the Grade Based on a Score
function checkgrade(marks) {
    var message = "";
    if (marks >= 100) {
        message = "grade is A+";
    }
    else if (marks >= 90) {
        message = "grade is A";
    }
    else if (marks >= 75) {
        message = "grade is b";
    }
    else if (marks >= 60) {
        message = "grade is c";
    }
    else if (marks >= 50) {
        message = "grade is D";
    }
    else if (marks >= 35) {
        message = "fail";
    }
    else {
        message = "invalid number";
    }
    console.log(message);
    return message;
}
checkgrade(75);
checkgrade(95);
checkgrade(65);
checkgrade(-160);
