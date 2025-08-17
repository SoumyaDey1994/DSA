/**
 * Date: 17th August, 2025
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
  if (m === 0 || n === 0) return 0;

  const dp = new Array(n).fill(1);
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] = dp[j] + dp[j - 1];
    }
  }

  return dp[n - 1];
}

let m = 3,
  n = 7;
console.log(
  `No of unique paths for ${m}x${n} grid is: ${findUniquePathCount(m, n)}`
);

(m = 3), (n = 3);
console.log(
  `No of unique paths for ${m}x${n} grid is: ${findUniquePathCount(m, n)}`
);

(m = 1), (n = 1);
console.log(
  `No of unique paths for ${m}x${n} grid is: ${findUniquePathCount(m, n)}`
);

(m = 4), (n = 4);
console.log(
  `No of unique paths for ${m}x${n} grid is: ${findUniquePathCount(m, n)}`
);
