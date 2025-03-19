/**
 * Date: 19th March, 2025
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
function getLISLength(nums) {
  // O(n^2)
  const length = nums.length;
  if (length <= 1) return length;
  const dp = new Array(length).fill(1);

  for (let i = 1; i < length; i++) {
    // O(n)
    for (let j = 0; j < i; j++) {
      // O(n)
      if (nums[i] > nums[j]) {
        // console.log("Num I & J: ", nums[i], nums[j]);
        // console.log("DP I & J: ", dp[i], dp[j]);
        dp[i] = Math.max(dp[i], 1 + dp[j]);
        // console.log("DP I Becomes: ", dp[i]);
      }
    }
  }
  return dp[length - 1];
}

function getLISLengthBS(nums) {
  // O(nlogn)
  if (nums.length <= 1) return nums.length;

  let subSeq = [];
  for (let num of nums) {
    // O(n)
    let left = 0,
      right = subSeq.length - 1;
    while (left <= right) {
      // O(logn)
      const mid = Math.floor((left + right) / 2);
      if (num <= subSeq[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // console.log("left: ", left, "SubSeq length: ", subSeq.length);
    if (left <= subSeq.length) {
      subSeq[left] = num; // replace
    } else {
      subSeq.push(num); // append
    }
  }
  // console.log(subSeq);
  return subSeq.length;
}

let nums = [0, 1, 0, 3, 2, 3];
let lisLength = getLISLength(nums);
console.log(`LIS length of [${nums}] is: ${lisLength}`);

nums = [10, 9, 2, 5, 3, 7, 101, 18];
lisLength = getLISLengthBS(nums);
console.log(`LIS length of [${nums}] is: ${lisLength}`);

nums = [7, 7, 7, 7, 7, 7, 7];
lisLength = getLISLengthBS(nums);
console.log(`LIS length of [${nums}] is: ${lisLength}`);

nums = [5, 7, 8, 9, 11, 10, 12];
lisLength = getLISLengthBS(nums);
console.log(`LIS length of [${nums}] is: ${lisLength}`);

nums = [1, 2, 0, 12, 14, 11, 15];
lisLength = getLISLength(nums);
console.log(`LIS length of [${nums}] is: ${lisLength}`);
