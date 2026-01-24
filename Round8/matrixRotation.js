/**
 * Date: 24th Jan, 2026
 * 📌 Problem: Rotate Image (LeetCode: Rotate Image)
 * You are given an n x n square matrix (2D array), where:
 *      matrix[i][j] is the element at row i, column j.
 * You need to:
 *      Rotate the matrix 90 degrees clockwise, in-place
 *      (i.e., modify the given matrix; don’t return a new one).
 * Example 1:
 *  Input: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    Output: [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
    ]
 * Example 2:
 *  Input: [
        [5, 1, 9, 11],
        [2, 4, 8, 10],
        [13, 3, 6, 7],
        [15, 14, 12, 16]
    ]
    Output: [
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11]
    ]
 */
function rotateMatrix(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return [];

  let rowCount = matrix.length;
  let colCount = matrix[0].length;

  for (let row = 0; row < rowCount; row++) {
    for (let col = row + 1; col < colCount; col++) {
      const temp = matrix[row][col];
      matrix[row][col] = matrix[col][row];
      matrix[col][row] = temp;
    }
  }

  for (let row = 0; row < rowCount; row++) {
    matrix[row] = matrix[row].reverse();
  }

  return matrix;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(`90 Degree rotated matrix becomes: `);
console.log(rotateMatrix(matrix));

matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
console.log(`90 Degree rotated matrix becomes: `);
console.log(rotateMatrix(matrix));
