/**
 * Date: 27th May, 2025
 * Problem Statement: Print 2D array in Spiral order
 * Example:
 *      arr = [
 *          1, 2, 3, 4
 *          5, 6, 7, 8,
 *          9, 10, 11, 12,
 *          13, 14, 15, 16
 *      ]
 */
function printMatrixSpiralOrder(arr) {
  if (!arr || arr.length === 0) return;

  let direction = 0;
  let left = 0,
    right = arr[0].length - 1;
  let top = 0,
    bottom = arr.length - 1;

  const result = [];
  while (left <= right && top <= bottom) {
    if (direction === 0) {
      // keep top constant, move from left to right
      for (let i = left; i <= right; i++) {
        result.push(arr[top][i]);
      }
      top++;
    }
    if (direction === 1) {
      // keep right constant, move from top to bottom
      for (let i = top; i <= bottom; i++) {
        result.push(arr[i][right]);
      }
      right--;
    }
    if (direction === 2) {
      // keep bottom constant, move from right to left
      for (let i = right; i >= left; i--) {
        result.push(arr[bottom][i]);
      }
      bottom--;
    }
    if (direction === 3) {
      // keep left constant, move from bottom to top
      for (let i = bottom; i >= top; i--) {
        result.push(arr[i][left]);
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
