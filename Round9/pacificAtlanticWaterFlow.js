/**
 * Date: 28th Feb, 2026
 * Pacific Atlantic Water Flow - DFS Solution
 * You are given an m x n matrix representing the heights of a terrain.
 * Water can flow only from a higher or equal height to a lower height in 4 directions (up, down, left, right).
 *      The Pacific Ocean is on the top and left edges.
 *      The Atlantic Ocean is on the bottom and right edges.
 *      You need to find all the coordinates (cells) from where water can reach both oceans.
 */
function findCoordinates(matrix) {
  if (!matrix || matrix.length === 0) return [];

  const rowCount = matrix.length,
    colCount = matrix[0].length;

  const pacific = new Array(rowCount)
    .fill()
    .map(() => new Array(colCount).fill(false));
  const atlantic = new Array(rowCount)
    .fill()
    .map(() => new Array(colCount).fill(false));
  const output = [];

  // pacific: left-most col, atlantic: right-most col
  for (let row = 0; row < rowCount; row++) {
    traverse(matrix, pacific, row, 0);
    traverse(matrix, atlantic, row, colCount - 1);
  }

  // pacific: top-most row, atlantic: bottom-most row
  for (let col = 0; col < colCount; col++) {
    traverse(matrix, pacific, 0, col);
    traverse(matrix, atlantic, rowCount - 1, col);
  }

  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (pacific[row][col] && atlantic[row][col]) {
        output.push([row, col]);
      }
    }
  }

  return output;
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

  ocean[row][col] = true; // mark the cell as visited

  if (row > 0 && matrix[row-1][col] >= matrix[row][col]) {
    traverse(matrix, ocean, row - 1, col); // top-->bottom
  }

  if (row < rowCount - 1 && matrix[row + 1][col] >= matrix[row][col]) {
    traverse(matrix, ocean, row + 1, col); // bottom-->top
  }

  if (col > 0 && matrix[row][col-1] >= matrix[row][col]) {
    traverse(matrix, ocean, row, col - 1); // left-->right
  }

  if (col < colCount - 1 && matrix[row][col + 1] >= matrix[row][col]) {
    traverse(matrix, ocean, row, col + 1); // right-->left
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
