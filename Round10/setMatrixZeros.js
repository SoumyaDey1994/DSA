/**
 * Date: 27th March, 2026
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
function setMatrixZeros(matrix) {
  if (!matrix || matrix.length === 0) return;

  const rowCount = matrix.length,
    colCount = matrix[0].length;

  let isFirstRowHasZero = false,
    isFirstColHasZero = false;

  for (let row = 0; row < rowCount; row++) {
    if (matrix[row][0] === 0) {
      isFirstColHasZero = true;
      break;
    }
  }

  for (let col = 0; col < colCount; col++) {
    if (matrix[0][col] === 0) {
      isFirstRowHasZero = true;
      break;
    }
  }

  // transpose matrix
  for (let row = 0; row < rowCount; row++) {
    for (let col = 0; col < colCount; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][col] = 0;
        matrix[row][0] = 0;
      }
    }
  }

  for (let row = 1; row < rowCount; row++) {
    if (matrix[row][0] === 0) {
      for (let col = 1; col < colCount; col++) {
        matrix[row][col] = 0;
      }
    }
  }

  for (let col = 1; col < colCount; col++) {
    if (matrix[0][col] === 0) {
      for (let row = 1; row < rowCount; row++) {
        matrix[row][col] = 0;
      }
    }
  }

  if (isFirstRowHasZero) {
    for (let col = 0; col < colCount; col++) {
      matrix[0][col] = 0;
    }
  }

  if (isFirstColHasZero) {
    for (let row = 0; row < rowCount; row++) {
      matrix[row][0] = 0;
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
console.log(setMatrixZeros(matrix));

matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
console.log(`Post Setting Zone to 0 matrix becomes: `);
console.log(setMatrixZeros(matrix));
