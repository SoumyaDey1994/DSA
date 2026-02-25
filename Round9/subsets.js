/**
 * Date: 25th Feb, 2026
 * Problem Statement: Subsets or Combination of an Array
 * Find all possible Orders from given list of nums using Backtracking
 * Example 1:
 *      nums = [1, 2, 3]
 *      Combinations = [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
 * Example 2:
 *      nums = [4, 9]
 *      Combinations = [[], [4], [9], [4, 9]]
 */
function findAllSubsets(nums) {
  if (!nums || nums.length === 0) return [];

  const result = [];

  function subsets(start, subList) {
    result.push([...subList]);

    for (let i = start; i < nums.length; i++) {
      subList.push(nums[i]);
      subsets(i + 1, subList);
      subList.pop();
    }
  }

  subsets(0, []);
  return result;
}

let nums = [1, 2, 3];
let combinations = findAllSubsets(nums);
console.log(`Combinations are: [${combinations.map((c) => `[${c}]`)}]`);

nums = [4, 9];
combinations = findAllSubsets(nums);
console.log(`Combinations are: [${combinations.map((c) => `[${c}]`)}]`);

nums = [11, 12, 15];
combinations = findAllSubsets(nums);
console.log(`Combinations are: [${combinations.map((c) => `[${c}]`)}]`);
