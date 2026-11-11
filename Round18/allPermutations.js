/**
 * Date: 11th November, 2026
 * Problem Statement: Permutation of an Array
 * Find all possible Orders from given list of nums using Backtracking
 * Example 1:
 *      nums = [1, 2, 3]
 *      permutations = [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 * Example 2:
 *      nums = [4, 9]
 *      permutations = [[4, 9], [9, 4]]
 */
function findAllPermutations(numbers) {
  if (!numbers || numbers.length === 0) return;

  const result = [],
    permutations = [];
  const dp = new Array(numbers.length).fill(false);

  backtrack(numbers, dp, permutations, result);
  return result.map((perm) => `[${perm}]`);
}

function backtrack(numbers, dp, permutations, result) {
  if (permutations.length === numbers.length) {
    result.push([...permutations]);
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (dp[i]) continue;

    dp[i] = true;
    permutations.push(numbers[i]);

    backtrack(numbers, dp, permutations, result);

    dp[i] = false;
    permutations.pop(); // backtrack
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
