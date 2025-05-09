/**
 * Date: 9th May, 2025
 * Problem Statement: Combination Sum II
 * Given a collection of candidates (which can include duplicates) and a target, 
 * return all unique combinations in which the candidate numbers sum to the target.
 * Each number in candidates may only be used once in the combination.
 * Example 1:
 *      candidates = [10,1,2,7,6,1,5], target = 8
 *      output = [[1,1,6], [1,2,5], [1,7], [2,6]]
 */
function findSumCombination2(candidates, target) {
    if(!candidates || candidates.length === 0) return;
     
    candidates = candidates.sort((a, b) => a-b);
    const result = [];
    backtrack(candidates, target, [], 0, 0, result)
    return result.map(res => `[${res}]`);
}

function backtrack(candidates, target, path, start, sum, result) {
    if(sum === target) {
        result.push([...path]);
        return;
    }

    if(sum > target) return;

    for(let end=start; end<candidates.length; end++) {
        if(end > start && candidates[end] === candidates[end-1]) continue;

        path.push(candidates[end]);
        backtrack(candidates, target, path, end+1, sum + candidates[end], result);
        path.pop();
    }
}

let candidates = [10,1,2,7,6,1,5], target = 8;
console.log(`Output is: [${findSumCombination2(candidates, target)}]`);

candidates = [5, 2, 1, 5, 1, 6, 7], target = 7;
console.log(`Output is: [${findSumCombination2(candidates, target)}]`);
