/**
 * Date: 19th Feb, 2026
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
  if (!nums || nums.length === 0) return 0;

  if (nums.length <= k) return nums.length;

  let maxCount = 0,
    countOfZero = 0,
    start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      countOfZero++;
    }
    // increment start pointer & decrement noOfZeros untill noOfZeros <= k
    while (countOfZero > k) {
      if (nums[start] === 0) {
        countOfZero--;
      }
      start++;
    }

    maxCount = Math.max(maxCount, i - start + 1);
  }

  return maxCount;
}

let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
  k = 2;
console.log(
  `Max no of consecutive 1s for [${nums}] with RF ${k} are: ${findMaxConsecutive1s(
    nums,
    k,
  )}`,
);

((nums = [0, 0, 1, 1, 1, 0, 0]), (k = 0));
console.log(
  `Max no of consecutive 1s for [${nums}] with RF ${k} are: ${findMaxConsecutive1s(
    nums,
    k,
  )}`,
);

((nums = [0, 0, 0, 0, 0, 0]), (k = 2));
console.log(
  `Max no of consecutive 1s for [${nums}] with RF ${k} are: ${findMaxConsecutive1s(
    nums,
    k,
  )}`,
);

((nums = [1, 0, 1, 0, 1, 1, 0]), (k = 3));
console.log(
  `Max no of consecutive 1s for [${nums}] with RF ${k} are: ${findMaxConsecutive1s(
    nums,
    k,
  )}`,
);

((nums = [1, 0, 1, 0, 1, 1, 0]), (k = 0));
console.log(
  `Max no of consecutive 1s for [${nums}] with RF ${k} are: ${findMaxConsecutive1s(
    nums,
    k,
  )}`,
);
