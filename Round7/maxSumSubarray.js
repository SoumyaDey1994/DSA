/**
 * Date: 5th Feb, 2026
 * Problem Statement: Maximum Sum Subarray (Kadane’s Algorithm Problem)
 * Given an integer array nums,
 * find the contiguous subarray (containing at least one number)
 * that has the largest sum, and return that sum.
 *
 * Example 1:
 *      Input: [1, -3, 2, 1, -1]
 *      Output: 3
 *      Explanation: The maximum sum subarray is [2, 1] with sum 2 + 1 = 3.
 * Example 2:
 *      Input: [-2, -3, -1, -5]
 *      Output: -1
 *      Explanation: Since all elements are negative, the maximum sum subarray is [-1].
 * Example 3:
 *      Input: [5, -2, 3, 4, -1]
 *      Output: 10
 *      Explanation: The maximum sum subarray is [5, -2, 3, 4] with sum 5 + (-2) + 3 + 4 = 10.
 */
function findMaxSum(input) {
  if (!input || input.length === 0) return 0;

  const isAllNegetive = input.every((num) => num < 0);
  if (isAllNegetive) {
    return Math.max(...input);
  }

  let sum = 0,
    maxSum = -Infinity;
  for (let num of input) {
    if (sum + num > 0) {
      sum = sum + num;
    } else {
      sum = 0;
    }

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

let nums = [1, -3, 2, 1, -1];
console.log(`Max Sum Subarray of arr [${nums}] is: ${findMaxSum(nums)}`);

nums = [-2, -3, -1, -5];
console.log(`Max Sum Subarray of arr [${nums}] is: ${findMaxSum(nums)}`);

nums = [5, -2, 3, 4, -1];
console.log(`Max Sum Subarray of arr [${nums}] is: ${findMaxSum(nums)}`);

nums = [4, -1, 2, 1, -5, 4];
console.log(`Max Sum Subarray of arr [${nums}] is: ${findMaxSum(nums)}`);

nums = [10];
console.log(`Max Sum Subarray of arr [${nums}] is: ${findMaxSum(nums)}`);
