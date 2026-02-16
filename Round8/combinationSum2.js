/**
 * Date: 16th Feb, 2026
 * Problem Statement: Combination Sum II
 * Given a collection of candidates (which can include duplicates) and a target,
 * return all unique combinations in which the candidate numbers sum to the target.
 * Each number in candidates may only be used once in the combination.
 * Example 1:
 *      candidates = [10,1,2,7,6,1,5], target = 8
 *      output = [[1,1,6], [1,2,5], [1,7], [2,6]]
 */
function findUniqueCombinationsForTargetSum(candidates, target) {
    if(!candidates || candidates.length === 0) return [];

    candidates.sort((num1, num2) => num1-num2);
    const result = [];
    backtrack(candidates, target, 0, 0, [], result); // candidates, target, startIndex, currSum, currComb, result
    return result.map(r => `[${r}]`);
}

function backtrack(candidates, target, startIndex, currSum, currComb, result) {
    if(currSum === target) {
        result.push([...currComb]);
        return;
    }

    if(currSum > target) return;

    for(let i=startIndex; i<candidates.length; i++) {
        if(i > 0 && candidates[i] === candidates[i-1]) continue;

        currComb.push(candidates[i]);
        backtrack(candidates, target, i+1, currSum + candidates[i], currComb, result)
        currComb.pop();
    }
}


let candidates = [10, 1, 2, 7, 6, 1, 5],
  target = 8;
console.log(
  `Unique Combinations against sum ${target} are : [${findUniqueCombinationsForTargetSum(
    candidates,
    target,
  )}]`,
);

((candidates = [5, 2, 1, 5, 1, 6, 7]), (target = 7));
console.log(
  `Unique Combinations against sum ${target} are : [${findUniqueCombinationsForTargetSum(
    candidates,
    target,
  )}]`,
);

((candidates = [2, 3, 6, 7, 9]), (target = 9));
console.log(
  `Combinations for sum ${target} with candidates [${candidates}] are: [${findUniqueCombinationsForTargetSum(
    candidates,
    target,
  )}]`,
);
