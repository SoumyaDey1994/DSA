/**
 * Date: 15th Nov, 2025
 * Problem Statement: Print 2D array in Spiral order
 * Example:
 *      arr = [
 *          1, 2, 3, 4
 *          5, 6, 7, 8,
 *          9, 10, 11, 12,
 *          13, 14, 15, 16
 *      ]
 *     result = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
 */
function printMatrixSpiralOrder(arr) {
  if (!arr || arr.length === 0) return;

  let left = 0,
    right = arr[0].length - 1,
    top = 0,
    bottom = arr.length - 1;
  let direction = 0;
  const result = [];
  while (left <= right && top <= bottom) {
    if (direction === 0) {
      // keep top constant, move left ---> right
      // then increment top
      for (let i = left; i <= right; i++) {
        result.push(arr[top][i]);
      }
      top++;
    } else if (direction === 1) {
      // keep right constant, move top ---> bottom
      // then decrement right
      for (let i = top; i <= bottom; i++) {
        result.push(arr[i][right]);
      }
      right--;
    } else if (direction === 2) {
      // keep bottom constant, move right ---> left
      // then decrement bottom
      for (let i = right; i >= left; i--) {
        result.push(arr[bottom][i]);
      }
      bottom--;
    } else {
      // keep left constant, move bottom ---> top
      // then increment left
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

arr = [
  [1, 2, 3, 4, 5, 6, 7],
  [10, 20, 30, 40, 50, 60, 70],
  [100, 200, 300, 400, 500, 600, 700],
  [1000, 2000, 3000, 4000, 5000, 6000, 7000],
];
console.log(`Spiral Order Print: [${printMatrixSpiralOrder(arr)}]`);
