/**
 * Date: 9th March, 2025
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
function dfs(board, row, col) {
  const rowCount = board.length;
  const colCount = board[0].length;
  // invalid row/col number or position is already marked by X
  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    board[row][col] === "X"
  )
    return;

  // temporarily marked board position with T
  board[row][col] = 'T';

  // Traverse vertically & horizontally
  dfs(board, row, col - 1); // left
  dfs(board, row, col + 1); // right
  dfs(board, row - 1, col); // up
  dfs(board, row + 1, col); // down
}

function getSurroundedRegions(board) {
  if (!board || board.length === 0) return;

  const rowCount = board.length;
  const colCount = board[0].length;

  // Traverse through edge columns to mark O->T
  for (let i = 0; i < rowCount; i++) {
    dfs(board, i, 0); // first column
    dfs(board, i, colCount - 1); // last column
  }

  // Traverse through edge rows to mark O->T
  for (let j = 0; j < colCount; j++) {
    dfs(board, 0, j); // first row
    dfs(board, rowCount - 1, j); // last row
  }
  // Swap cell values from O->X & T->O
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      // O -> X
      if (board[i][j] === "O") {
        board[i][j] = "X";
      }
      // T -> O
      if (board[i][j] === "T") {
        board[i][j] = "O";
      }
    }
  }
  return board;
}

let grid = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

let output = getSurroundedRegions(grid);
console.log("Surrounded Region: ");
console.log(output);

grid = [
  ["X", "X", "X", "X"],
  ["X", "O", "X", "X"],
  ["X", "X", "O", "X"],
  ["X", "X", "X", "X"],
];

output = getSurroundedRegions(grid);
console.log("Surrounded Region: ");
console.log(output);

grid = [
  ["X", "X", "X"],
  ["X", "O", "X"],
  ["X", "X", "O"],
  ["X", "X", "X"],
];

output = getSurroundedRegions(grid);
console.log("Surrounded Region: ");
console.log(output);

grid = [
  ["O", "X", "X", "O", "X"],
  ["X", "O", "X", "X", "O"],
  ["X", "X", "X", "O", "X"],
  ["O", "X", "O", "X", "O"],
];

output = getSurroundedRegions(grid);
console.log("Surrounded Region: ");
console.log(output);
