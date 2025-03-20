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

function traverse(grid, row, col) {
  const rowCount = grid.length;
  const colCount = grid[0].length;

  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    grid[row][col] === "X"
  )
    return;

  grid[row][col] = "T";
  // console.log(row, col);
  traverse(grid, row, col - 1); // left
  traverse(grid, row, col + 1); // right
  traverse(grid, row - 1, col); // up
  traverse(grid, row + 1, col); // down
}

function getSurroundedRegions(grid) {
  if (!grid || grid.length === 0) return;

  const rowCount = grid.length;
  const colCount = grid[0].length;

  // Traverse for left & right column
  for (let i = 0; i < rowCount; i++) {
    traverse(grid, i, 0); // first column
    traverse(grid, i, colCount - 1); // last column
  }

  // Traverse for top & bottom row
  for (let i = 0; i < colCount; i++) {
    traverse(grid, 0, i); // first column
    traverse(grid, rowCount - 1, i); // last column
  }
  // console.log(grid);
  // Check for surrounded regions
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      // convert '0' to 'X
      if (grid[i][j] === "O") {
        grid[i][j] = "X";
      }
      // convert 'T' back to '0'
      if (grid[i][j] === "T") {
        grid[i][j] = "O";
      }
    }
  }
  return grid;
}

let grid = [
  ["O", "X", "X", "O", "X"],
  ["X", "X", "X", "X", "O"],
  ["X", "X", "X", "X", "X"],
  ["O", "X", "O", "X", "O"],
];

let output = getSurroundedRegions(grid);
console.log("Surrounded Region: ");
console.log(output);

grid = [
  ["X", "X", "X", "X"],
  ["X", "O", "O", "X"],
  ["X", "X", "O", "X"],
  ["X", "O", "X", "X"],
];

output = getSurroundedRegions(grid);
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
