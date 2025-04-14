/**
 * Date: 14th April, 2025
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
function getIndicesPair(nums, targetSum) {
  // invalid scenario
  if (nums.length === 0) return -1;

  const indexMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = targetSum - nums[i];
    // if complement value exists, return the indices pair
    if (indexMap.has(complement)) {
      return [indexMap.get(complement), i];
    }
    // save index i against value nums[i]
    indexMap.set(nums[i], i);
  }
  return -1;
}

let nums = [2, 7, 11, 15];
let target = 9;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${getIndicesPair(
    nums,
    target
  )}`
);

nums = [3, 2, 4];
target = 6;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${getIndicesPair(
    nums,
    target
  )}`
);

nums = [-1, 3, 8, 2, -4, 7];
target = 5;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${getIndicesPair(
    nums,
    target
  )}`
);

nums = [1, 5];
target = 6;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${getIndicesPair(
    nums,
    target
  )}`
);

nums = [1, 3, 4, 3, 7];
target = 6;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${getIndicesPair(
    nums,
    target
  )}`
);

nums = [2, 3, 6, 7];
target = 11;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${getIndicesPair(
    nums,
    target
  )}`
);

nums = [2, 6, 7, 6];
target = 12;
console.log(
  `Two-sum indices pair of [${nums}] for sum ${target} is: ${getIndicesPair(
    nums,
    target
  )}`
);
