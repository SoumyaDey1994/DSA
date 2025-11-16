/**
 * Date: 16th Nov, 2025
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
  if (!input || input.length === 0) return -1;

  let maxSum = 0,
    sum = 0;
  for (let i = 0; i < input.length; i++) {
    if (sum + input[i] > 0) {
      sum = sum + input[i];
      maxSum = Math.max(maxSum, sum);
    } else {
      sum = 0;
    }
  }
  return maxSum;
}

let input = [1, -3, 2, 1, -1];
let output = findMaxSum(input);
console.log(`Max sum of any subaary of [${input}] is: ${output}`);

input = [-2, -3, -1, -5];
output = findMaxSum(input);
console.log(`Max sum of any subaary of [${input}] is: ${output}`);

input = [5, -2, 3, 4, -1];
output = findMaxSum(input);
console.log(`Max sum of any subaary of [${input}] is: ${output}`);

input = [4, -1, 2, 1, -5, 4];
output = findMaxSum(input);
console.log(`Max sum of any subaary of [${input}] is: ${output}`);

input = [10];
output = findMaxSum(input);
console.log(`Max sum of any subaary of [${input}] is: ${output}`);

input = [2, 3, -5, -1, 11, -3];
output = findMaxSum(input);
console.log(`Max sum of any subaary of [${input}] is: ${output}`);
