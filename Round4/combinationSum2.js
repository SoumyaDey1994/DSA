/**
 * Date: 25th June, 2025
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

  // sort the candidates in ASC order
  candidates = candidates.sort((c1, c2) => c1 - c2);
  const result = [];
  backtrack(candidates, target, 0, 0, [], result);
  return result.map((ele) => `[${ele}]`);
}

function backtrack(candidates, target, start, currSum, path, result) {
  if (currSum > target) return;

  if (currSum === target) {
    result.push([...path]);
    return;
  }

  for (let i = start; i < candidates.length; i++) {
    if (i > start && candidates[i] === candidates[i - 1]) continue;

    path.push(candidates[i]);
    backtrack(candidates, target, i + 1, currSum + candidates[i], path, result);
    path.pop();
  }
}

let candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8;
console.log(`Output is: [${findSumCombinations(candidates, target)}]`);

(candidates = [5, 2, 1, 5, 1, 6, 7]), (target = 7);
console.log(`Output is: [${findSumCombinations(candidates, target)}]`);
