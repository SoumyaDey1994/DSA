/**
 * Date: 7th March, 2025
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
    Output: 6
    Example 3:
        grid = [
            ["0", "0", "0"],
            ["0", "0", "0"],
            ["0", "0", "0"]
        ]
    Output: 0 
 */
function findNoOfIslands(grid) {
  if (!grid.length || !grid[0].length) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1") {
        count++;
        traverseGrid(grid, i, j);
      }
    }
  }
  return count;
}

function traverseGrid(grid, row, col) {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    grid[row][col] === "0"
  )
    return;
  // mark the position as visited
  grid[row][col] = "0";

  // Travarse grid vertically
  traverseGrid(grid, row - 1, col); // Up
  traverseGrid(grid, row + 1, col); // Down
  // Travarse grid horizontally
  traverseGrid(grid, row, col - 1); // left
  traverseGrid(grid, row, col + 1); // right
  
  // Diagonal travarsal (if needed)
//   traverseGrid(grid, row - 1, col - 1); // diagonal up
//   traverseGrid(grid, row + 1, col + 1); // diagonal down
}

let grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
let islandCount = findNoOfIslands(grid);
console.log(`No of islands in given grid are: ${islandCount}`);

grid = [
    ["1", "0", "1", "0", "1"],
    ["0", "1", "0", "1", "0"],
    ["1", "0", "1", "0", "1"]
  ];
islandCount = findNoOfIslands(grid);
console.log(`No of islands in given grid are: ${islandCount}`);

grid = [
    ["0", "0", "0"],
    ["0", "0", "0"],
    ["0", "0", "0"]
  ];
islandCount = findNoOfIslands(grid);
console.log(`No of islands in given grid are: ${islandCount}`);

grid = [
    ["1", "1", "1"],
    ["1", "1", "1"]
];
islandCount = findNoOfIslands(grid);
console.log(`No of islands in given grid are: ${islandCount}`);

grid = [
    ["1", "0", "1", "0", "1", "1", "0", "1"]
];
islandCount = findNoOfIslands(grid);
console.log(`No of islands in given grid are: ${islandCount}`);
