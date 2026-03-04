/**
 * Date: 4th March, 2026
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
function captureSurroundedRegions(grid) {
  if (!grid || grid.length === 0) return;

  const rowCount = grid.length,
    colCount = grid[0].length;

  for (let i = 0; i < rowCount; i++) {
    traverse(grid, i, 0); // first col
    traverse(grid, i, colCount - 1); // last col
  }

  for (let i = 0; i < colCount; i++) {
    traverse(grid, 0, i); // first row
    traverse(grid, rowCount - 1, i); // last row
  }

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (grid[row][col] === "O") {
        grid[row][col] = "X";
      }

      if (grid[row][col] === "T") {
        grid[row][col] = "O"; //flip
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

  traverse(grid, row - 1, col); // top
  traverse(grid, row + 1, col); // bottom
  traverse(grid, row, col - 1); // left
  traverse(grid, row, col + 1); // right
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
  ["O", "X", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "X", "O"],
];

output = captureSurroundedRegions(grid);
console.log("4. Surrounded Region: ");
console.log(output);
