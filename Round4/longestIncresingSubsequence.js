/**
 * Date: 10th June, 2025
 * Problem Statement: Longest Increasing Subsequence (LIS)
 * The Longest Increasing Subsequence (LIS) problem asks us to
 * find the length of the longest subsequence in a given array where
 * all elements of the subsequence are in increasing order.
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
function findLISUsingDp(nums) {
  if (!nums || nums.length === 0) return;

  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // Max length of subseq
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }
  //   console.log(dp);
  return dp[nums.length - 1];
}

function findLISUsingBinarySearch(nums) {
  if (!nums || nums.length === 0) return;

  let subSeq = [];
  for (let num of nums) {
    // O(nlogn)
    let left = 0,
      right = subSeq.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (num <= subSeq[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    if (left <= subSeq.length) {
      subSeq[left] = num; // replace
    } else {
      subSeq.push(num); // add
    }
  }
  //   console.log(subSeq);
  return subSeq.length;
}

let nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(`Length of LIS for list [${nums}] is: ${findLISUsingDp(nums)}`);

nums = [0, 1, 0, 3, 2, 3];
console.log(`Length of LIS for list [${nums}] is: ${findLISUsingDp(nums)}`);

nums = [7, 7, 7, 7, 7, 7, 7];
console.log(`Length of LIS for list [${nums}] is: ${findLISUsingDp(nums)}`);

nums = [0, 4, 1, 3, 2, 9, 7, 8];
console.log(`Length of LIS for list [${nums}] is: ${findLISUsingDp(nums)}`);

nums = [1, 3, 5, 7, 10];
console.log(
  `Length of LIS for list [${nums}] is: ${findLISUsingBinarySearch(nums)}`
);

nums = [1, 5, 2, 3, 7, 6, 1, 10];
console.log(
  `Length of LIS for list [${nums}] is: ${findLISUsingBinarySearch(nums)}`
);
