/**
 * Date: 13th March, 2026
 * Problem Statement: Find Peak Element Index
 * A peak element is an element in an array that is greater than its immediate neighbours.
 * Given an array nums, find any one peak element’s index.
 * 👉 Conditions:
 *      nums[i] > nums[i-1]
 *      nums[i] > nums[i+1]
 * Assume out-of-bound neighbours = −∞
 * Array may contain multiple peaks → return any one
 * Example:
 *      nums = [1, 2, 3, 1]
 *      output: 3
 *      explanation:
 *          3 is a peak because 3 > 2 and 3 > 1
 *          Output → index 2
 */
function findPeakElementLiner(nums) {
  if (!nums || nums.length === 0) return null;

  for (let i = 0; i < nums.length; i++) {
    let left = i === 0 ? -Infinity : nums[i - 1];
    let right = i === nums.length - 1 ? Infinity : nums[i + 1];

    if (nums[i] > left && nums[i] > right) {
      return nums[i];
    }
  }

  return null;
}

function findPeakElementIndexBinarySearch(nums) {
  if (!nums || nums.length === 0) return;

  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const pivot = Math.floor((left + right) / 2);
    if (nums[pivot] < nums[pivot + 1]) {
      left = pivot + 1; // peak at right side
    } else {
      right = pivot; // peak at pivot or left
    }
  }

  return nums[left];
}

console.log(`.....Peak element using Brute Force.....`);

let input = [1, 2, 3, 1];
console.log(
  `Peak Element in [${input}] exists: ${findPeakElementLiner(input)}`,
);

input = [4, 3, 2, 1];
console.log(
  `Peak Element in [${input}] exists: ${findPeakElementLiner(input)}`,
);

input = [1, 1, 1];
console.log(
  `Peak Element in [${input}] exists: ${findPeakElementLiner(input)}`,
);

input = [1, 5, 4, 7, 9, 6];
console.log(
  `Peak Element in [${input}] exists: ${findPeakElementLiner(input)}`,
);

console.log(`.....Peak element using Binary Search.....`);

input = [1, 2, 3, 1];
console.log(
  `Peak Element in [${input}] exists: ${findPeakElementIndexBinarySearch(input)}`,
);

input = [4, 3, 2, 1];
console.log(
  `Peak Element in [${input}] exists: ${findPeakElementIndexBinarySearch(input)}`,
);

input = [1, 1, 1];
console.log(
  `Peak Element in [${input}] exists: ${findPeakElementIndexBinarySearch(input)}`,
);

input = [1, 5, 4, 7, 9, 6];
console.log(
  `Peak Element in [${input}] exists: ${findPeakElementIndexBinarySearch(input)}`,
);

input = [2, 4, 6, 8];
console.log(
  `Peak Element in [${input}] exists: ${findPeakElementIndexBinarySearch(input)}`,
);
