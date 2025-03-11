/**
 * Date: 11th March, 2025
 * Problem Statement: Print 2D array in Spiral order
 * Example:
 *      arr = [
 *          1, 2, 3, 4
 *          5, 6, 7, 8,
 *          9, 10, 11, 12,
 *          13, 14, 15, 16
 *      ]
 */

function printInSpiralOrder(arr) {
  const rowCount = arr.length;
  const colCount = arr[0].length;
  let left = 0,
    right = colCount - 1;
  let top = 0,
    bottom = rowCount - 1;
  let direction = 0,
    result = "";
  while (left <= right && top <= bottom) {
    if (direction === 0) {
      // top is constant, left->right
      for (let i = left; i <= right; i++) {
        result = result + arr[left][i] + ",";
      }
      top++;
    } else if (direction === 1) {
      // right is constant, top->bottom
      for (let i = top; i <= bottom; i++) {
        result = result + arr[i][right] + ",";
      }
      right--;
    } else if (direction === 2) {
      // bottom is constant, right->left
      for (let i = right; i >= left; i--) {
        result = result + arr[bottom][i] + ",";
      }
      bottom--;
    } else if (direction === 3) {
      // left is constant, bottom->top
      for (let i = bottom; i >= top; i--) {
        result = result + arr[i][left] + ",";
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
let result = printInSpiralOrder(arr);
console.log("Spiral Print: ", result);

arr = [
  [1, 2, 7, 8, 13],
  [3, 4, 9, 10, 14],
  [5, 6, 11, 12, 15],
];
result = printInSpiralOrder(arr);
console.log("Spiral Print: ", result);
