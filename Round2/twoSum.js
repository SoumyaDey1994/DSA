/**
 * Date: 3rd March, 2025
 * Problem Statement: Two Sum
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers that add up to the target.
 * You must assume that:
 *      Each input has exactly one solution, and you cannot use the same element twice.
 *      You can return the answer in any order.
 * Example 1:
 *      nums = [2, 7, 11, 15]
 *      target = 9
 *      output = [0, 1]
 * Example 2:
 *      nums = [3, 2, 4]
 *      target = 6
 *      output = [1, 2]
 * Example 3:
 *      nums = [-1, 3, 8, 2, -4, 7]
 *      target = 5
 *      output = [1, 3]
 */

function get2SumIndices(nums, target) {
    const length = nums.length;
    if(length <= 1) return -1;
    const complement = new Map();
    for(let index=0; index<length; index++) {
        // check for complement in map
        const rem = target - nums[index];
        if(complement.has(rem)) {
            return [complement.get(rem), index];
        }
        complement.set(nums[index], index);
    }
    return -1;
}

let nums = [2, 7, 11, 15];
let targetSum = 9;
console.log(`TwoSum indices of [${nums}] for sum ${targetSum} are: ${get2SumIndices(nums, targetSum)}`);

nums = [3, 2, 4];
targetSum = 6;
console.log(`TwoSum indices of [${nums}] for sum ${targetSum} are: ${get2SumIndices(nums, targetSum)}`);

nums = [-1, 3, 8, 2, -4, 7];
targetSum = 5;
console.log(`TwoSum indices of [${nums}] for sum ${targetSum} are: ${get2SumIndices(nums, targetSum)}`);

nums = [1, 5];
targetSum = 6;
console.log(`TwoSum indices of [${nums}] for sum ${targetSum} are: ${get2SumIndices(nums, targetSum)}`);

nums = [1, 3, 4, 3, 7];
targetSum = 6;
console.log(`TwoSum indices of [${nums}] for sum ${targetSum} are: ${get2SumIndices(nums, targetSum)}`);

nums = [2, 3, 6, 7];
targetSum = 11;
console.log(`TwoSum indices of [${nums}] for sum ${targetSum} are: ${get2SumIndices(nums, targetSum)}`);