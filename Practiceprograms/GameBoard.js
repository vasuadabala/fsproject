//36. Write a program to draw a game board
function drawBoard(rows, cols) {
    const horizontal = "+---".repeat(cols) + "+";
    const vertical = "|   ".repeat(cols) + "|";
    for (let r = 0; r < rows; r++) {
        console.log(horizontal);
        console.log(vertical);
    }
    console.log(horizontal);
}
drawBoard(3, 3);
