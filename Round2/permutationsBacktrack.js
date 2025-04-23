/**
 * Date: 29th March, 2025
 * Problem Statement: Permutation of an Array
 * Find all possible Orders from given list of nums using Backtracking
 * Example 1:
 *      nums = [1, 2, 3]
 *      permutations = [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 * Example 2:
 *      nums = [4, 9]
 *      permutations = [[4, 9], [9, 4]]
 */
function backtrack(nums, curr, dp, result) {
  if (curr.length === nums.length) {
    result.push([...curr]); // push current permute to result array once length same
  }

  for (let i = 0; i < nums.length; i++) {
    if (dp[i]) continue; // if current element index = True, continue

    dp[i] = true; // set element index to true
    curr.push(nums[i]); // push current element to curr list

    // console.log("Before backtrack: ", curr);
    backtrack(nums, curr, dp, result); // backtrack

    dp[i] = false; // set element index to false
    curr.pop(); // remove the element from curr
    // console.log("After backtrack: ", curr);
  }
}

function getPermutations(nums) {
  if (!nums || nums.length <= 1) return nums;

  const result = [];
  const dp = new Array(nums.length).fill(false);

  backtrack(nums, [], dp, result);
  return result;
}

let nums = [1, 2, 3];
let permutations = getPermutations(nums);
console.log(`Permutations are: [${permutations.map((p) => `[${p}]`)}]`);

nums = [5];
permutations = getPermutations(nums);
console.log(`Permutations are: [${permutations.map((p) => `[${p}]`)}]`);

nums = [4, 9];
permutations = getPermutations(nums);
console.log(`Permutations are: [${permutations.map((p) => `[${p}]`)}]`);

nums = [3, 5, 7, 1, 9];
permutations = getPermutations(nums);
console.log(`Permutations are: [${permutations.map((p) => `[${p}]`)}]`);
