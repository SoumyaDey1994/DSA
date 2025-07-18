/**
 * Date: 18th July, 2025
 * Problem Statement: Print 2D array in Spiral order
 * Example:
 *      arr = [
 *          1, 2, 3, 4
 *          5, 6, 7, 8,
 *          9, 10, 11, 12,
 *          13, 14, 15, 16
 *      ]
 */
function printMatrixSpiralOrder(matrix) {
  if (!matrix || matrix.length === 0) return;

  let left = 0,
    right = matrix[0].length - 1;
  let top = 0,
    bottom = matrix.length - 1;
  let direction = 0;
  let result = [];
  while (left <= right && top <= bottom) {
    if (direction === 0) {
      // move from left->right, top constant
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
    } else if (direction === 1) {
      // move from top->bottom, right constant
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
    } else if (direction === 2) {
      // move from right->left, bottom constant
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    } else if (direction === 3) {
      // move from bottom->top, left constant
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
    direction = (direction + 1) % 4;
  }
  return result;
}

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log(`Spiral Order Print: [${printMatrixSpiralOrder(arr)}]`);

arr = [
  [10, 20, 30],
  [12, 22, 32],
  [15, 25, 35],
  [19, 29, 39],
];
console.log(`Spiral Order Print: [${printMatrixSpiralOrder(arr)}]`);

arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
console.log(`Spiral Order Print: [${printMatrixSpiralOrder(arr)}]`);

arr = [
  [1, 2, 3, 4, 5, 6, 7],
  [10, 20, 30, 40, 50, 60, 70],
  [100, 200, 300, 400, 500, 600, 700],
  [1000, 2000, 3000, 4000, 5000, 6000, 7000],
];
console.log(`Spiral Order Print: [${printMatrixSpiralOrder(arr)}]`);
