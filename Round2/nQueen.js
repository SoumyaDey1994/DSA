/**
 * Date: 5th April, 2025
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
function isSafe(row, col, n, board) {
  // Check for queen in same col
  for (let i = 0; i < row; i++) {
    if (board[i][col] === "Q") return false;
  }

  // Check for queen in diagonal from bottom-right to top-left
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") return false;
  }

  //Check for queen in diagonal from bottom-left to top-right
  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === "Q") return false;
  }

  return true;
}

function backtrack(row, n, board, result) {
  // if row no reaches last row, push the board state to result
  if (row === n) {
    result.push(board.map((r) => r.join("   ")));
    return;
  }

  for (let col = 0; col < n; col++) {
    const isQueenSafe = isSafe(row, col, n, board);
    if (isQueenSafe) {
      board[row][col] = "Q"; // place queen to board
      backtrack(row + 1, n, board, result);
      board[row][col] = "."; // backtrack
    }
  }
}

function placeNQueens(n) {
  if (n <= 0) return null;
  // Create a (n X n) board
  const board = new Array(n).fill().map(() => new Array(n).fill("."));
  const result = [];
  // start with row 0
  backtrack(0, n, board, result);
  return result;
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
