/**
 * Date: 11th Jan, 2025
 * Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1] as nums[0] + nums[1] = 2 + 7 = 9, so the output is [0, 1].
 */

function get2SumIndicesPair(input, targetSum) {
    const length = input.length;
    if(length < 2) return -1;

    const visited = new Map();
    for(let i=0; i<length; i++) {
        // if curr element present in visited map,
        // return [map-value, curr-index]
        if(visited.has(input[i])) {
            return [visited.get(input[i]), i];
        }
        let complement = targetSum - input[i];
        // set complement: index visited
        visited.set(complement, i);
        // console.log(visited);
    }
    return -1;
}

let nums = [2, 7, 11, 15];
let targetSum = 9;
// let result = getTwoSumIndices(nums, targetSum);
let result = get2SumIndicesPair(nums, targetSum);
console.log(`Indices add upto sum ${targetSum} are: ${result}`);

nums = [3, 2, 4];
targetSum = 6;
// result = getTwoSumIndices(nums, targetSum);
result = get2SumIndicesPair(nums, targetSum);
console.log(`Indices add upto sum ${targetSum} are: ${result}`);

nums = [3, 3];
targetSum = 6;
// result = getTwoSumIndices(nums, targetSum);
result = get2SumIndicesPair(nums, targetSum);
console.log(`Indices add upto sum ${targetSum} are: ${result}`);


nums = [12, 5, 8, 4, 9];
targetSum = 21;
// result = getTwoSumIndices(nums, targetSum);
result = get2SumIndicesPair(nums, targetSum);
console.log(`Indices add upto sum ${targetSum} are: ${result}`);
