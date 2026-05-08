/**
 * Date: 8th May, 2026
 * Problem Statement: Combination Sum
 * Given an array of distinct integers candidates and a target integer,
 * return all unique combinations of candidates where the chosen numbers sum to the target.
 * You can pick the same number from candidates multiple times.
 * Example 1:
 *      candidates = [2, 3, 6, 7], target = 7
 *      output = [[2, 2, 3], [7]]
 */
function findSumCombinations(candidates, target) {
  if (!candidates || candidates.length === 0) return [];

  let start = 0,
    currSum = 0;
  let comb = [],
    result = [];
  backtrack(candidates, target, start, currSum, comb, result);
  return result.map(r => `[${r}]`);
}

function backtrack(candidates, target, start, currSum, comb, result) {
  if (currSum === target) {
    result.push([...comb]);
    return;
  }

  if (currSum > target) {
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    comb.push(candidates[i]);
    backtrack(candidates, target, i, currSum + candidates[i], comb, result);
    comb.pop();
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
