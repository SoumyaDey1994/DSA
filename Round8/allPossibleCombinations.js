/**
 * Date: 20th Feb, 2026
 * Problem Statement: Combination of an Array
 * Find all possible Orders from given list of nums using Backtracking
 * Example 1:
 *      nums = [1, 2, 3]
 *      Combinations = [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
 * Example 2:
 *      nums = [4, 9]
 *      Combinations = [[], [4], [9], [4, 9]]
 */
function findAllCombinations(nums) {
  if (!nums || nums.length === 0) return [];

  const result = [];
  backtrack(nums, 0, [], result);
  return result;
}

function backtrack(nums, startIndex, curr, result) {
  result.push([...curr]);

  for (let i = startIndex; i < nums.length; i++) {
    curr.push(nums[i]);
    backtrack(nums, i + 1, curr, result);
    curr.pop();
  }
}

let nums = [1, 2, 3];
let combinations = findAllCombinations(nums);
console.log(`Combinations are: [${combinations.map((c) => `[${c}]`)}]`);

nums = [4, 9];
combinations = findAllCombinations(nums);
console.log(`Combinations are: [${combinations.map((c) => `[${c}]`)}]`);

nums = [11, 12, 15];
combinations = findAllCombinations(nums);
console.log(`Combinations are: [${combinations.map((c) => `[${c}]`)}]`);
