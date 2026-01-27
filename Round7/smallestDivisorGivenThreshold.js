/**
 * Date: 27th Jan, 2026
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
  if (!nums || nums.length === 0 || threshold === 0) return 0;

  let low = Math.min(...nums);
  let high = Math.max(...nums);
  let result = -1;

  while (low <= high) {
    const pivot = Math.floor((low + high) / 2);
    const isDividePossible = checkIfDividePossible(nums, threshold, pivot);

    if (isDividePossible) {
      result = pivot;
      high = pivot - 1;
    } else {
      low = pivot + 1;
    }
  }

  return result;
}

function checkIfDividePossible(nums, threshold, pivot) {
  let sum = 0;
  for (let num of nums) {
    sum = sum + Math.ceil(num / pivot);
  }

  return sum <= threshold;
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
