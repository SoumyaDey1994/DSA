/**
 * Date: 5th Jan, 2025
 * 📌 Problem Statement — Spiral Matrix II
 * You are given a single integer n.
 * Your task is to generate an n x n matrix (2D array) filled with numbers from 1 to n², 
 *      arranged in spiral order, moving clockwise.
 * That means you fill:
 *      Left → Right across the top row
 *      Top → Bottom down the right column
 *      Right → Left across the bottom row
 *      Bottom → Top up the left column
 *      …and continue inward in layers (like peeling an onion) until the matrix is filled.
 * Example 1:
 *      Input: n = 3
        Output:
        [
            [1, 2, 3],
            [8, 9, 4],
            [7, 6, 5]
        ]
 * Example 2:
 *      Input: n = 1
        Output:
        [[1]]
 * Example 3:
 *      Input: n = 4
        Output:
        [
            [ 1,  2,  3,  4],
            [12, 13, 14,  5],
            [11, 16, 15,  6],
            [10,  9,  8,  7]
        ]
 */
function generateSpiralMatrix(num) {
  if (!num || num <= 0) return;

  let low = 1,
    high = num * num;

  let left, right, top, bottom;
  (left = top = 0), (right = bottom = num - 1);

  let output = new Array(num).fill().map(() => new Array(num).fill(null));
  let direction = 0;

  while (low <= high) {
    if (direction === 0) {
      // keep top same, move from left -> right
      for (let i = left; i <= right; i++) {
        output[top][i] = low;
        low++;
      }
      top++;
    }
    if (direction === 1) {
      // keep right same, move from top-> bottom
      for (let i = top; i <= bottom; i++) {
        output[i][right] = low;
        low++;
      }
      right--;
    }
    if (direction === 2) {
      // keep bottom same, move from right -> left
      for (let i = right; i >= left; i--) {
        output[bottom][i] = low;
        low++;
      }
      bottom--;
    }
    if (direction === 3) {
      // keep left same, move from bottom -> top
      for (let i = bottom; i >= top; i--) {
        output[i][left] = low;
        low++;
      }
      left++;
    }
    direction = (direction + 1) % 4;
  }

  return output;
}

let output = generateSpiralMatrix(3);
console.log(`Spiral Matrix for 3`);
console.log(output);

output = generateSpiralMatrix(4);
console.log(`Spiral Matrix for 4`);
console.log(output);

output = generateSpiralMatrix(6);
console.log(`Spiral Matrix for 6`);
console.log(output);
