/**
 * Date: 4th April, 2026
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
function findNoOfIslands(grid) {
  if (!grid || grid.length === 0) return 0;

  let count = 0;
  const rowCount = grid.length,
    colCount = grid[0].length;

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (grid[row][col] === "1") {
        count++;
        traverse(grid, row, col);
      }
    }
  }

  return count;
}

function traverse(grid, row, col) {
  const rowCount = grid.length,
    colCount = grid[0].length;

  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    grid[row][col] === "0"
  )
    return;

  grid[row][col] = "0"; // mark as counted

  traverse(grid, row - 1, col);
  traverse(grid, row + 1, col);
  traverse(grid, row, col - 1);
  traverse(grid, row, col + 1);
}

let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
let islandCount = findNoOfIslands(grid);
console.log(`Island count is: ${islandCount}`);

grid = [
  ["1", "0", "1", "0", "1"],
  ["0", "1", "0", "1", "0"],
  ["1", "0", "1", "0", "1"],
];
islandCount = findNoOfIslands(grid);
console.log(`Island count is: ${islandCount}`);

grid = [
  ["0", "0", "0"],
  ["0", "0", "0"],
  ["0", "0", "0"],
];
islandCount = findNoOfIslands(grid);
console.log(`Island count is: ${islandCount}`);

grid = [
  ["0", "0", "0", "1"],
  ["0", "1", "0", "1"],
  ["0", "0", "0", "0"],
];
islandCount = findNoOfIslands(grid);
console.log(`Island count is: ${islandCount}`);

grid = [
  ["0", "0", "0"],
  ["0", "1", "0"],
  ["0", "1", "0"],
  ["0", "0", "0"],
];
islandCount = findNoOfIslands(grid);
console.log(`Island count is: ${islandCount}`);