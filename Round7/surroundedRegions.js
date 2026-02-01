/**
 * Date: 1st Feb, 2026
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
function getSurroundedRegions(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return;

  const rowCount = matrix.length;
  const colCount = matrix[0].length;

  // check edge rows
  for (let col = 0; col < colCount; col++) {
    traverse(matrix, 0, col);
    traverse(matrix, rowCount - 1, col);
  }
  // check edge cols
  for (let row = 0; row < rowCount; row++) {
    traverse(matrix, row, 0);
    traverse(matrix, row, colCount - 1);
  }

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      // capture O ----> X
      if (matrix[row][col] === "O") {
        matrix[row][col] = "X";
      }
      // unmark T ---> O
      if (matrix[row][col] === "T") {
        matrix[row][col] = "O";
      }
    }
  }

  return matrix;
}

function traverse(matrix, row, col) {
  const rowCount = matrix.length;
  const colCount = matrix[0].length;

  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    matrix[row][col] === "X"
  )
    return;

  // mark this cell
  matrix[row][col] = "T";
  //traverse in all 4 directions
  traverse(matrix, row - 1, col);
  traverse(matrix, row + 1, col);
  traverse(matrix, row, col - 1);
  traverse(matrix, row, col + 1);
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
