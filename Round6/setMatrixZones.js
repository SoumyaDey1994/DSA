/**
 * Date: 2nd Dec, 2025
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
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return;

  let isFirstRowZero = false,
    isFirstColZero = false;
  //check if 0 exists in first row
  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      isFirstRowZero = true;
      break;
    }
  }
  //check if 0 exists in first col
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      isFirstColZero = true;
      break;
    }
  }
  // set 0 to first row/col index when encountered
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }
  // based on 0 marked row/col at index (0), set 0 to entire row
  for (let row = 0; row < matrix.length; row++) {
    if (matrix[row][0] === 0) {
      for (let col = 0; col < matrix[0].length; col++) {
        matrix[row][col] = 0;
      }
    }
  }
  // based on 0 marked row/col at index 0, set 0 to entire row
  for (let col = 0; col < matrix[0].length; col++) {
    if (matrix[0][col] === 0) {
      for (let row = 0; row < matrix.length; row++) {
        matrix[row][col] = 0;
      }
    }
  }
  // set elements of first row to 0 if isFirstRowZero=true
  if (isFirstRowZero) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[0][col] = 0;
    }
  }

  // set elements of first col to 0 if isFirstColZero=true
  if (isFirstColZero) {
    for (let row = 0; row < matrix.length; row++) {
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
console.log(setMatrixZones(matrix));

matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
console.log(`Post Setting Zone to 0 matrix becomes: `);
console.log(setMatrixZones(matrix));
