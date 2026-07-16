/**
 * Date: 16th July, 2025
 * Problem Statement: Longest Increasing Subsequence (LIS)
 * The Longest Increasing Subsequence (LIS) problem asks us to
 * find the length of the longest subsequence in a given array where all elements of the subsequence are in increasing order.
 * A subsequence is a sequence derived from the given array by
 * deleting some or no elements without changing the relative order of the remaining elements.
 * Example 1:
 *      nums = [10, 9, 2, 5, 3, 7, 101, 18]
 *      output: 4
 *      Explanation: The longest increasing subsequence is [2, 3, 7, 101] or [2, 5, 7, 101].
 * Example 2:
 *      nums = [0, 1, 0, 3, 2, 3]
 *      output: 4
 *      Explanation: The longest increasing subsequence is [0, 1, 2, 3]
 * Example 3:
 *      nums = [7, 7, 7, 7, 7, 7, 7]
 *      output: 1
 *      Explanation: Since all elements are the same, the longest increasing subsequence contains only one element.
 */
function findLisLength(nums) {
  if (!nums || nums.length === 0) return 0;

  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }

  return dp[nums.length - 1];
}

let nums = [0, 1, 0, 3, 2, 3];
let lisLength = findLisLength(nums);
console.log(`LIS length of [${nums}] is: ${lisLength}`);

nums = [10, 9, 2, 5, 3, 7, 101, 18];
lisLength = findLisLength(nums);
console.log(`LIS length of [${nums}] is: ${lisLength}`);

nums = [7, 7, 7, 7, 7, 7, 7];
lisLength = findLisLength(nums);
console.log(`LIS length of [${nums}] is: ${lisLength}`);

nums = [5, 7, 8, 9, 11, 10, 12];
lisLength = findLisLength(nums);
console.log(`LIS length of [${nums}] is: ${lisLength}`);

nums = [1, 2, 0, 12, 14, 11, 15];
lisLength = findLisLength(nums);
console.log(`LIS length of [${nums}] is: ${lisLength}`);

nums = [10, 9, 2, 5, 3, 7, 101, 18];
lisLength = findLisLength(nums);
console.log(`LIS length of [${nums}] is: ${lisLength}`);
