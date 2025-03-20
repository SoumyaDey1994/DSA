/**
 * Date: 20th March, 2025
 * Problem Statement: Shortest Path in Binary Matrix
 * You are given an n x n binary matrix grid, where:
 *      0 represents an open cell & 1 represents a blocked cell.
 * Your task is to find the shortest path from the top-left corner (0,0) to the bottom-right corner (n-1,n-1),
 * moving in 8 possible directions (up, down, left, right, and diagonals).
 * If no such path exists, return -1.
 * Example 1:
 *      grid = [[0, 1], [1, 0]]
 *      steps: 2
 *      explanation: The shortest path is (0,0) → (1,1), taking 2 steps.
 * Example 2:
 *      grid = [[0, 0, 0], [1, 1, 0], [1, 1, 0]]
 *      steps: 4
 *      explanation: The shortest path is (0,0) → (0,1) -> (1,2) -> (2,2) taking 4 steps.
 */

function findShortestPath(grid) {
  if (!grid || grid.length === 0) return -1;

  const rowCount = grid.length,
    colCount = grid[0].length;
  // if start & end itself is blocked, return early
  if (grid[0][0] === 1 || grid[rowCount - 1][colCount - 1] === 1) return -1;

  const path = [[0, 0, 1]]; // start from (0,0) with step 1;

  while (path.length > 0) {
    let [currRow, currCol, step] = path.shift();
    if (currRow === rowCount - 1 && currCol === colCount - 1) return step; // when reaches to end, return steps
    // If row & col are within range & grid position is 0, then proceed
    if (
      currRow >= 0 &&
      currRow < rowCount &&
      currCol >= 0 &&
      currCol < colCount &&
      grid[currRow][currCol] == 0
    ) {
      grid[currRow][currCol] = 1; // mark as visited

      path.push([currRow, currCol - 1, step + 1]); // left
      path.push([currRow, currCol + 1, step + 1]); // right
      path.push([currRow - 1, currCol, step + 1]); // top
      path.push([currRow + 1, currCol, step + 1]); // bottom
      path.push([currRow - 1, currCol - 1, step + 1]); // top diagonal
      path.push([currRow + 1, currCol + 1, step + 1]); // bottom diagonal
    }
  }
  return -1; // No path found
}

let grid = [
  [0, 1],
  [1, 0],
];
let shortestSteps = findShortestPath(grid);
console.log(`Shortest no of steps are: ${shortestSteps}`);

grid = [
  [0, 1, 0],
  [1, 1, 0],
  [1, 0, 0],
];
shortestSteps = findShortestPath(grid);
console.log(`Shortest no of steps are: ${shortestSteps}`);

grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
shortestSteps = findShortestPath(grid);
console.log(`Shortest no of steps are: ${shortestSteps}`);

grid = [
  [0, 1, 0, 1],
  [1, 0, 0, 0],
  [1, 1, 1, 0],
  [1, 1, 0, 0],
];
shortestSteps = findShortestPath(grid);
console.log(`Shortest no of steps are: ${shortestSteps}`);
