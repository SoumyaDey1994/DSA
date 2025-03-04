/**
 * Date: 9th Jan, 2025
 * Given an 2-D array of M rows & N cols,
 * print the array elements in spiral order
 *
 * Input:
 * [
 *      2, 4, 6, 8,
 *      10, 12, 14, 16,
 *      18, 20, 22, 24
 * ]
 *
 * Output: 2, 4, 6, 8, 16, 24, 22, 20, 18, 10, 12, 14
 */

function printMatrix(matrix) {
  const rowCount = matrix.length;
  const colCount = matrix[0].length;

  let left = 0,
    right = colCount - 1,
    top = 0,
    bottom = rowCount - 1;
  let direction = 0;
  while (left <= right && top <= bottom) {
    // Print row-wise
    if (direction === 0) {
      for (let i = left; i <= right; i++) {
        console.log(matrix[top][i]);
      }
      top++;
    }
    if (direction === 1) {
      // Print last col
      for (let i = top; i <= bottom; i++) {
        console.log(matrix[i][right]);
      }
      right--;
    }
    if (direction === 2) {
      // Print row-wise
      for (let i = right; i >= left; i--) {
        console.log(matrix[bottom][i]);
      }
      bottom--;
    }
    if (direction === 3) {
      // Print last col
      for (let i = bottom; i >= top; i--) {
        console.log(matrix[i][left]);
      }
      left++;
    }
    direction = (direction + 1) % 4;
  }
}

let arr = [
  [2, 4, 6, 8],
  [10, 12, 14, 16],
  [18, 20, 22, 24],
];
console.log("Sprial Print 1: ");
printMatrix(arr);

arr = [
    [1, 3, 5, 7],
    [9, 11, 13, 15],
    [17, 19, 21, 23],
    [25, 27, 29, 31],
  ];
console.log("Sprial Print 2: ");
printMatrix(arr);
