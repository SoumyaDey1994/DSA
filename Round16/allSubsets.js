/**
 * Date: 12th September, 2026
 * Problem Statement: Combination of an Array
 * Find all possible Orders from given list of nums using Backtracking
 * Example 1:
 *      nums = [1, 2, 3]
 *      Combinations = [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
 * Example 2:
 *      nums = [4, 9]
 *      Combinations = [[], [4], [9], [4, 9]]
 */
function findAllSubsets(numbers) {
  if (!numbers || numbers.length === 0) return [];

  const result = [],
    combinations = [];

  function findCombinations(startIndex) {
    result.push([...combinations]);

    for (let i = startIndex; i < numbers.length; i++) {
      combinations.push(numbers[i]);
      findCombinations(i + 1);
      combinations.pop();
    }
  }

  findCombinations(0);
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

nums = [10, 11, 12, 18, 19, 20];
combinations = findAllSubsets(nums);
console.log(`Combinations are: [${combinations.map((c) => `[${c}]`)}]`);
