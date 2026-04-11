/**
 * Date: 11th April, 2026
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
function findUniquePathCount(m, n) {
  if (!m || m === 0 || !n || n === 0) return 0;

  const aux = new Array(m).fill().map(() => new Array(n).fill(0));

  for (let row = 0; row < m; row++) {
    aux[row][0] = 1;
  }

  for (let col = 0; col < n; col++) {
    aux[0][col] = 1;
  }

  for (let row = 1; row < m; row++) {
    for (let col = 1; col < n; col++) {
      aux[row][col] = aux[row - 1][col] + aux[row][col - 1];
    }
  }

  return aux[m - 1][n - 1];
}

let m = 3,
  n = 7;
console.log(
  `No of unique paths for ${m}x${n} grid is: ${findUniquePathCount(m, n)}`,
);

((m = 3), (n = 3));
console.log(
  `No of unique paths for ${m}x${n} grid is: ${findUniquePathCount(m, n)}`,
);

((m = 1), (n = 1));
console.log(
  `No of unique paths for ${m}x${n} grid is: ${findUniquePathCount(m, n)}`,
);

((m = 4), (n = 4));
console.log(
  `No of unique paths for ${m}x${n} grid is: ${findUniquePathCount(m, n)}`,
);
