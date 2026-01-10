/**
 * Date: 10th Jan, 2026
 * Problem Statement: Sliding Window Maximum
 * Given an integer array nums and an integer k, representing the size of the sliding window.
 * You need to return an array of the maximum values in each sliding window of size k.
 * Example 1:
 *      nums = [1,3,-1,-3,5,3,6,7], k = 3
 *      output: [3,3,5,5,6,7]
 *      Explanation:
 *          Sliding windows are:
 *              [1, 3, -1] → max = 3
 *              [3, -1, -3] → max = 3
 *              [-1, -3, 5] → max = 5
 *              [-3, 5, 3] → max = 5
 *              [5, 3, 6] → max = 6
 *              [3, 6, 7] → max = 7
 */
function getSlidingWindowMaxValues(nums, k) {
  if (!nums || nums.length < k) return [];

  const queue = [],
    output = [];

  for (let index = 0; index < nums.length; index++) {
    if (queue.length > 0 && queue[0] === index - k) {
      queue.shift();
    }

    while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[index]) {
      queue.pop();
    }

    queue.push(index);

    if (index + 1 >= k) {
      output.push(nums[queue[0]]);
    }
  }

  return output;
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(
  `Maximum nums of sliding window size ${k} are: [${getSlidingWindowMaxValues(
    nums,
    k
  )}]`
);

(nums = [4, 2, 12, 3, 8, 7]), (k = 2);
console.log(
  `Maximum nums of sliding window size ${k} are: [${getSlidingWindowMaxValues(
    nums,
    k
  )}]`
);

(nums = [9, 11]), (k = 2);
console.log(
  `Maximum nums of sliding window size ${k} are: [${getSlidingWindowMaxValues(
    nums,
    k
  )}]`
);

(nums = [4, 2, 1, 3, 8, 7, 9, 6, 11]), (k = 2);
console.log(
  `Maximum nums of sliding window size ${k} are: [${getSlidingWindowMaxValues(
    nums,
    k
  )}]`
);
