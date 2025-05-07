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
function findMaxConsecutiveOnesCount(nums, k) {
  if (!nums || nums.length === 0) return;

  let left = 0;
  let maxLength = 0,
    countOfZeros = 0;
  for (let right = 0; right < nums.length; right++) {
    // increment count of 0 as found
    if (nums[right] === 0) {
      countOfZeros++;
    }
    // when count of 0s > k
    // shrink the window & decrement count of zero as found in left
    while (countOfZeros > k) {
      if (nums[left] === 0) {
        countOfZeros--;
      }
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0],
  k = 2;
console.log(
  `No of consecutive 1s post flipping ${k} 0s is: ${findMaxConsecutiveOnesCount(
    nums,
    k
  )}`
);

(nums = [0, 0, 1, 1, 1, 0, 0]), (k = 0);
console.log(
  `No of consecutive 1s post flipping ${k} 0s is: ${findMaxConsecutiveOnesCount(
    nums,
    k
  )}`
);

(nums = [0, 0, 1, 1, 1, 0, 1]), (k = 1);
console.log(
  `No of consecutive 1s post flipping ${k} 0s is: ${findMaxConsecutiveOnesCount(
    nums,
    k
  )}`
);

(nums = [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1]), (k = 3);
console.log(
  `No of consecutive 1s post flipping ${k} 0s is: ${findMaxConsecutiveOnesCount(
    nums,
    k
  )}`
);

(nums = [0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1]), (k = 1);
console.log(
  `No of consecutive 1s post flipping ${k} 0s is: ${findMaxConsecutiveOnesCount(
    nums,
    k
  )}`
);
