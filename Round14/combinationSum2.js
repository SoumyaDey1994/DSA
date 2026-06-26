/**
 * Date: 26th June, 2026
 * Problem Statement: Combination Sum II
 * Given a collection of candidates (which can include duplicates) and a target,
 * return all unique combinations in which the candidate numbers sum to the target.
 * Each number in candidates may only be used once in the combination.
 * Example 1:
 *      candidates = [10,1,2,7,6,1,5], target = 8
 *      output = [[1,1,6], [1,2,5], [1,7], [2,6]]
 */
function findSumCombinations(candidates, target) {
  if (!candidates || candidates.length === 0) return;

  const combinations = [],
    result = [];
  const start = 0,
    currSum = 0;

  candidates.sort((c1, c2) => c1 - c2); // sort candidates in ASC order
  backtrack(candidates, target, start, currSum, combinations, result);
  return result.map((sublist) => `[${sublist}]`);
}

function backtrack(candidates, target, start, currSum, combinations, result) {
  if (currSum > target) return;

  if (currSum === target) {
    result.push([...combinations]);
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    if (i > start && candidates[i] === candidates[i - 1]) continue;

    combinations.push(candidates[i]);
    backtrack(
      candidates,
      target,
      i + 1,
      currSum + candidates[i],
      combinations,
      result,
    );

    combinations.pop();
  }
}

let candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8;
console.log(`Output is: [${findSumCombinations(candidates, target)}]`);

((candidates = [5, 2, 1, 5, 1, 6, 7]), (target = 7));
console.log(`Output is: [${findSumCombinations(candidates, target)}]`);
