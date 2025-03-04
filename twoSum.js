/**
 * Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1] as nums[0] + nums[1] = 2 + 7 = 9, so the output is [0, 1].
 */

function getTwoSumIndices(nums, sum) { // O(n^2) in worst-case
    for(let index=0; index<nums.length; index++) {
        const currElement = nums[index];
        const complement = sum - currElement;
        const complementIndex = nums.lastIndexOf(complement);
        if(complementIndex > -1 && complementIndex !== index){
            return [index, complementIndex]
        }
    }
    return -1;
}

function getTwoSumIndicesSol2(nums, sum) {
    const map = new Map();
    const length = nums.length;
    for(let index=0; index<length; index++) {
        const currElement = nums[index];
        const complement = sum - currElement;

        if(map.has(complement)){
            return [map.get(complement), index];
        }
        map.set(currElement, index);
    }
    return -1;
}


let nums = [2, 7, 11, 15];
let targetSum = 9;
// let result = getTwoSumIndices(nums, targetSum);
let result = getTwoSumIndicesSol2(nums, targetSum);
console.log(`Indices add upto sum ${targetSum} are: ${result}`);

nums = [3, 2, 4];
targetSum = 6;
// result = getTwoSumIndices(nums, targetSum);
result = getTwoSumIndicesSol2(nums, targetSum);
console.log(`Indices add upto sum ${targetSum} are: ${result}`);

nums = [3, 3];
targetSum = 6;
// result = getTwoSumIndices(nums, targetSum);
result = getTwoSumIndicesSol2(nums, targetSum);
console.log(`Indices add upto sum ${targetSum} are: ${result}`);
