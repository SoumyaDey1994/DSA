/**
 * Date: 3rd April, 2026
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
  function getCombinations(start, subList, result) {
    result.push([...subList]);

    for (let i = start; i < nums.length; i++) {
      subList.push(nums[i]);
      getCombinations(i  + 1, subList, result);
      subList.pop();
    }
  }

  getCombinations(0, [], result);
  return result.map(comb => `[${comb}]`);
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
