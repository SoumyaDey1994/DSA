/**
 * Date: 6th April, 2026
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
function getRegionPostSurrounding(grid) {
  if (!grid || grid.length === 0) return [];

  const rowCount = grid.length,
    colCount = grid[0].length;

  // mark first & last col
  for (let row = 0; row < rowCount; row++) {
    traverse(grid, row, 0);
    traverse(grid, row, colCount - 1);
  }

  // mark first & last row
  for (let col = 0; col < colCount; col++) {
    traverse(grid, 0, col);
    traverse(grid, rowCount - 1, col);
  }

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (grid[row][col] === "O") {
        grid[row][col] = "X";
      }
      // unmark
      if (grid[row][col] === "T") {
        grid[row][col] = "O";
      }
    }
  }

  return grid;
}

function traverse(grid, row, col) {
  const rowCount = grid.length,
    colCount = grid[0].length;

  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    grid[row][col] === "X"
  )
    return;

  grid[row][col] = "T";

  // traverse in left, right, top, bottom direction
  traverse(grid, row, col - 1);
  traverse(grid, row, col + 1);
  traverse(grid, row - 1, col);
  traverse(grid, row + 1, col);
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
