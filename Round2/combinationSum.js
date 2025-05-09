/**
 * Date: 9th May, 2025
 * Problem Statement: Combination Sum
 * Given an array of distinct integers candidates and a target integer,
 * return all unique combinations of candidates where the chosen numbers sum to the target.
 * You can pick the same number from candidates multiple times.
 * Example 1:
 *      candidates = [2, 3, 6, 7], target = 7
 *      output = [[2, 2, 3], [7]]
 */

function getSumCombinations(candidates, target) {
  if (!candidates || candidates.length === 0) return;
  const result = [];
  backtrack(candidates, target, 0, [], 0, result);
  return result.map(res => `[${res}]`);
}

function backtrack(candidates, target, start, path, sum, result) {
  if (sum === target) {
    result.push([...path]);
    return;
  }

  if (sum > target) return;

  for (let end = start; end < candidates.length; end++) {
    path.push(candidates[end]); // choose candidate number
    backtrack(candidates, target, end, path, sum + candidates[end], result);
    path.pop(); // backtrack
  }
}

let candidates = [2, 3, 6, 7],
  target = 7;
let output = getSumCombinations(candidates, target);
console.log(`Output is: [${output}]`);


candidates = [2, 3, 6, 7, 9],
  target = 9;
output = getSumCombinations(candidates, target);
console.log(`Output is: [${output}]`);
