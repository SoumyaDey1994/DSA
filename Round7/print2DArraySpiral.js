/**
 * Date: 17th Jan, 2026
 * Problem Statement: Print 2D array in Spiral order
 * Example:
 *      arr = [
 *          1, 2, 3, 4
 *          5, 6, 7, 8,
 *          9, 10, 11, 12,
 *          13, 14, 15, 16
 *      ]
 *  output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
 */
function getSpiralMatrixRepresentation(arr) {
  if (!arr || arr.length === 0 || arr[0].length === 0) return arr;

  let top = 0,
    left = 0;
  let bottom = arr.length - 1,
    right = arr[0].length - 1;
  let direction = 0,
    result = [];
  while (top <= bottom && left <= right) {
    if (direction === 0) {
      // keep top same, move from left ---> right
      // increment top
      for (let i = left; i <= right; i++) {
        result.push(arr[top][i]);
      }
      top++;
    } else if (direction === 1) {
      // keep right same, move from top ---> bottom
      // decrement right
      for (let i = top; i <= bottom; i++) {
        result.push(arr[i][right]);
      }
      right--;
    } else if (direction === 2) {
      // keep bottom same, move from right ---> left
      // decrement bottom
      for (let i = right; i >= left; i--) {
        result.push(arr[bottom][i]);
      }
      bottom--;
    } else {
      // keep left same, move from bottom ---> top
      // increment left
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
let result = getSpiralMatrixRepresentation(arr);
console.log("Spiral Print: ", result);

arr = [
  [1, 2, 7, 8, 13],
  [3, 4, 9, 10, 14],
  [5, 6, 11, 12, 15],
];
result = getSpiralMatrixRepresentation(arr);
console.log("Spiral Print: ", result);
