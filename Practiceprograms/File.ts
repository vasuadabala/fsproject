//48.write a program to write to a file

const fs = require('fs');

function writeToFile(filename: string, content: string): void {
    fs.writeFile(filename, content, function (err): void {
        if (err) {
            console.error("Error writing to file:", err.message);
        } else {
            console.log(`Data written successfully to ${filename}`);
        }
    });
}

writeToFile("output.txt", "This is a test.")