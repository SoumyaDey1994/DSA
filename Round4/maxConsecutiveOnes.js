/**
 * Date: 7th May, 2025
 * Problem Statement: Max Consecutive Ones III
 * We are given a binary array nums and an integer k. We can flip at most k 0s to 1s in the array.
 * Our task is to find the maximum number of consecutive 1s you can get in the array after performing at most k flips.
 * Example 1:
 *      Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
 *      Output: 6
 *      Explanation:
 *          - You can flip the two 0s at positions 5 and 10 to 1s.
 *          - The array becomes [1,1,1,0,0,1,1,1,1,1,1]
 *          - The longest subarray of 1s is from index 5 to 10 (6 elements).
 * Example 2:
 *      Input: nums = [0,0,1,1,1,0,0], k = 0
 *      Output: 3
 *      Explanation:
 *          - Since k = 0, we can't flip any 0.
 *          - The longest consecutive 1s already present is of length 3.
 */
function findMaxConsecutive1s(nums, k) {
  if (!nums || nums.length < k) return;
  // Sliding window approach
  let left = 0,
    countOfZeros = 0;
  let maxCount = 0;
  const length = nums.length;
  for (let right = 0; right < length; right++) {
    if (nums[right] === 0) {
      countOfZeros++;
    }
    // if 0 count > k, shrink the window
    while (countOfZeros > k) {
      if (nums[left] === 0) {
        countOfZeros--;
      }
      left++; // increment left;
    }

    maxCount = Math.max(maxCount, right - left + 1);
  }

  return maxCount;
}

let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
  k = 2;
console.log(
  `Max no of consecutive 1s for [${nums}] with RF ${k} are: ${findMaxConsecutive1s(
    nums,
    k
  )}`
);

(nums = [0, 0, 1, 1, 1, 0, 0]), (k = 0);
console.log(
  `Max no of consecutive 1s for [${nums}] with RF ${k} are: ${findMaxConsecutive1s(
    nums,
    k
  )}`
);

(nums = [0, 0, 0, 0, 0, 0]), (k = 2);
console.log(
  `Max no of consecutive 1s for [${nums}] with RF ${k} are: ${findMaxConsecutive1s(
    nums,
    k
  )}`
);

(nums = [1, 0, 1, 0, 1, 1, 0]), (k = 3);
console.log(
  `Max no of consecutive 1s for [${nums}] with RF ${k} are: ${findMaxConsecutive1s(
    nums,
    k
  )}`
);
