/**
 * Date: 23rd April, 2025
 * Problem Statement: Permutation of an Array
 * Find all possible Orders from given list of nums using Backtracking
 * Example 1:
 *      nums = [1, 2, 3]
 *      permutations = [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
 * Example 2:
 *      nums = [4, 9]
 *      permutations = [[4, 9], [9, 4]]
 */
function getPermutations(nums, curr, dp, result) {
    if(curr.length === nums.length) {
        result.push([...curr]);
    }

    for(let i=0; i<nums.length; i++) {
        if(dp[i]) continue;
        // mark dp[i] as true & push nums[i] to curr
        dp[i] = true;
        curr.push(nums[i]);

        getPermutations(nums, curr, dp, result);
        // backtrack
        dp[i] = false;
        curr.pop();
    }
}

function getAllPermutations(nums) {
    if(!nums || nums.length <= 1) return nums;

    const dp = new Array(nums.length).fill(false);
    const result = [];

    getPermutations(nums, [], dp, result);
    return result;
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
