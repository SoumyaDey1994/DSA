/**
 * Date: 31st May, 2025
 * Problem Statement: Surrounded Regions
 * You are given an m x n grid (2D board) containing 'X' and 'O'. 
 * Your task is to capture all regions surrounded by 'X'. 
 * A region is captured by flipping all 'O's within that region to 'X', 
 * but only if the region is completely surrounded by 'X' on all four sides.
 * Rules:
        An 'O' on the border (first row, last row, first column, last column) cannot be captured.
        Any 'O' connected to a border 'O' cannot be captured.
        All other 'O's that are fully surrounded by 'X' will be flipped to 'X'.
 */
function capture(board, row, col) {
  const rowCount = board.length;
  const colCount = board[0].length;

  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    board[row][col] === "X"
  )
    return;

  // Mark with T
  board[row][col] = "T";
  // Traverse through all 4 directions
  capture(board, row - 1, col); // up
  capture(board, row + 1, col); // down
  capture(board, row, col - 1); // left
  capture(board, row, col + 1); // right
}

function captureSurroundedRegions(board) {
  if (!board || board.length === 0) return;

  const rowCount = board.length;
  const colCount = board[0].length;
  // mark edge columns
  for (let i = 0; i < rowCount; i++) {
    capture(board, i, 0);
    capture(board, i, colCount - 1);
  }

  // mark edge rows
  for (let i = 0; i < colCount; i++) {
    capture(board, 0, i);
    capture(board, rowCount - 1, i);
  }
  // capture the Os by replacing with X
  // unmark the T cells marked before, by replacing with O
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      // Replace O with X
      if (board[i][j] === "O") {
        board[i][j] = "X";
      }
      // Replace T with O
      if (board[i][j] === "T") {
        board[i][j] = "O";
      }
    }
  }
  return board;
}

let grid = [
  ["O", "X", "X", "O", "X"], // no change scenario
  ["X", "X", "X", "X", "O"],
  ["X", "X", "X", "X", "X"],
  ["O", "X", "O", "X", "O"],
];

let output = captureSurroundedRegions(grid);
console.log("1. Surrounded Region: ");
console.log(output);

grid = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

output = captureSurroundedRegions(grid);
console.log("2. Surrounded Region: ");
console.log(output);

grid = [
  ["X", "X", "X", "X"],
  ["X", "O", "X", "X"],
  ["X", "X", "O", "X"],
  ["X", "X", "X", "X"],
];

output = captureSurroundedRegions(grid);
console.log("3. Surrounded Region: ");
console.log(output);

grid = [
  ["0", "X", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "X", "0"],
];

output = captureSurroundedRegions(grid);
console.log("4. Surrounded Region: ");
console.log(output);
