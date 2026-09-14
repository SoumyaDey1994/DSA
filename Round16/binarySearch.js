/**
 * Date: 14th September, 2026
 * 📌  Problem Statement - Binary Search (Classic)
 * You are given a sorted array of integers nums (sorted in ascending order) and a target value.
 * You must determine:
 *      If the target exists in the array.
 *      If it exists, return its index.
 *      If it does not exist, return -1.
 * Example 1:
 *      nums = [-3, -1, 0, 3, 5, 9, 12], target = 9
 *      Output: 5
 *      Expl: Because nums[5] = 9
 * Example 2:
 *      nums = [2, 5, 9, 14, 20], target = 7
 *      Output: -1
 *      Expl: Because 7 is not present in the array.
 */
function findIndex(numbers, target) {
  if (!numbers || numbers.length === 0) return;

  let low = 0,
    high = numbers.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (numbers[mid] === target) {
      return mid;
    } else if (numbers[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}


let nums = [-3, -1, 0, 3, 5, 9, 12],
  target = 9;
console.log(
  `Index of element ${target} in [${nums}] is: ${findIndex(nums, target)}`,
);

((nums = [2, 5, 9, 14, 20]), (target = 7));
console.log(
  `Index of element ${target} in [${nums}] is: ${findIndex(nums, target)}`,
);

((nums = [1, 4, 7, 9, 15, 21]), (target = 15));
console.log(
  `Index of element ${target} in [${nums}] is: ${findIndex(nums, target)}`,
);

((nums = [-10, -2, 0, 4, 6, 8, 12]), (target = -10));
console.log(
  `Index of element ${target} in [${nums}] is: ${findIndex(nums, target)}`,
);

((nums = [2, 5, 8, 12, 16, 23, 38]), (target = 1));
console.log(
  `Index of element ${target} in [${nums}] is: ${findIndex(nums, target)}`,
);

