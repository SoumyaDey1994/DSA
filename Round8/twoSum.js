/**
 * Date: 18th Jan, 2026
 * Problem Statement: Two Sum
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers that add up to the target.
 * You must assume that:
 *      Each input has exactly one solution, and you cannot use the same element twice.
 *      You can return the answer in any order.
 * Example 1:
 *      nums = [2, 7, 11, 15]
 *      target = 9
 *      output = [0, 1]
 * Example 2:
 *      nums = [3, 2, 4]
 *      target = 6
 *      output = [1, 2]
 * Example 3:
 *      nums = [-1, 3, 8, 2, -4, 7]
 *      target = 5
 *      output = [1, 3]
 */

function getIndicesPair(nums, target) {
  if (!nums || nums.length < 2) return -1;

  const complementMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (complementMap.has(complement)) {
      return [complementMap.get(complement), i];
    }

    complementMap.set(num, i);
  }

  return -1;
}

let nums = [2, 7, 11, 15];
let targetSum = 9;
console.log(
  `TwoSum indices of [${nums}] for sum ${targetSum} are: ${getIndicesPair(nums, targetSum)}`,
);

nums = [3, 2, 4];
targetSum = 6;
console.log(
  `TwoSum indices of [${nums}] for sum ${targetSum} are: ${getIndicesPair(nums, targetSum)}`,
);

nums = [-1, 3, 8, 2, -4, 7];
targetSum = 5;
console.log(
  `TwoSum indices of [${nums}] for sum ${targetSum} are: ${getIndicesPair(nums, targetSum)}`,
);

nums = [1, 5];
targetSum = 6;
console.log(
  `TwoSum indices of [${nums}] for sum ${targetSum} are: ${getIndicesPair(nums, targetSum)}`,
);

nums = [1, 3, 4, 3, 7];
targetSum = 6;
console.log(
  `TwoSum indices of [${nums}] for sum ${targetSum} are: ${getIndicesPair(nums, targetSum)}`,
);

nums = [2, 3, 6, 7];
targetSum = 11;
console.log(
  `TwoSum indices of [${nums}] for sum ${targetSum} are: ${getIndicesPair(nums, targetSum)}`,
);
