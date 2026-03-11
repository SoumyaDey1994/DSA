/**
 * Date: 11th March, 2026
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
function rotateList(nums, k) {
  if (!nums || nums.length === 0) return;
  // TC: O(n), SC: O(n)
  const size = nums.length,
    result = new Array(size).fill(null);

  for (let i = 0; i < size; i++) {
    const newIndex = (i + k) % size;
    result[newIndex] = nums[i];
  }

  return result;
}

function rotateListInPlace(nums, k) {
  if (!nums || nums.length === 0) return;

  const size = nums.length;
  k = k % size;

  function reverse(arr, start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;

      start++;
      end--;
    }
  }

  reverse(nums, 0, size - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, size - 1);

  return nums;
}

let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
console.log(
  `Post rotation ${k} times, the list becomes: [${rotateList(nums, k)}]`,
);

((nums = [-1, -100, 3, 99]), (k = 2));
console.log(
  `Post rotation ${k} times, the list becomes: [${rotateList(nums, k)}]`,
);

((nums = [3, 5, 6, 8, 9, 0, 1]), (k = 2));
console.log(
  `Post rotation ${k} times, the list becomes: [${rotateListInPlace(nums, k)}]`,
);

((nums = [3, 5, 6, 9, 0, 1]), (k = 11));
console.log(
  `Post rotation ${k} times, the list becomes: [${rotateListInPlace(nums, k)}]`,
);
