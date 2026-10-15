/**
 * Date: 15th October, 2026
 * Problem Statement: Combination of an Array
 * Find all possible Orders from given list of nums using Backtracking
 * Example 1:
 *      nums = [1, 2, 3]
 *      Combinations = [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
 * Example 2:
 *      nums = [4, 9]
 *      Combinations = [[], [4], [9], [4, 9]]
 */

function findAllCombinations(numbers) {
  if (!numbers || numbers.length === 0) return;

  const subList = [],
    result = [];
  const start = 0;

  backtrack(numbers, start, subList, result);
  return result.map((comb) => `[${comb}]`);
}

function backtrack(numbers, start, subList, result) {
  result.push([...subList]);

  for (let i = start; i < numbers.length; i++) {
    subList.push(numbers[i]);
    backtrack(numbers, i + 1, subList, result);
    subList.pop();
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
