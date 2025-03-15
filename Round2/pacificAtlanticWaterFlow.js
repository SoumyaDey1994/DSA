/**
 * Date: March 14th, 2025
 * Pacific Atlantic Water Flow - DFS Solution
 * You are given an m x n matrix representing the heights of a terrain.
 * Water can flow only from a higher or equal height to a lower height in 4 directions (up, down, left, right).
 *      The Pacific Ocean is on the top and left edges.
 *      The Atlantic Ocean is on the bottom and right edges.
 *      You need to find all the coordinates (cells) from where water can reach both oceans.
 */
function checkCoordinates(matrix, ocean, row, col) {
  const rowCount = matrix.length;
  const colCount = matrix[0].length;
  // If row or col outside range & if already set to true, don't consider
  if (
    row < 0 ||
    row >= rowCount ||
    col < 0 ||
    col >= colCount ||
    ocean[row][col] === true
  )
    return;

  // set ocean co-ordinate to true if its in valid range
  ocean[row][col] = true;
  // check for rows
  if (row > 0 && matrix[row - 1][col] >= matrix[row][col]) {
    // up
    checkCoordinates(matrix, ocean, row - 1, col);
  }
  if (row < rowCount - 1 && matrix[row + 1][col] >= matrix[row][col]) {
    // down
    checkCoordinates(matrix, ocean, row - 1, col);
  }
  // check for cols
  if (col > 0 && matrix[row][col - 1] >= matrix[row][col]) {
    // left
    checkCoordinates(matrix, ocean, row, col - 1);
  }
  if (col < colCount - 1 && matrix[row][col + 1] >= matrix[row][col]) {
    // right
    checkCoordinates(matrix, ocean, row, col + 1);
  }
}

function getCoordinates(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return [];

  const rowCount = matrix.length;
  const colCount = matrix[0].length;

  const pacific = new Array(rowCount)
    .fill()
    .map(() => new Array(colCount).fill(false));
  const atlantic = new Array(rowCount)
    .fill()
    .map(() => new Array(colCount).fill(false));

  const output = [];
  // check for co-ordinates for left & right column
  for (let i = 0; i < rowCount; i++) {
    checkCoordinates(matrix, pacific, i, 0);
    checkCoordinates(matrix, atlantic, i, colCount - 1);
  }

  // check for co-ordinates for top & bottom row
  for (let i = 0; i < colCount; i++) {
    checkCoordinates(matrix, pacific, 0, i);
    checkCoordinates(matrix, atlantic, rowCount - 1, i);
  }

  // get common co-ordinates & return
  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (pacific[i][j] && atlantic[i][j]) {
        output.push([i, j]);
      }
    }
  }
  return output;
}

let matrix = [
  [1, 2],
  [4, 1],
];
let commonCoord = getCoordinates(matrix);
console.log(`Common co-ordinates where both oceans can reach are: `);
console.log(commonCoord);

matrix = [
  [3, 4, 4],
  [5, 3, 1],
];
commonCoord = getCoordinates(matrix);
console.log(`Common co-ordinates where both oceans can reach are: `);
console.log(commonCoord);

matrix = [
  [1, 2, 2, 3, 5],
  [3, 2, 3, 4, 4],
  [2, 4, 5, 3, 1],
  [6, 7, 1, 4, 5],
  [5, 1, 1, 2, 4],
];
commonCoord = getCoordinates(matrix);
console.log(`Common co-ordinates where both oceans can reach are: `);
console.log(commonCoord);
