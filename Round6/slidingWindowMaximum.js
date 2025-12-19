/**
 * Date: 7th May, 2025
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
function findSlidingWindowMaxValues(nums, k) {
  if (!nums || nums.length < k) return [];

  let window = [];
  const maxValues = [];
  for (let i = 0; i < nums.length; i++) {
    window.push(nums[i]);

    if (window.length === k) {
      maxValues.push(Math.max(...window));
      window.shift();
    }
  }

  return maxValues;
}

function findSlidingWindowMaxEfficient(nums, k) {
  if (!nums || nums.length < k) return [];

  const dequeu = [];
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove out-of-bound indices from front
    if (dequeu.length > 0 && dequeu[0] === i - k) {
      dequeu.shift();
    }

    // Remove all elements smaller than current from back
    while (dequeu.length > 0 && nums[dequeu[dequeu.length - 1]] < nums[i]) {
      dequeu.pop();
    }

    dequeu.push(i);

    if (i + 1 >= k) {
      // console.log(`Pushing max value: ${nums[dequeu[0]]}`);
      output.push(nums[dequeu[0]]);
    }
  }

  return output;
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(
  `Maximum nums of sliding window size ${k} are: [${findSlidingWindowMaxValues(
    nums,
    k
  )}]`
);

(nums = [4, 2, 12, 3, 8, 7]), (k = 2);
console.log(
  `Maximum nums of sliding window size ${k} are: [${findSlidingWindowMaxValues(
    nums,
    k
  )}]`
);

(nums = [9, 11]), (k = 2);
console.log(
  `Maximum nums of sliding window size ${k} are: [${findSlidingWindowMaxValues(
    nums,
    k
  )}]`
);

(nums = [4, 2, 1, 3, 8, 7, 9, 6, 11]), (k = 2);
console.log(
  `Maximum nums of sliding window size ${k} are: [${findSlidingWindowMaxEfficient(
    nums,
    k
  )}]`
);
