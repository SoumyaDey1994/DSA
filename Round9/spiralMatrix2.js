/**
 * Date: 6th March, 2026
 * 📌 Problem Statement — Spiral Matrix II
 * You are given a single integer n.
 * Your task is to generate an n x n matrix (2D array) filled with numbers from 1 to n², 
 *      arranged in spiral order, moving clockwise.
 * That means you fill:
 *      Left → Right across the top row
 *      Top → Bottom down the right column
 *      Right → Left across the bottom row
 *      Bottom → Top up the left column
 *            and continue inward in layers (like peeling an onion) until the matrix is filled.
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
function generateSpiralMatrix(n) {
  if (!n || n === 0) return;

  let value = 1;
  let left = 0,
    top = 0;
  let right = n - 1,
    bottom = n - 1;
  let direction = 0;
  const result = new Array(n).fill().map(() => new Array(n).fill(null));

  while (left <= right && top <= bottom) {
    if (direction === 0) {
      // keep top same, move left->right, increment top
      for (let i = left; i <= right; i++) {
        result[top][i] = value++;
      }
      top++;
    }

    if (direction === 1) {
      // keep right same, move top->bottom, decrement right
      for (let i = top; i <= bottom; i++) {
        result[i][right] = value++;
      }
      right--;
    }

    if (direction === 2) {
      // keep bottom same, move right->left, decrement bottom
      for (let i = right; i >= left; i--) {
        result[bottom][i] = value++;
      }
      bottom--;
    }

    if (direction === 3) {
      // keep left same, move bottom->top, increment left
      for (let i = bottom; i >= top; i--) {
        result[i][left] = value++;
      }
      left++;
    }

    direction = (direction + 1) % 4;
  }

  return result;
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

output = generateSpiralMatrix(8);
console.log(`Spiral Matrix for 8`);
console.log(output);
