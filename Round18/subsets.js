/**
 * Date: 15th November, 2026
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
  if (!numbers || numbers.length === 0) return;

  const result = [],
    combinations = [];
  const startIndex = 0;

  traverse(numbers, startIndex, combinations, result);
  return result.map((comb) => `[${comb}]`);
}

function traverse(numbers, startIndex, combinations, result) {
  result.push([...combinations]);

  for (let i = startIndex; i < numbers.length; i++) {
    combinations.push(numbers[i]);
    traverse(numbers, i + 1, combinations, result);
    combinations.pop(); // backtrack
  }
}

let nums = [1, 2, 3];
let combinations = findAllSubsets(nums);
console.log(`Combinations of [${nums}] are: [${combinations}]`);

nums = [4, 9];
combinations = findAllSubsets(nums);
console.log(`Combinations of [${nums}] are: [${combinations}]`);

nums = [3, 5, 7, 9];
combinations = findAllSubsets(nums);
console.log(`Combinations of [${nums}] are: [${combinations}]`);
