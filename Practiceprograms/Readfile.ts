//49.write a program to read from a file

const fs = require('fs');

function readFromFile(filename: string): void {
    fs.readFile(filename,  (err, data: string) => {
        if (err) {
            console.error("Error reading file:", err.message);
        } else {
            console.log(`File contents:\n${data}`);
        }
    });
}

readFromFile("output.txt");
