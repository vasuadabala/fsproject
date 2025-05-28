//49.write a program to read from a file
var fs = require('fs');
function readFromFile(filename) {
    fs.readFile(filename, function (err, data) {
        if (err) {
            console.error("Error reading file:", err.message);
        }
        else {
            console.log("File contents:\n".concat(data));
        }
    });
}
readFromFile("output.txt");
