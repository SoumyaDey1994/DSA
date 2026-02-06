/**
 * Date: 6th Feb, 2026
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
function findPeakElementIndexBruteForce(nums) {
  if (!nums || nums.length === 0) return;

  for (let index = 0; index < nums.length; index++) {
    const left = index === 0 ? -Infinity : nums[index - 1];
    const right = index === nums.length - 1 ? -Infinity : nums[index + 1];

    if (nums[index] > left && nums[index] > right) {
      return index;
    }
  }
  return -1;
}

console.log(`.....Peak element using Brute Force.....`);

let input = [1, 2, 3, 1];
console.log(
  `Peak Element in [${input}] exists at index: ${findPeakElementIndexBruteForce(input)}`,
);

input = [4, 3, 2, 1];
console.log(
  `Peak Element in [${input}] exists at index: ${findPeakElementIndexBruteForce(input)}`,
);

input = [1, 1, 1];
console.log(
  `Peak Element in [${input}] exists at index: ${findPeakElementIndexBruteForce(input)}`,
);

input = [1, 5, 4, 7, 9, 6];
console.log(
  `Peak Element in [${input}] exists at index: ${findPeakElementIndexBruteForce(input)}`,
);

function findPeakElementIndexBinarySearch(nums) {
  if (!nums || nums.length === 0) return -1;

  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1; // peak at right side
    } else {
      right = mid; // peak at left side
    }
  }

  return left;
}

console.log(`.....Peak element using Binary Search.....`);

input = [1, 2, 3, 1];
console.log(
  `Peak Element in [${input}] exists at index: ${findPeakElementIndexBinarySearch(input)}`,
);

input = [4, 3, 2, 1];
console.log(
  `Peak Element in [${input}] exists at index: ${findPeakElementIndexBinarySearch(input)}`,
);

input = [1, 1, 1];
console.log(
  `Peak Element in [${input}] exists at index: ${findPeakElementIndexBinarySearch(input)}`,
);

input = [1, 5, 4, 7, 9, 6];
console.log(
  `Peak Element in [${input}] exists at index: ${findPeakElementIndexBinarySearch(input)}`,
);

input = [2, 4, 6, 8];
console.log(
  `Peak Element in [${input}] exists at index: ${findPeakElementIndexBinarySearch(input)}`,
);