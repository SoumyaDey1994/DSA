/**
 * Date: 15th May, 2026
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
function getRegionPostSurrounding(board) {
  if (!board || board.length === 0) return;

  const rowCount = board.length;
  const colCount = board[0].length;

  for (let row = 0; row < rowCount; row++) {
    traverse(board, row, 0); // mark first col
    traverse(board, row, colCount - 1); // mark last col
  }

  for (let col = 0; col < colCount; col++) {
    traverse(board, 0, col); // mark first row
    traverse(board, rowCount - 1, col); // mark last row
  }

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (board[row][col] === "O") {
        board[row][col] = "X";
      }

      if (board[row][col] === "T") {
        board[row][col] = "O";
      }
    }
  }

  return board;
}

function traverse(board, row, col) {
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

  board[row][col] = "T"; // mark with temp

  // traverse in all 4 directions
  traverse(board, row - 1, col); // top
  traverse(board, row + 1, col); // bottom
  traverse(board, row, col - 1); // left
  traverse(board, row, col + 1); // right
}

let grid = [
  ["O", "X", "X", "O", "X"], // no change scenario
  ["X", "X", "X", "X", "O"],
  ["X", "X", "X", "X", "X"],
  ["O", "X", "O", "X", "O"],
];

let output = getRegionPostSurrounding(grid);
console.log("1. Surrounded Region: ");
console.log(output);

grid = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

output = getRegionPostSurrounding(grid);
console.log("2. Surrounded Region: ");
console.log(output);

grid = [
  ["X", "X", "X", "X"],
  ["X", "O", "X", "X"],
  ["X", "X", "O", "X"],
  ["X", "X", "X", "X"],
];

output = getRegionPostSurrounding(grid);
console.log("3. Surrounded Region: ");
console.log(output);

grid = [
  ["O", "X", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "X", "O"],
];

output = getRegionPostSurrounding(grid);
console.log("4. Surrounded Region: ");
console.log(output);
