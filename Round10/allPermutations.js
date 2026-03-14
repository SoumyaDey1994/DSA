/**
 * Date: 14th March, 2026
 * Problem Statement: Permutation of an Array
 * Find all possible Orders from given list of nums using Backtracking
 * Example 1:
 *      nums = [1, 2, 3]
 *      permutations = [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 * Example 2:
 *      nums = [4, 9]
 *      permutations = [[4, 9], [9, 4]]
 */
function findAllPermutations(nums) {
  if (!nums || nums.length === 0) return;

  const dp = new Array(nums.length).fill(false);
  const result = [];
  backtrack(nums, dp, [], result);
  return result.map(r => `[${r}]`);
}

function backtrack(nums, dp, subList, result) {
  if (subList.length === nums.length) {
    result.push([...subList]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (dp[i]) continue;

    dp[i] = true;
    subList.push(nums[i]);

    backtrack(nums, dp, subList, result);

    dp[i] = false;
    subList.pop();
  }
}


let nums = [1, 2, 3];
let permutations = findAllPermutations(nums);
console.log(`Permutations of [${nums}] are: [${permutations}]`);

nums = [4, 9];
permutations = findAllPermutations(nums);
console.log(`Permutations of [${nums}] are: [${permutations}]`);

nums = [5, 7, 9, 1];
permutations = findAllPermutations(nums);
console.log(`Permutations of [${nums}] are: [${permutations}]`);
