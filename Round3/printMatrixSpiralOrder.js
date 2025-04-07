/**
 * Date: 7th April, 2025
 * Problem Statement: Print 2D array in Spiral order
 * Example:
 *      arr = [
 *          1, 2, 3, 4,
 *          5, 6, 7, 8,
 *          9, 10, 11, 12,
 *          13, 14, 15, 16
 *      ]
 */

function printInSpiralOrder(matrix) {
  if (!matrix || matrix.length === 0) return [];

  let left = 0,
    right = matrix[0].length - 1;
  let top = 0,
    bottom = matrix.length - 1;
  let direction = 0;
  let result = "";
  while (left <= right && top <= bottom) {
    // left->right, keeping top as constant
    if (direction === 0) {
      for (let i = left; i <= right; i++) {
        result = result + matrix[top][i] + " ";
      }
      top++; //increment top
    }
    // top->bottom, keeping right as constant
    if (direction === 1) {
      for (let i = top; i <= bottom; i++) {
        result = result + matrix[i][right] + " ";
      }
      right--; //decrement right
    }
    //right->left, keeping bottom as constant
    if (direction === 2) {
      for (let i = right; i >= left; i--) {
        result = result + matrix[bottom][i] + " ";
      }
      bottom--; // decrement bottom
    }
    //bottom->top, keeping left as constant
    if (direction === 3) {
      for (let i = bottom; i >= top; i--) {
        result = result + matrix[i][left] + " ";
      }
      left++; // decrement bottom
    }

    direction = (direction + 1) % 4;
  }
  return result;
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
console.log("Print Output: ", printInSpiralOrder(matrix));

matrix = [
  [1, 2],
  [5, 6],
  [9, 10],
];
console.log("Print Output: ", printInSpiralOrder(matrix));

matrix = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
];
console.log("Print Output: ", printInSpiralOrder(matrix));
