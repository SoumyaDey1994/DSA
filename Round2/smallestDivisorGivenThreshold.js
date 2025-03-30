/**
 * Date: 30th March, 2025
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
function canDivide(nums, divisor, threshold) {
  let sum = 0;
  for (let num of nums) {
    sum = sum + Math.ceil(num / divisor);
  }

  return sum <= threshold;
}

function findSmallestDivsior(nums, threshold) {
  // if no number present, return the threshold
  if (nums.length < 1) return null;

  // start with low as 1 num & high as Max(nums)
  let low = 1;
  let high = Math.max(...nums);
  // start with result as threshold as sum needs tobe <= threshold
  let result = threshold;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (canDivide(nums, mid, threshold)) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
}

let nums = [1, 2, 5, 9],
  threshold = 6;
console.log(
  `Smallest possible divisor is : ${findSmallestDivsior(nums, threshold)}`
);

(nums = [44, 22, 33, 11, 1]), (threshold = 5);
console.log(
  `Smallest possible divisor is : ${findSmallestDivsior(nums, threshold)}`
);

(nums = [7]), (threshold = 2);
console.log(
  `Smallest possible divisor is : ${findSmallestDivsior(nums, threshold)}`
);

(nums = [4, 2, 8, 6, 5, 9]), (threshold = 7);
console.log(
  `Smallest possible divisor is : ${findSmallestDivsior(nums, threshold)}`
);
