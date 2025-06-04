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
function findMinSteps(grid) {
  if (!grid || grid.length === 0) return;

  const rowCount = grid.length,
    colCount = grid[0].length;

  const queue = [[0, 0, 1]]; // row=0, col=0, step=1
  // BFS approach
  while (queue.length > 0) {
    const [currRow, currCol, steps] = queue.shift();

    if (currRow === rowCount - 1 && currCol === colCount - 1) return steps;

    if (
      currRow >= 0 &&
      currRow < rowCount &&
      currCol >= 0 &&
      currCol < colCount &&
      grid[currRow][currCol] === 0
    ) {
      // console.log(currRow, currCol);
      // mark cell as visited
      grid[currRow][currCol] = 1;
      queue.push([currRow - 1, currCol, steps + 1]); // top
      queue.push([currRow + 1, currCol, steps + 1]); // bottom
      queue.push([currRow, currCol - 1, steps + 1]); // left
      queue.push([currRow, currCol + 1, steps + 1]); // right
      queue.push([currRow + 1, currCol + 1, steps + 1]); // diagonal down
      queue.push([currRow + 1, currCol - 1, steps + 1]); // diagonal
      queue.push([currRow - 1, currCol - 1, steps + 1]); // diagonal up
      queue.push([currRow - 1, currCol + 1, steps + 1]); // diagonal
    }
  }
  return -1; // No path found
}

let grid = [
  [0, 1],
  [1, 0],
];
console.log(`Min no of steps required: ${findMinSteps(grid)}`);

grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
console.log(`Min no of steps required: ${findMinSteps(grid)}`);

grid = [
  [0, 1, 0],
  [1, 1, 0],
  [1, 0, 0],
];
console.log(`Min no of steps required: ${findMinSteps(grid)}`);

grid = [
  [0, 1, 0, 1],
  [1, 0, 0, 0],
  [1, 1, 1, 0],
  [1, 1, 0, 0],
];
console.log(`Min no of steps required: ${findMinSteps(grid)}`);

grid = [
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 0],
];
console.log(`Min no of steps required: ${findMinSteps(grid)}`);

grid = [
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
];
console.log(`Min no of steps required: ${findMinSteps(grid)}`);
