/**
 * Date: 20th April, 2026
 * Problem Statement: Combination Sum
 * Given an array of distinct integers candidates and a target integer,
 * return all unique combinations of candidates where the chosen numbers sum to the target.
 * You can pick the same number from candidates multiple times.
 * Example 1:
 *      candidates = [2, 3, 6, 7], target = 7
 *      output = [[2, 2, 3], [7]]
 */
function findCombinationsAgainstTargetSum(candidates, target) {
  if (!candidates || candidates.length === 0) return [];

  const result = [],
    subList = [],
    start = 0,
    currSum = 0;

  function findCombinations(start, currSum, subList) {
    if (currSum > target) return;
    if (currSum === target) {
      result.push([...subList]);
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      subList.push(candidates[i]);
      findCombinations(i, currSum + candidates[i], subList);
      subList.pop();
    }
  }

  findCombinations(start, currSum, subList);
  return result.map((r) => `[${r}]`);
}

let candidates = [2, 3, 6, 7],
  target = 7;
console.log(
  `Combinations for sum ${target} with candidates [${candidates}] are: [${findCombinationsAgainstTargetSum(
    candidates,
    target,
  )}]`,
);

((candidates = [2, 3, 6, 7, 9]), (target = 9));
console.log(
  `Combinations for sum ${target} with candidates [${candidates}] are: [${findCombinationsAgainstTargetSum(
    candidates,
    target,
  )}]`,
);
