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
function findSlidingWindowMax(nums, k) {
  const indexQueue = [];
  const maxNums = [];

  for (let i = 0; i < nums.length; i++) {
    // Remove out-of-bound indices from front
    if (indexQueue.length > 0 && indexQueue[0] === i - k) {
      let index = indexQueue.shift();

    }
    // Remove all elements smaller than current from back
    while (
      indexQueue.length > 0 &&
      nums[indexQueue[indexQueue.length - 1]] < nums[i]
    ) {
      let index = indexQueue.pop();
    }

    // Add current index
    indexQueue.push(i);

    // Start adding to result once we have full window
    if (i+1 >= k) {
      maxNums.push(nums[indexQueue[0]]);
    }
  }
  return maxNums;
}

let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(
  `Maximum nums of sliding window size ${k} are: [${findSlidingWindowMax(
    nums,
    k
  )}]`
);

nums = [4, 2, 12, 3, 8, 7],
  k = 2;
console.log(
  `Maximum nums of sliding window size ${k} are: [${findSlidingWindowMax(
    nums,
    k
  )}]`
);

nums = [9, 11],
  k = 2;
console.log(
  `Maximum nums of sliding window size ${k} are: [${findSlidingWindowMax(
    nums,
    k
  )}]`
);
