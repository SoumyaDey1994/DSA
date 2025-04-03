/**
 * Date: 3rd April, 2025
 * Problem Statement: Number of Islands
 * Given a 2D grid of '1' (land) and '0' (water), your task is to find the total number of islands in the grid.
 * An island is a group of connected '1's that are horizontally or vertically adjacent (not diagonally). 
 * You can assume that all four edges of the grid are surrounded by water ('0').
 * Example 1:
 *      grid = [
            ["1", "1", "0", "0", "0"],
            ["1", "1", "0", "0", "0"],
            ["0", "0", "1", "0", "0"],
            ["0", "0", "0", "1", "1"]
        ]
    Output: 3
 * Example 2:    
 *      grid = [
            ["1", "0", "1", "0", "1"],
            ["0", "1", "0", "1", "0"],
            ["1", "0", "1", "0", "1"]
        ]
    Output: 8
    Example 3:
        grid = [
            ["0", "0", "0"],
            ["0", "0", "0"],
            ["0", "0", "0"]
        ]
    Output: 0 
 */
function traverse(grid, row, col) {
  const rowCount = grid.length;
  const colCount = grid[0].length;
  // row/col not applicable or cell already visited
  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    grid[row][col] === "0"
  )
    return;

  // Mark as visited
  grid[row][col] = "0";
  // Travese horizontally & vertically
  traverse(grid, row, col - 1);
  traverse(grid, row, col + 1);
  traverse(grid, row - 1, col);
  traverse(grid, row + 1, col);
}

function getIslandCount(grid) {
  if (!grid || grid.length === 0) return 0;

  const rowCount = grid.length;
  const colCount = grid[0].length;
  let islandCount = 0;

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (grid[i][j] === "1") {
        islandCount++;
        traverse(grid, i, j);
      }
    }
  }
  return islandCount;
}

let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
console.log(`No of islands in grid is/are: ${getIslandCount(grid)}`);

grid = [
  ["1", "0", "1", "0", "1"],
  ["0", "1", "0", "1", "0"],
  ["1", "0", "1", "0", "1"],
];
console.log(`No of islands in grid is/are: ${getIslandCount(grid)}`);

grid = [
  ["0", "0", "0"],
  ["0", "0", "0"],
  ["0", "0", "0"],
];
console.log(`No of islands in grid is/are: ${getIslandCount(grid)}`);

grid = [
  ["1", "1"],
  ["1", "0"],
];
console.log(`No of islands in grid is/are: ${getIslandCount(grid)}`);
