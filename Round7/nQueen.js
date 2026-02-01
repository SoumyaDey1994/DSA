/**
 * Date: 1st Feb, 2026
 * Problem Statement: N-Queens Problem
 * we need to place N queens on an N × N chessboard such that:
 *      1. No two queens attack each other.
 *      2. A queen can move vertically, horizontally, or diagonally, so we must ensure that:
 *          a. No two queens are in the same row.
 *          b. No two queens are in the same column.
 *          c. No two queens are in the same diagonal.
 * Example 1:
 *      N = 1,
 *      Output: Q
 * Example 2:
 *      N = 2
 *      Output: No valid solution because any placement of two queens results in an attack.
 */
function placeNQueens(n) {
  if (!n || n <= 0) return;

  const board = new Array(n).fill().map(() => new Array(n).fill("."));
  const result = [];
  traverse(n, 0, board, result); // noOfRows, currCol, board, result
  return result;
}

function traverse(n, row, board, result) {
  if (row === n) {
    result.push(board.map((r) => r.join("   ")));
    return;
  }

  for (let i = 0; i < n; i++) {
    const isQueenSafe = isSafe(row, i, n, board);
    if (isQueenSafe) {
      board[row][i] = "Q";
      traverse(n, row + 1, board, result);
      board[row][i] = ".";
    }
  }
}

function isSafe(row, col, n, board) {
  for (let i = 0; i < row; i++) {
    if (board[i][col] === "Q") return false;
  }

  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") return false;
  }

  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === "Q") return false;
  }

  return true;
}


let n = 4;
let result = placeNQueens(n);
console.log(
  `\nNo of solution available for ${n}x${n} board is: ${result.length}`
);
console.log(result);

n = 6;
result = placeNQueens(n);
console.log(
  `\nNo of solution available for ${n}x${n} board is: ${result.length}`
);
console.log(result);

n = 1;
result = placeNQueens(n);
console.log(
  `\nNo of solution available for ${n}x${n} board is: ${result.length}`
);
console.log(result);

n = 7;
result = placeNQueens(n);
console.log(
  `\nNo of solution available for ${n}x${n} board is: ${result.length}`
);
console.log(result);

