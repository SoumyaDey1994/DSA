/**
 * Date: 21st Dec, 2025
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
function findQuensBoard(n) {
  if (n <= 0) return;

  const board = new Array(n).fill().map(() => new Array(n).fill("."));
  const result = [];
  backtrack(0, n, board, result);
  return result;
}

function backtrack(row, colCount, board, result) {
  if (row === colCount) {
    result.push(board.map((row) => row.join("   ")));
    return;
  }

  for (let i = 0; i < colCount; i++) {
    const isQueenSafe = isSafe(row, i, colCount, board);

    if (isQueenSafe) {
      board[row][i] = "Q";
      backtrack(row + 1, colCount, board, result);
      board[row][i] = ".";
    }
  }
}

function isSafe(row, col, colCount, board) {
  for (let i = 0; i < row; i++) {
    if (board[i][col] === "Q") return false;
  }

  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") return false;
  }

  for (let i = row, j = col; i >= 0 && j < colCount; i--, j++) {
    if (board[i][j] === "Q") return false;
  }

  return true;
}

let n = 4;
let result = findQuensBoard(n);
console.log(
  `\nNo of solution available for ${n}x${n} board is: ${result.length}`
);
console.log(result);

// n = 6;
// result = findQuensBoard(n);
// console.log(
//   `\nNo of solution available for ${n}x${n} board is: ${result.length}`
// );
// console.log(result);

n = 1;
result = findQuensBoard(n);
console.log(
  `\nNo of solution available for ${n}x${n} board is: ${result.length}`
);
console.log(result);

// n = 7;
// result = findQuensBoard(n);
// console.log(
//   `\nNo of solution available for ${n}x${n} board is: ${result.length}`
// );
// console.log(result);
