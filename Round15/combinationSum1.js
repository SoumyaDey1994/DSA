/**
 * Date: 21st July, 2026
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

  const combinations = [],
    result = [];
  const startIndex = 0,
    currSum = 0;
  backtrack(candidates, target, startIndex, currSum, combinations, result);

  return result.map((comb) => `[${comb}]`);
}

function backtrack(
  candidates,
  target,
  startIndex,
  currSum,
  combinations,
  result,
) {
  if (currSum > target) return;

  if (currSum === target) {
    result.push([...combinations]);
    return;
  }

  for (let i = startIndex; i < candidates.length; i++) {
    combinations.push(candidates[i]);
    backtrack(
      candidates,
      target,
      i,
      candidates[i] + currSum,
      combinations,
      result,
    );
    combinations.pop();
  }
}

let candidates = [2, 3, 6, 7],
  target = 7;
console.log(
  `Combinations for sum ${target} are: [${findSumCombinations(
    candidates,
    target,
  )}]`,
);

((candidates = [2, 3, 6, 7, 9]), (target = 9));
console.log(
  `Combinations for sum ${target} are: [${findSumCombinations(
    candidates,
    target,
  )}]`,
);
