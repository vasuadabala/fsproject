//48.write a program to write to a file
var fs = rre('fs');
function writeToFile(filename, content) {
    fs.writeFile(filename, content, function (err) {
        if (err) {
            console.error("Error writing to file:", err.message);
        }
        else {
            console.log("Data written successfully to ".concat(filename));
        }
    });
}
writeToFile("output.txt", "This is a test.");
