/**
 * Date: 25th June, 2025
 * Problem Statement: Combination Sum
 * Given an array of distinct integers candidates and a target integer,
 * return all unique combinations of candidates where the chosen numbers sum to the target.
 * You can pick the same number from candidates multiple times.
 * Example 1:
 *      candidates = [2, 3, 6, 7], target = 7
 *      output = [[2, 2, 3], [7]]
 */
function findSumCombinations(candidates, target) {
  if (!candidates || candidates.length === 0) return;

  const result = [];
  backtrack(candidates, target, 0, 0, [], result);
  return result.map((ele) => `[${ele}]`);
}

function backtrack(candidates, target, start, currSum, paths, result) {
  if (currSum === target) {
    result.push([...paths]);
    return;
  }

  if (currSum > target) return;

  for (let i = start; i < candidates.length; i++) {
    paths.push(candidates[i]);
    backtrack(candidates, target, i, currSum + candidates[i], paths, result);
    paths.pop();
  }
}

let candidates = [2, 3, 6, 7],
  target = 7;
console.log(
  `Combinations for sum ${target} are: [${findSumCombinations(
    candidates,
    target
  )}]`
);

(candidates = [2, 3, 6, 7, 9]), (target = 9);
console.log(
  `Combinations for sum ${target} are: [${findSumCombinations(
    candidates,
    target
  )}]`
);
