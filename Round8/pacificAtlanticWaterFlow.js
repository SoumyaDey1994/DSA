/**
 * Date: 23rd Feb, 2026
 * Pacific Atlantic Water Flow - DFS Solution
 * You are given an m x n matrix representing the heights of a terrain.
 * Water can flow only from a higher or equal height to a lower height in 4 directions (up, down, left, right).
 *      The Pacific Ocean is on the top and left edges.
 *      The Atlantic Ocean is on the bottom and right edges.
 *      You need to find all the coordinates (cells) from where water can reach both oceans.
 */
function findCoordinates(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return [];

  const rowCount = matrix.length,
    colCount = matrix[0].length;

  const pacific = new Array(rowCount)
      .fill()
      .map(() => new Array(colCount).fill(false)),
    atlantic = new Array(rowCount)
      .fill()
      .map(() => new Array(colCount).fill(false));
  const result = [];

  for (let i = 0; i < colCount; i++) {
    // pacific for top row, atlantic for bottom row
    traverse(matrix, pacific, 0, i);
    traverse(matrix, atlantic, rowCount - 1, i);
  }

  for (let i = 0; i < rowCount; i++) {
    // pacific for left col, atlantic for right col
    traverse(matrix, pacific, i, 0);
    traverse(matrix, atlantic, i, colCount - 1);
  }

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (pacific[row][col] && atlantic[row][col]) {
        result.push([row, col]);
      }
    }
  }

  return result;
}

function traverse(matrix, ocean, row, col) {
  const rowCount = matrix.length,
    colCount = matrix[0].length;

  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    ocean[row][col] === true
  )
    return;

  ocean[row][col] = true; // mark the cell

  if (row > 0 && matrix[row - 1][col] >= matrix[row][col]) {
    traverse(matrix, ocean, row - 1, col);
  }

  if (row < rowCount - 1 && matrix[row + 1][col] >= matrix[row][col]) {
    traverse(matrix, ocean, row + 1, col);
  }

  if (col > 0 && matrix[row][col - 1] >= matrix[row][col]) {
    traverse(matrix, ocean, row, col - 1);
  }

  if (col < colCount - 1 && matrix[row][col + 1] >= matrix[row][col]) {
    traverse(matrix, ocean, row, col + 1);
  }
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
