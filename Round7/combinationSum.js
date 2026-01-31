/**
 * Date: 31st Dec, 2026
 * Problem Statement: Combination Sum
 * Given an array of distinct integers candidates and a target integer,
 * return all unique combinations of candidates where the chosen numbers sum to the target.
 * You can pick the same number from candidates multiple times.
 * Example 1:
 *      candidates = [2, 3, 6, 7], target = 7
 *      output = [[2, 2, 3], [7]]
 */
function findCombinationsForTargetSum(candidates, target) {
  if (!candidates || candidates.length === 0) return [];

  const result = [];
  backtrack(candidates, target, 0, 0, [], result); // candidates, target, startIndex, currSum, subList, result
  return result.map((res) => `[${res}]`);
}

function backtrack(candidates, target, startIndex, currSum, subList, result) {
  if (currSum > target) return;

  if (currSum === target) {
    result.push([...subList]);
    return;
  }

  for (let i = startIndex; i < candidates.length; i++) {
    subList.push(candidates[i]);
    backtrack(candidates, target, i, candidates[i] + currSum, subList, result);
    subList.pop();
  }
}

let candidates = [2, 3, 6, 7],
  target = 7;
console.log(
  `Combinations for sum ${target} with candidates [${candidates}] are: [${findCombinationsForTargetSum(
    candidates,
    target,
  )}]`,
);

((candidates = [2, 3, 6, 7, 9]), (target = 9));
console.log(
  `Combinations for sum ${target} with candidates [${candidates}] are: [${findCombinationsForTargetSum(
    candidates,
    target,
  )}]`,
);
