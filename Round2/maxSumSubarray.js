/**
 * Date: 5th March, 2025
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

function getMaxSumSubarray(list) {
    // If all nums are negetive, return max element
    const isAllNegetive = list.every(element => element < 0);
    if(isAllNegetive) return Math.max(...list);

    let sum = 0, maxSum = 0;
    for(let num of list) {
        if((sum + num) > 0) {
            sum = sum + num;
        } else {
            sum = 0;
        }
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

let input = [1, -3, 2, 1, -1];
let output = getMaxSumSubarray(input);
console.log(`Max sum of any subaary of [${input}] is: ${output}`);

input = [-2, -3, -1, -5];
output = getMaxSumSubarray(input);
console.log(`Max sum of any subaary of [${input}] is: ${output}`);

input = [5, -2, 3, 4, -1];
output = getMaxSumSubarray(input);
console.log(`Max sum of any subaary of [${input}] is: ${output}`);

input = [4, -1, 2, 1, -5, 4];
output = getMaxSumSubarray(input);
console.log(`Max sum of any subaary of [${input}] is: ${output}`);

input = [10];
output = getMaxSumSubarray(input);
console.log(`Max sum of any subaary of [${input}] is: ${output}`);
