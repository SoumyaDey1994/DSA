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
function findNoOfIslands(grid) {
  if (!grid || grid.length === 0) return;

  let count = 0;
  let rowCount = grid.length,
    colCount = grid[0].length;
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (grid[i][j] === "1") {
        count++;
        traverse(grid, i, j);
      }
    }
  }
  return count;
}

function traverse(grid, row, col) {
  let rowCount = grid.length,
    colCount = grid[0].length;

  // ignore invalid row, col & 0 cells
  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    grid[row][col] === "0"
  )
    return;

  // mark cell as visited
  grid[row][col] = "0";
  // traverse in all 4 direction to merge adjacent islands
  traverse(grid, row, col - 1); // left
  traverse(grid, row, col + 1); // right
  traverse(grid, row - 1, col); // top
  traverse(grid, row + 1, col); // bottom
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
