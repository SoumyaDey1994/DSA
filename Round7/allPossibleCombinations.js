/**
 * Date: 28th Jan, 2026
 * Problem Statement: Combination of an Array
 * Find all possible Orders from given list of nums using Backtracking
 * Example 1:
 *      nums = [1, 2, 3]
 *      Combinations = [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
 * Example 2:
 *      nums = [4, 9]
 *      Combinations = [[], [4], [9], [4, 9]]
 */
function getAllCombinations(nums) {
  if (!nums || nums.length <= 1) return nums;

  const result = [];
  backtrack(nums, 0, [], result);     // nums, startIndex, curr, result
  return result;
}

function backtrack(nums, startIndex, curr, result) {
  result.push([...curr]);

  for (let i = startIndex; i < nums.length; i++) {
    curr.push(nums[i]);

    backtrack(nums, startIndex + 1, curr, result);

    curr.pop();
  }
}

let nums = [1, 2, 3];
let combinations = getAllCombinations(nums);
console.log(`Combinations are: [${combinations.map((c) => `[${c}]`)}]`);

nums = [4, 9];
combinations = getAllCombinations(nums);
console.log(`Combinations are: [${combinations.map((c) => `[${c}]`)}]`);

nums = [11, 12, 15];
combinations = getAllCombinations(nums);
console.log(`Combinations are: [${combinations.map((c) => `[${c}]`)}]`);
