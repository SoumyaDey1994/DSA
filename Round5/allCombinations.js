/**
 * Date: 31st August, 2025
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
  if (!nums || nums.length === 0) return;

  const result = [];
  backtrack(nums, 0, [], result);
  
  return result.map(r => `[${r}]`);
}

function backtrack(nums, start, curr, result) {
  result.push([...curr]);

  for (let i = start; i < nums.length; i++) {
    curr.push(nums[i]);

    backtrack(nums, start + 1, curr, result);

    curr.pop();
  }
}


let nums = [1, 2, 3];
let combinations = findAllCombinations(nums);
console.log(`Combinations of [${nums}] are: [${combinations}]`);

nums = [4, 9];
combinations = findAllCombinations(nums);
console.log(`Combinations of [${nums}] are: [${combinations}]`);

nums = [3, 5, 7, 9];
combinations = findAllCombinations(nums);
console.log(`Combinations of [${nums}] are: [${combinations}]`);
