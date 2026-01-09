/**
 * Date: 9th Jan, 2025
 * 📌 Problem Statement — Set Matrix Zeroes
 * You are given an m x n 2D array matrix.
 * If any element is 0, you must set its entire row and entire column to 0.
 * You must modify the matrix in-place (i.e., change the given matrix itself, not return a new one).
 * Example 1:
 *   Input:
 *  [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
    ]
    Output:
*   [
        [1, 0, 1],
        [0, 0, 0],
        [1, 0, 1]
    ]  
 * Example 2:
 *  Input:
 *  [
        [0, 1, 2, 0],
        [3, 4, 5, 2],
        [1, 3, 1, 5]
    ]
    Output:
    [
        [0, 0, 0, 0],
        [0, 4, 5, 0],
        [0, 3, 1, 0]
    ]          
 */
function setMatrixZones(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return [];

  let firstRowHas0 = false,
    firstColHasZero = false;
  // check if first col has 0
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }
  // check if first row has 0
  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      firstRowHas0 = true;
      break;
    }
  }

  // if first col has 0 for any row, for each row mark the first cell as 0
  if (firstColHasZero) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][0] = 0;
    }
  }
  // if first row has 0, for each col mark the first cell as 0
  if (firstRowHas0) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0;
    }
  }

  // transpose the matrix
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }

  // if any row has first col 0, mark 0 to every cell of that row
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      for (let col = 0; col < matrix[0].length; col++) {
        matrix[row][col] = 0;
      }
    }
  }
  // if any col, first row has 0, mark 0 to every cell of that column
  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      for (let row = 0; row < matrix.length; row++) {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
}

let matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
console.log(`Post Setting Zone to 0 matrix becomes: `);
console.log(setMatrixZones(matrix));

matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
console.log(`Post Setting Zone to 0 matrix becomes: `);
console.log(setMatrixZones(matrix));
