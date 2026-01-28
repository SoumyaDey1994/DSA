/**
 * Date: 28th Jan, 2026
 * Problem Statement: Permutation of an Array
 * Find all possible Orders from given list of nums using Backtracking
 * Example 1:
 *      nums = [1, 2, 3]
 *      permutations = [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 * Example 2:
 *      nums = [4, 9]
 *      permutations = [[4, 9], [9, 4]]
 */
function getAllPermutations(nums) {
  if (!nums || nums.length <= 1) return nums;

  const result = [];
  const dp = new Array(nums.length).fill(false);

  backtrack(nums, [], dp, result); // nums, curr, dp, result
  return result;
}

function backtrack(nums, curr, dp, result) {
  if (curr.length === nums.length) {
    result.push([...curr]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (dp[i]) continue;

    dp[i] = true;
    curr.push(nums[i]);

    backtrack(nums, curr, dp, result);

    dp[i] = false;
    curr.pop();
  }
}

let nums = [1, 2, 3];
let permutations = getAllPermutations(nums);
console.log(`Permutations are: [${permutations.map((p) => `[${p}]`)}]`);

nums = [5];
permutations = getAllPermutations(nums);
console.log(`Permutations are: [${permutations.map((p) => `[${p}]`)}]`);

nums = [4, 9];
permutations = getAllPermutations(nums);
console.log(`Permutations are: [${permutations.map((p) => `[${p}]`)}]`);

nums = [3, 5, 7, 1, 9];
permutations = getAllPermutations(nums);
console.log(`Permutations are: [${permutations.map((p) => `[${p}]`)}]`);
