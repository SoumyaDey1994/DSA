/**
 * Date: March 13, 2025
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

function getUniquePaths(rowCount, colCount) {
    const dp = new Array(colCount).fill(1);
    for(let i=1; i<rowCount; i++) {
        for(let j=1; j<colCount; j++) {
            dp[j] = dp[j] + dp[j-1];
        }
    }
    return dp[colCount-1];
}

let rowCount = 2, colCount = 3;
let uniquePathCount = getUniquePaths(rowCount, colCount);
console.log(`No of unique paths for ${rowCount}x${colCount} grid is: ${uniquePathCount}`);

rowCount = 3, colCount = 7;
uniquePathCount = getUniquePaths(rowCount, colCount);
console.log(`No of unique paths for ${rowCount}x${colCount} grid is: ${uniquePathCount}`);

rowCount = 3, colCount = 3;
uniquePathCount = getUniquePaths(rowCount, colCount);
console.log(`No of unique paths for ${rowCount}x${colCount} grid is: ${uniquePathCount}`);

rowCount = 1, colCount = 1;
uniquePathCount = getUniquePaths(rowCount, colCount);
console.log(`No of unique paths for ${rowCount}x${colCount} grid is: ${uniquePathCount}`);
