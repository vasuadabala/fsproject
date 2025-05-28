//38.write a program tic tac toe draw

type Player = 'X' | 'O' | null;

function checkWinner(board: Player[][]): string {
  const wins = [
    [[0,0],[0,1],[0,2]],
    [[1,0],[1,1],[1,2]],
    [[2,0],[2,1],[2,2]],
    [[0,0],[1,0],[2,0]],
    [[0,1],[1,1],[2,1]],
    [[0,2],[1,2],[2,2]],
    [[0,0],[1,1],[2,2]],
    [[0,2],[1,1],[2,0]]
  ];

  for (const combo of wins) {
    const [a, b, c] = combo;
    if (
      board[a[0]][a[1]] &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      return board[a[0]][a[1]] + " wins!";
    }
  }

  for (const row of board) {
    if (row.indexOf(null) !== -1) return "Game is ongoing";
  }

  return "It's a draw";
}

const board: Player[][] = [
  ['X', 'O', 'X'],
  ['X', 'O', 'O'],
  ['O', 'X', 'X']
];

console.log(checkWinner(board));



