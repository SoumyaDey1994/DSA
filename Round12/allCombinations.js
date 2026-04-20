/**
 * Date: 20th April, 2026
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

  const result = [],
    subList = [],
    startIndex = 0;
  backtrack(nums, startIndex, subList, result);
  return result;
}

function backtrack(nums, startIndex, subList, result) {
  result.push([...subList]);

  for (let i = startIndex; i < nums.length; i++) {
    subList.push(nums[i]);

    backtrack(nums, i + 1, subList, result);

    subList.pop();
  }
}

let nums = [1, 2, 3];
let combinations = findAllCombinations(nums);
console.log(`Combinations are: [${combinations.map((c) => `[${c}]`)}]`);

nums = [4, 9];
combinations = findAllCombinations(nums);
console.log(`Combinations are: [${combinations.map((c) => `[${c}]`)}]`);
