/**
 * Date: 4th June, 2025
 * Problem Statement: Combination of an Array
 * Find all possible Orders from given list of nums using Backtracking
 * Example 1:
 *      nums = [1, 2, 3]
 *      Combinations = [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
 * Example 2:
 *      nums = [4, 9]
 *      Combinations = [[], [4], [9], [4, 9]]
 */
function findCombinations(nums) {
  if (!nums || nums.length === 0) return;

  const result = [];
  backtrack(nums, [], 0, result);
  return result.map((c) => `[${c}]`);
}

function backtrack(nums, curr, start, result) {
  result.push([...curr]);

  for (let i = start; i < nums.length; i++) {
    curr.push(nums[i]);

    backtrack(nums, curr, i + 1, result);

    curr.pop();
  }
}

let nums = [1, 2, 3];
let combinations = findCombinations(nums);
console.log(`Combinations of [${nums}] are: [${combinations}]`);

nums = [4, 9];
combinations = findCombinations(nums);
console.log(`Combinations of [${nums}] are: [${combinations}]`);

nums = [3, 5, 7, 9];
combinations = findCombinations(nums);
console.log(`Combinations of [${nums}] are: [${combinations}]`);
