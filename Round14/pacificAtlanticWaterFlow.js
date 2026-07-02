/**
 * Date: 2nd July, 2026
 * Pacific Atlantic Water Flow - DFS Solution
 * You are given an m x n matrix representing the heights of a terrain.
 * Water can flow only from a higher or equal height to a lower height in 4 directions (up, down, left, right).
 *      The Pacific Ocean is on the top and left edges.
 *      The Atlantic Ocean is on the bottom and right edges.
 *      You need to find all the coordinates (cells) from where water can reach both oceans.
 */
function findCommonCoordinates(matrix) {
  if (!matrix || matrix.length === 0) return;

  const rowCount = matrix.length,
    colCount = matrix[0].length;

  const pacific = new Array(rowCount)
    .fill()
    .map(() => new Array(colCount).fill(false));
  const atlantic = new Array(rowCount)
    .fill()
    .map(() => new Array(colCount).fill(false));

  for (let row = 0; row < rowCount; row++) {
    traverse(matrix, pacific, row, 0); // leftmost column
    traverse(matrix, atlantic, row, colCount - 1); // rightmost column
  }

  for (let col = 0; col < colCount; col++) {
    traverse(matrix, pacific, 0, col); // topmost row
    traverse(matrix, atlantic, rowCount - 1, col); //bottommost row
  }

  const result = [];
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

  ocean[row][col] = true; // mark as visited

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
let commonCoord = findCommonCoordinates(matrix);
console.log(`Common co-ordinates where both oceans can reach are: `);
console.log(commonCoord);

matrix = [
  [3, 4, 4],
  [5, 3, 1],
];
commonCoord = findCommonCoordinates(matrix);
console.log(`Common co-ordinates where both oceans can reach are: `);
console.log(commonCoord);

matrix = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
commonCoord = findCommonCoordinates(matrix);
console.log(`Common co-ordinates where both oceans can reach are: `);
console.log(commonCoord);
