/**
 * Date: 2nd May, 2025
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
function getLongestIncreasingSubseqUsingDP(nums) {
  if (!nums || nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  const length = nums.length;
  const dp = new Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }

  return dp[length - 1];
}

function getLISUsingBinarySearch(nums) {
  if (!nums || nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  const length = nums.length;
  const subSeq = [];

  for (const num of nums) {
    let left = 0,
      right = length - 1;
    while (left < right) {
      const pivot = Math.floor((left + right) / 2);
      if (num <= subSeq[pivot]) {
        right = pivot - 1;
      } else {
        left = pivot + 1;
      }
    }

    if (left <= subSeq.length) {
      subSeq[left] = num;
    } else {
      subSeq.push(num);
    }
  }

  return subSeq.length;
}

console.log(`....Using DP Approach.....`);
let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(
  `Longest increasing subseq length is: ${getLongestIncreasingSubseqUsingDP(nums)}`,
);

nums = [0, 1, 0, 3, 2, 3];
console.log(
  `Longest increasing subseq length is: ${getLongestIncreasingSubseqUsingDP(nums)}`,
);

nums = [7, 7, 7];
console.log(
  `Longest increasing subseq length is: ${getLongestIncreasingSubseqUsingDP(nums)}`,
);

console.log(`....Using Binary Search Approach.....`);
nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(
  `Longest increasing subseq length is: ${getLISUsingBinarySearch(nums)}`,
);

nums = [0, 1, 0, 3, 2, 3];
console.log(
  `Longest increasing subseq length is: ${getLISUsingBinarySearch(nums)}`,
);

nums = [7, 7, 7];
console.log(
  `Longest increasing subseq length is: ${getLISUsingBinarySearch(nums)}`,
);
