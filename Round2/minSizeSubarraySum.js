/**
 * Date: 7th April, 2025
 * Problem Statement: Minimum Size Subarray Sum
 * Given an array of positive integers and a target sum s,
 * find the length of the smallest contiguous subarray whose sum is greater than or equal to s.
 * If no such subarray exists, return 0.
 * Example 1:
 *      Input: s = 7, nums = [2,3,1,2,4,3]
 *      Output: 2
 *      Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 */
function findMinSubArrayLength(nums, sum) { // 0(N): N is num of elements
  if (!nums || nums.length === 0 || sum === 0) return 0;

  let windowSum = 0,
    start = 0;
  let minLength = Infinity;

  for (let end = 0; end < nums.length; end++) {
    windowSum = windowSum + nums[end];
    // Keep removing elements from sum
    // untill windowSum < sum
    while (windowSum >= sum) {
      minLength = Math.min(minLength, end - start + 1);
      windowSum = windowSum - nums[start];
      start++;
    }
  }
  return minLength === Infinity ? 0 : minLength;
}

let nums = [2, 3, 1, 2, 4, 3],
  sum = 7;
console.log(
  `Min subarray length for sum ${sum} is: ${findMinSubArrayLength(nums, sum)}`
);

(nums = [2, 2, 1, 2, 3, 1]), (sum = 6);
console.log(
  `Min subarray length for sum ${sum} is: ${findMinSubArrayLength(nums, sum)}`
);

(nums = [1, 2, 3, 4, 5]), (sum = 15);
console.log(
  `Min subarray length for sum ${sum} is: ${findMinSubArrayLength(nums, sum)}`
);

(nums = [1, 2, 3, 4, 5]), (sum = 100);
console.log(
  `Min subarray length for sum ${sum} is: ${findMinSubArrayLength(nums, sum)}`
);

(nums = [1, 1, 1, 1, 1, 1]), (sum = 11);
console.log(
  `Min subarray length for sum ${sum} is: ${findMinSubArrayLength(nums, sum)}`
);

(nums = [1, 2, 3, 4, 5]), (sum = 11);
console.log(
  `Min subarray length for sum ${sum} is: ${findMinSubArrayLength(nums, sum)}`
);
