/**
 * Date: 27th Feb, 2026
 * Problem Statement: Find the Smallest Divisor Given a Threshold
 * Given an array nums and an integer threshold,
 * find the smallest divisor d such that the sum of the division result sum(ceil(nums[i] / d)) is ≤ threshold.
 * The division ceil(nums[i] / d) means that each element in nums is divided by d and then rounded up.
 * Your task is to find the smallest possible divisor.
 * Example 1:
 *      nums = [1, 2, 5, 9]; threshold = 6;
 *      output: 5
 * Example 1:
 *      nums = [44, 22, 33, 11, 1]; threshold = 5;
 *      output: 44
 */
function findSmallestDivsior(nums, threshold) {
  if (!nums || nums === 0 || threshold === 0) return 0;

  let min = 1,
    max = Math.max(...nums);
  let result = -1;

  while (min <= max) {
    const pivot = Math.floor((min + max) / 2);
    const isPossible = isDividePossible(nums, threshold, pivot);
    if (isPossible) {
      result = pivot;
      max = pivot - 1;
    } else {
      min = pivot + 1;
    }
  }

  return result;
}

function isDividePossible(nums, threshold, pivot) {
  const result = nums.reduce((acc, curr) => acc + Math.ceil(curr / pivot), 0);
  return result <= threshold;
}

let nums = [1, 2, 5, 9],
  threshold = 6;
console.log(
  `Smallest possible divisor is : ${findSmallestDivsior(nums, threshold)}`,
);

((nums = [44, 22, 33, 11, 1]), (threshold = 5));
console.log(
  `Smallest possible divisor is : ${findSmallestDivsior(nums, threshold)}`,
);

((nums = [7]), (threshold = 2));
console.log(
  `Smallest possible divisor is : ${findSmallestDivsior(nums, threshold)}`,
);

((nums = [4, 2, 8, 6, 5, 9]), (threshold = 7));
console.log(
  `Smallest possible divisor is : ${findSmallestDivsior(nums, threshold)}`,
);
