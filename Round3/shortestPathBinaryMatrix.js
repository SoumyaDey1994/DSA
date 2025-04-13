/**
 * Date: 13th April, 2025
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
function findNoOfSteps(matrix) {
  if (!matrix || matrix.length === 0) return 0;

  const dimension = matrix.length;
  const queue = [[0, 0, 1]]; // row, col & level=1

  while (queue.length > 0) {
    const [row, col, level] = queue.shift();
    // console.log(row, col, level);

    if (row === dimension - 1 && col === dimension - 1) return level;

    // Traverse in in 4 directions
    if (
      row >= 0 &&
      col >= 0 &&
      row < dimension &&
      col < dimension &&
      matrix[row][col] === 0
    ) {
      // mark curr row, col as visited, setting 1
      matrix[row][col] = 1;

      queue.push([row, col - 1, level + 1]); // left
      queue.push([row, col + 1, level + 1]); // right
      queue.push([row - 1, col, level + 1]); // top
      queue.push([row + 1, col, level + 1]); // bottom
      queue.push([row + 1, col + 1, level + 1]); // diagonal down
      queue.push([row - 1, col - 1, level + 1]); // diagonal up
    }
  }
  return -1;
}

let grid = [
  [0, 1],
  [1, 0],
];
let steps = findNoOfSteps(grid);
console.log(`Shortest path traverse needs ${steps} steps`);

grid = [
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
];
steps = findNoOfSteps(grid);
console.log(`Shortest path traverse needs ${steps} steps`);

grid = [
  [0, 1, 0],
  [1, 1, 0],
  [1, 0, 0],
];
steps = findNoOfSteps(grid);
console.log(`Shortest path traverse needs ${steps} steps`);

grid = [
  [0, 1, 0, 1],
  [1, 0, 0, 0],
  [1, 1, 1, 0],
  [1, 1, 0, 0],
];
steps = findNoOfSteps(grid);
console.log(`Shortest path traverse needs ${steps} steps`);
