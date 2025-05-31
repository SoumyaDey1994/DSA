/**
 * Date: 31st May, 2025
 * Pacific Atlantic Water Flow - DFS Solution
 * You are given an m x n matrix representing the heights of a terrain.
 * Water can flow only from a higher or equal height to a lower height in 4 directions (up, down, left, right).
 *      The Pacific Ocean is on the top and left edges.
 *      The Atlantic Ocean is on the bottom and right edges.
 *      You need to find all the coordinates (cells) from where water can reach both oceans.
 */

function traverse(matrix, ocean, row, col) {
  const rowCount = matrix.length;
  const colCount = matrix[0].length;

  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    ocean[row][col] === true
  ) {
    return;
  }
  // mark as can be flowed
  ocean[row][col] = true;
  // Traverse in all 4 direction

  // Up: check if water can flow from up row to curr row
  if (row > 0 && matrix[row - 1][col] >= matrix[row][col]) {
    traverse(matrix, ocean, row - 1, col);
  }
  // Down: check if water can flow from down row to curr row
  if (row < rowCount - 1 && matrix[row + 1][col] >= matrix[row][col]) {
    traverse(matrix, ocean, row + 1, col);
  }
  // Left: check if water can flow from left col to curr col
  if (col > 0 && matrix[row][col - 1] >= matrix[row][col]) {
    traverse(matrix, ocean, row, col - 1);
  }
  // Right: check if water can flow from right col to curr col
  if (col < colCount - 1 && matrix[row][col + 1] >= matrix[row][col]) {
    traverse(matrix, ocean, row, col + 1);
  }
}

function findCoordinates(matrix) {
  if (!matrix || matrix.length === 0) return;

  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  const pacific = new Array(rowCount)
      .fill()
      .map(() => new Array(colCount).fill(false)),
    atlantic = new Array(rowCount)
      .fill()
      .map(() => new Array(colCount).fill(false));

  const result = [];
  // Traverse edge rows
  for (let i = 0; i < colCount; i++) {
    traverse(matrix, pacific, 0, i);
    traverse(matrix, atlantic, rowCount - 1, i);
  }
  // Traverse edge columns
  for (let i = 0; i < rowCount; i++) {
    traverse(matrix, pacific, i, 0);
    traverse(matrix, atlantic, i, colCount - 1);
  }
  // Find common coordinates
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        result.push([i, j]);
      }
    }
  }

  return result;
}

let matrix = [
  [1, 2],
  [4, 1],
];
let commonCoord = findCoordinates(matrix);
console.log(`Common co-ordinates where both oceans can reach are: `);
console.log(commonCoord);

matrix = [
  [3, 4, 4],
  [5, 3, 1],
];
commonCoord = findCoordinates(matrix);
console.log(`Common co-ordinates where both oceans can reach are: `);
console.log(commonCoord);

matrix = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
commonCoord = findCoordinates(matrix);
console.log(`Common co-ordinates where both oceans can reach are: `);
console.log(commonCoord);
