/**
 * Date: 8th May, 2026
 * Problem Statement: Rotate Array by k Steps
 * You are given an integer array nums of size n.
 * Rotate the array to the right by k steps, where k is a non-negative integer.
 * Rotating the array means shifting each element k positions to the right,
 * and elements that go beyond the end of the array wrap around to the beginning.
 * Example 1:
 *      nums = [1,2,3,4,5,6,7], k = 3
 *      output: [5,6,7,1,2,3,4]
 *      explanation:
 *          Step 1 → [7,1,2,3,4,5,6]
 *          Step 2 → [6,7,1,2,3,4,5]
 *          Step 3 → [5,6,7,1,2,3,4]
 * Example 2:
 *      nums = [-1,-100,3,99], k = 2
 *      output: [3,99,-1,-100]
 *      explanation:
 *          Step 1 → [99,-1,-100,3]
 *          Step 2 → [3,99,-1,-100]
 */
function findRotatedList(nums, k) {
  if (!nums || nums.length === 0) return null;
  if (k === 0) return nums;

  function reverse(start, end) {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;

      start++;
      end--;
    }
  }

  const length = nums.length;
  k = k % length;
  reverse(0, length - 1);
  reverse(0, k - 1);
  reverse(k, length - 1);

  return nums;
}

let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
console.log(
  `Post rotation ${k} times, the list becomes: [${findRotatedList(nums, k)}]`,
);

((nums = [-1, -100, 3, 99]), (k = 2));
console.log(
  `Post rotation ${k} times, the list becomes: [${findRotatedList(nums, k)}]`,
);

((nums = [3, 5, 6, 9, 0, 1]), (k = 11));
console.log(
  `Post rotation ${k} times, the list becomes: [${findRotatedList(nums, k)}]`,
);
