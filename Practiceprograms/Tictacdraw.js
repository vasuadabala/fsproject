//38.write a program tic tac toe draw
function checkWinner(board) {
    var wins = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];
    for (var _i = 0, wins_1 = wins; _i < wins_1.length; _i++) {
        var combo = wins_1[_i];
        var a = combo[0], b = combo[1], c = combo[2];
        if (board[a[0]][a[1]] &&
            board[a[0]][a[1]] === board[b[0]][b[1]] &&
            board[a[0]][a[1]] === board[c[0]][c[1]]) {
            return board[a[0]][a[1]] + " wins!";
        }
    }
    for (var _a = 0, board_1 = board; _a < board_1.length; _a++) {
        var row = board_1[_a];
        if (row.indexOf(null) !== -1)
            return "Game is ongoing";
    }
    return "It's a draw";
}
var board = [
    ['X', 'O', 'X'],
    ['X', 'O', 'O'],
    ['O', 'X', 'X']
];
console.log(checkWinner(board));
