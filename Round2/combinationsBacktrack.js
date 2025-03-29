/**
 * Date: 29th March, 2025
 * Problem Statement: Combination of an Array
 * Find all possible Orders from given list of nums using Backtracking
 * Example 1:
 *      nums = [1, 2, 3]
 *      Combinations = [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
 * Example 2:
 *      nums = [4, 9]
 *      Combinations = [[], [4], [9], [4, 9]]
 */
function backtrack(nums, start, path, result) {
  // console.log(path);
  result.push([...path]);

  for (let i = start; i < nums.length; i++) {
    path.push(nums[i]);
    backtrack(nums, i + 1, path, result);
    path.pop();
  }
}
function getCombinations(nums) {
  if (!nums || nums.length <= 1) return nums;

  const result = [];
  backtrack(nums, 0, [], result);
  return result;
}

let nums = [1, 2, 3];
let combinations = getCombinations(nums);
console.log(`Combinations are: [${combinations.map((c) => `[${c}]`)}]`);

nums = [4, 9];
combinations = getCombinations(nums);
console.log(`Combinations are: [${combinations.map((c) => `[${c}]`)}]`);
