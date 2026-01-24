/**
 * Date: 24th Jan, 2026
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
function getNoOfIslands(grid) {
  if (!grid || grid.length === 0 || grid[0].length === 0) return 0;

  const rowCount = grid.length;
  const colCount = grid[0].length;
  let count = 0;

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
  const rowCount = grid.length;
  const colCount = grid[0].length;

  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    grid[row][col] === "0"
  )
    return;

  // mark cell as visited by marking 0
  grid[row][col] = "0";

  // Traverse in all 4 directions
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
console.log(`No of islands in grid is/are: ${getNoOfIslands(grid)}`);

grid = [
  ["1", "0", "1", "0", "1"],
  ["0", "1", "0", "1", "0"],
  ["1", "0", "1", "0", "1"],
];
console.log(`No of islands in grid is/are: ${getNoOfIslands(grid)}`);

grid = [
  ["0", "0", "0"],
  ["0", "0", "0"],
  ["0", "0", "0"],
];
console.log(`No of islands in grid is/are: ${getNoOfIslands(grid)}`);

grid = [
  ["1", "1"],
  ["1", "0"],
];
console.log(`No of islands in grid is/are: ${getNoOfIslands(grid)}`);
