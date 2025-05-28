//50.write a program for file overlap
var fs = require('fs');
function appendToFile(filename, content) {
    fs.appendFile(filename, content, function (err) {
        if (err) {
            console.error("Error appending to file:", err.message);
        }
        else {
            console.log("Data appended successfully to ".concat(filename));
        }
    });
}
appendToFile("output.txt", "This content is appended.");
