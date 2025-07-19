/**
 * Date: 19th July, 2025
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
function getSurroundedRegions(grid) {
  if (!grid || grid.length === 0) return;

  const rowCount = grid.length;
  const colCount = grid[0].length;
  // cover edge cols
  for (let i = 0; i < rowCount; i++) {
    traverse(grid, i, 0); // leftmost col
    traverse(grid, i, colCount - 1); // rightmost col
  }
  // cover edge rows
  for (let i = 0; i < colCount; i++) {
    traverse(grid, 0, i); // topmost row
    traverse(grid, rowCount - 1, i); // rightmost col
  }

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      //mark O with X
      if (grid[i][j] === "O") {
        grid[i][j] = "X";
      }
      // unmark T with O
      if (grid[i][j] === "T") {
        grid[i][j] = "O";
      }
    }
  }
  return grid;
}

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

  // mark the grid cell
  grid[row][col] = "T";

  //traverse in all 4 direction
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
  ["0", "X", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "X", "0"],
];

output = getSurroundedRegions(grid);
console.log("4. Surrounded Region: ");
console.log(output);
