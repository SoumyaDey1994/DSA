/**
 * Date: March 29, 2025
 * Problem Statement: Unique Paths (Robot Grid Path Count)
 * A robot is located at the top-left corner of an m x n grid (0-based indexing).
 * The robot can only move down or right at any point.
 * The goal is to reach the bottom-right corner of the grid.
 * Find the number of unique paths the robot can take.
 * Example 1:
 *      Input: m = 3, n = 7
 *      Output: 28
 * Example 2:
 *      Input: m = 3, n = 3
 *      Output: 6
 * Example 2:
 *      Input: m = 1, n = 1
 *      Output: 1
 */

function getUniquePathCount(rows, cols) {
  const path = new Array(cols).fill(1);

  // iterate through rows & cols
  // path count at position j is j+(j-1)
  for (let i = 1; i < rows; i++) {
    // O(c^2): c = no of cols
    for (let j = 1; j < cols; j++) {
      path[j] = path[j] + path[j - 1];
    }
  }
  // return count present at last position
  return path[cols - 1];
}

let m = 2,
  n = 3;
console.log(`No of unique paths are: ${getUniquePathCount(m, n)}`);

(m = 3), (n = 7);
console.log(`No of unique paths are: ${getUniquePathCount(m, n)}`);

(m = 2), (n = 2);
console.log(`No of unique paths are: ${getUniquePathCount(m, n)}`);

(m = 1), (n = 1);
console.log(`No of unique paths are: ${getUniquePathCount(m, n)}`);

(m = 3), (n = 3);
console.log(`No of unique paths are: ${getUniquePathCount(m, n)}`);
