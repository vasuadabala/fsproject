//36. Write a program to draw a game board
function drawBoard(rows: number, cols: number): void {
    const horizontal = "+---".repeat(cols) + "+";
    const vertical = "|   ".repeat(cols) + "|";

    for (let r = 0; r < rows; r++) {
        console.log(horizontal);
        console.log(vertical);
    }
    console.log(horizontal);
}

drawBoard(3, 3);

