/**
 * Date: 23rd April, 2025
 * Problem Statement: Combination of an Array
 * Find all possible Orders from given list of nums using Backtracking
 * Example 1:
 *      nums = [1, 2, 3]
 *      Combinations = [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
 * Example 2:
 *      nums = [4, 9]
 *      Combinations = [[], [4], [9], [4, 9]]
 */

function backtrack(nums, start, combinations, result) {
  result.push([...combinations]);

  for (let i = start; i < nums.length; i++) {
    combinations.push(nums[i]);
    backtrack(nums, i + 1, combinations, result);
    combinations.pop();
  }
}

function getAllCombinations(nums) {
  if (!nums || nums.length <= 1) return nums;

  const result = [];
  backtrack(nums, 0, [], result);
  return result;
}

let nums = [1, 2, 3];
let output = getAllCombinations(nums);

console.log(
  `Combinations from [${nums}] are: [${output.map((o) => `[${o}]`)}]`
);

nums = [4, 9];
output = getAllCombinations(nums);
console.log(`Combinations are: [${output.map((o) => `[${o}]`)}]`);
