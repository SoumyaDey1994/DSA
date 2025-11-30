/**
 * Date: 30th Nov, 2025
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
  if (!num || num.length === 0) return;

  let left = 0,
    right = num - 1;
  let top = 0,
    bottom = num - 1;
  let direction = 0;
  const matrix = new Array(num).fill(0).map(() => new Array(num).fill(0));

  let start = 1,
    end = num * num;

  while (start <= end) {
    if (direction === 0) {
      // keep top same, move from left ---> right
      for (let i = left; i <= right && i <= end; i++) {
        matrix[top][i] = start++;
      }
      top++;
    }

    if (direction === 1) {
      // keep right same, move from top ---> bottom
      for (let i = top; i <= bottom && i <= end; i++) {
        matrix[i][right] = start++;
      }
      right--;
    }

    if (direction === 2) {
      // keep bottom same, move from right ---> left
      for (let i = right; i >= left && i <= end; i--) {
        matrix[bottom][i] = start++;
      }
      bottom--;
    }

    if (direction === 3) {
      // keep left same, move from bottom ---> top
      for (let i = bottom; i >= top && i <= end; i--) {
        matrix[i][left] = start++;
      }
      left++;
    }

    direction = (direction + 1) % 4;
  }

  return matrix;
}

let num = 3;
console.log(`Spiral Matrix with ${num}x${num} Dimension: `);
console.log(generateSpiralMatrix(num));

num = 1;
console.log(`Spiral Matrix with ${num}x${num} Dimension: `);
console.log(generateSpiralMatrix(num));

num = 5;
console.log(`Spiral Matrix with ${num}x${num} Dimension: `);
console.log(generateSpiralMatrix(num));
