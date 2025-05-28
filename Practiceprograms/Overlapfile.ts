//50.write a program for file overlap

const fs = require('fs');

function appendToFile(filename: string, content: string): void {
    fs.appendFile(filename, content, (err: Error | null) => {
        if (err) {
            console.error("Error appending to file:", err.message);
        } else {
            console.log(`Data appended successfully to ${filename}`);
        }
    });
}

appendToFile("output.txt", "This content is appended.");
