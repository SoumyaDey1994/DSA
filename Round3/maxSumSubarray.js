/**
 * Date: 29th March, 2025
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
function getMaxSumOfSubarray(nums) {
  if (!nums || nums.length <= 1) return nums;
  // If list contains all positive, the max sum subarray is whole array
  const isAllPositive = nums.every((num) => num >= 0); //O(n)
  if (isAllPositive) return nums.reduce((acc, num) => acc + num);
  // if list contains all negetive, return min of the array
  const isAllNegetive = nums.every((num) => num < 0); //O(n)
  if (isAllNegetive) return Math.min(...nums);

  let maxSum = -Infinity,
    sum = 0;
  // Iterate through all elements & check
  // if (sum + current) > 0, then maxSum = max(maxSum, (sum + current))
  // else reset sum to 0
  for (let num of nums) { //O(n)
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
console.log(
  `Max Sum Subarray of arr [${nums}] is: ${getMaxSumOfSubarray(nums)}`
);

nums = [-2, -3, -1, -5];
console.log(
  `Max Sum Subarray of arr [${nums}] is: ${getMaxSumOfSubarray(nums)}`
);

nums = [5, -2, 3, 4, -1];
console.log(
  `Max Sum Subarray of arr [${nums}] is: ${getMaxSumOfSubarray(nums)}`
);

nums = [4, -1, 2, 1, -5, 4];
console.log(
  `Max Sum Subarray of arr [${nums}] is: ${getMaxSumOfSubarray(nums)}`
);

nums = [10];
console.log(
  `Max Sum Subarray of arr [${nums}] is: ${getMaxSumOfSubarray(nums)}`
);
