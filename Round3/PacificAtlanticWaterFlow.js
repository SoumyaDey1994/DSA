/**
 * Date: March 14th, 2025
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
  )
    return;
  // set co-ordinate as true
  ocean[row][col] = true;

  if (row > 0 && matrix[row - 1][col] > matrix[row][col]) {
    // top
    traverse(matrix, ocean, row - 1, col);
  }
  if (row < rowCount - 1 && matrix[row + 1][col] > matrix[row][col]) {
    // bottom
    traverse(matrix, ocean, row + 1, col);
  }
  if (col > 0 && matrix[row][col + 1] > matrix[row][col]) {
    // left
    traverse(matrix, ocean, row, col + 1);
  }
  if (col < colCount - 1 && matrix[row][col - 1] > matrix[row][col]) {
    // right
    traverse(matrix, ocean, row, col - 1);
  }
}

function findCommonCoordinates(matrix) {
  if (!matrix || matrix.length === 0) return [];
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  const output = [];
  const pacific = new Array(rowCount)
    .fill()
    .map((row) => new Array(colCount).fill(false));
  const atlantic = new Array(rowCount)
    .fill()
    .map((row) => new Array(colCount).fill(false));

  for (let i = 0; i < rowCount; i++) {
    traverse(matrix, pacific, i, 0); // pacific left-most col
    traverse(matrix, atlantic, i, colCount - 1); // atlantic right-most col
  }

  for (let i = 0; i < colCount; i++) {
    traverse(matrix, pacific, 0, i); // pacific top-most row
    traverse(matrix, atlantic, rowCount - 1, i); // atlantic bottom-most row
  }

  //   console.log(pacific);
  //   console.log(atlantic);

  for (let i = 0; i < rowCount; i++) {
    for (j = 0; j < colCount; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        output.push([i, j]);
      }
    }
  }
  return output;
}

let matrix = [
  [3, 4, 4],
  [5, 3, 1],
];
commonCoord = findCommonCoordinates(matrix);
console.log(`Common co-ordinates where both oceans can reach are: `);
console.log(commonCoord);

matrix = [
    [1, 2],
    [4, 1],
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