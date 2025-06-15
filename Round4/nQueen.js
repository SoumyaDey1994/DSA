/**
 * Date: 15th June, 2025
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

function placeQueens(n) {
  if (n <= 0) return;

  const result = [];
  const board = new Array(n).fill().map(() => new Array(n).fill("."));

  backtrack(0, n, board, result);
  return result;
}

function backtrack(row, n, board, result) {
  if (row === n) {
    result.push(board.map((r) => r.join("   ")));
    return;
  }

  for (let col = 0; col < n; col++) {
    const isQueenSafe = isSafe(row, col, n, board);
    if (isQueenSafe) {
      board[row][col] = "Q";
      backtrack(row + 1, n, board, result);
      board[row][col] = ".";
    }
  }
}

function isSafe(row, col, n, board) {
  // check if queen is in same col
  for (let i = 0; i < row; i++) {
    if (board[i][col] === "Q") return false;
  }
  // check if queen is present diagonally
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") return false;
  }

  // check for queen in diagonal from bottom-left to top-right
  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === "Q") return false;
  }

  return true;
}


let n = 2;
let result = placeQueens(n);
console.log(`N=${n}`);
console.log(result);

n = 1;
result = placeQueens(n);
console.log(`N=${n}`);
console.log(result);

n = 4;
result = placeQueens(n);
console.log(`N=${n}`);
console.log(result);

n = 6;
result = placeQueens(n);
console.log(`N=${n}`);
console.log(result);
