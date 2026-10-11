/**
 * Date: 11th October, 2026
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

  const subList = [],
    result = [];
  const dp = new Array(numbers.length).fill(false);

  backtrack(numbers, dp, subList, result);
  return result.map((permutation) => `[${permutation}]`);
}

function backtrack(numbers, dp, subList, result) {
  if (subList.length === numbers.length) {
    result.push([...subList]);
    return;
  }

  for (let i = 0; i < numbers.length; i++) {
    if (dp[i]) continue;

    dp[i] = true;
    subList.push(numbers[i]);

    backtrack(numbers, dp, subList, result);

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
