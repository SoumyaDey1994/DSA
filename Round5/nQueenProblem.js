/**
 * Date: 31st August, 2025
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
function findNQueens(n) {
  if (n <= 0) return [];

  const board = new Array(n).fill().map((r) => new Array(n).fill(""));
  const result = [];

  backtrack(0, n, board, result);
  return result;
}

function backtrack(currRow, n, board, result) {
  if (currRow === n) {
    result.push(board.map((r) => r.join(" ")));
    return;
  }

  for (let col = 0; col < n; col++) {
    const isSafe = isQueenSafe(board, currRow, col, n);
    if (isSafe) {
      board[currRow][col] = "Q";
      backtrack(currRow + 1, n, board, result);
      board[currRow][col] = ".";
    }
  }
}

function isQueenSafe(board, row, col, n) {
  // check if queen is in same col
  for (let i = 0; i < n; i++) {
    if (board[i][col] === "Q") return false;
  }
  // check if queen is present diagonally
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === "Q") return false;
  }
  // check if queen is present diagonally in diff direction
  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === "Q") return false;
  }

  return true;
}

let n = 2;
let result = findNQueens(n);
console.log(`N=${n}`);
console.log(result);

n = 1;
result = findNQueens(n);
console.log(`N=${n}`);
console.log(result);

n = 4;
result = findNQueens(n);
console.log(`N=${n}`);
console.log(result);

n = 6;
result = findNQueens(n);
console.log(`N=${n}`);
console.log(result);
