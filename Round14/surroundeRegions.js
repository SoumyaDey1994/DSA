/**
 * Date: 20th June, 2026
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
function getSurroundedRegions(board) {
  if (!board || board.length === 0) return;

  let rowCount = board.length,
    colCount = board[0].length;

  for (let row = 0; row < rowCount; row++) {
    traverse(row, 0, board); // first col
    traverse(row, colCount - 1, board); // last col
  }

  for (let col = 0; col < colCount; col++) {
    traverse(0, col, board); // first row
    traverse(rowCount - 1, col, board); // last row
  }

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      // console.log("Hello: ",row, col);
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

function traverse(row, col, board) {
  let rowCount = board.length,
    colCount = board[0].length;

  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    board[row][col] === "X" ||
    board[row][col] === "T"
  )
    return;

  // console.log(row, col);

  board[row][col] = "T"; // mark as visited

  // Check in all 4 directions
  traverse(row - 1, col, board);
  traverse(row + 1, col, board);
  traverse(row, col - 1, board);
  traverse(row, col + 1, board);
}

let grid = [
  ["O", "X", "X", "O", "X"], // no change scenario
  ["X", "X", "X", "X", "O"],
  ["X", "X", "X", "X", "X"],
  ["O", "X", "O", "X", "O"],
];

let output = getSurroundedRegions(grid);
console.log("1. Surrounded Region: ");
console.log(output);

grid = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

output = getSurroundedRegions(grid);
console.log("2. Surrounded Region: ");
console.log(output);

grid = [
  ["X", "X", "X", "X"],
  ["X", "O", "X", "X"],
  ["X", "X", "O", "X"],
  ["X", "X", "X", "X"],
];

output = getSurroundedRegions(grid);
console.log("3. Surrounded Region: ");
console.log(output);

grid = [
  ["O", "X", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "X", "O"],
];

output = getSurroundedRegions(grid);
console.log("4. Surrounded Region: ");
console.log(output);

grid = [
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
];

output = getSurroundedRegions(grid);
console.log("4. Surrounded Region: ");
console.log(output);

grid = [
  ["O", "X", "O"],
  ["X", "O", "X"],
  ["O", "X", "O"],
];

output = getSurroundedRegions(grid);
console.log("4. Surrounded Region: ");
console.log(output);
