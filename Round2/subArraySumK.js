/**
 * Date: 10th March, 2025
 * Problem Statement: Subarray Sum Equals K
 * Given an array of integers nums and an integer k,
 * your task is to find the total number of contiguous subarrays whose sum equals k.
 * Example 1:
 *      nums = [1, 1, 1], k = 2
 *      output = 2
 *      Explanation:
 *          There are two subarrays that sum to k = 2:
 *          [1,1] (starting at index 0)
 *          [1,1] (starting at index 1)
 * Example 2:
 *      nums = [3, 4, 7, 2, -3, 1, 4, 2], k = 7
 *      output = 4
 *      Explanation:
 *          There are 4 subarrays that sum to k = 4:
 *          [7] (index 2)
 *          [3,4] (index 0 to 1)
 *          [4,7,-3,-1] (index 1 to 4)
 *          [1,4,2] (index 5 to 7)
 */

function getNoOfSubArrays(nums, k) { // O(n^2)
    const length = nums.length;
    let count = 0;
    for(let i=0; i<length; i++) {
        let sum = 0;
        for(let j=i; j<length; j++) {
            sum = sum + nums[j];
            if(sum === k){
                count++;
            }
        }
    }
    return count;
}

function getNoOfSubArraysEfficient(nums, k) {
    let prefixSum = 0, count=0;
    const prefixSumMap = new Map();

    prefixSumMap.set(0, 1);
    for(let num of nums) {
        prefixSum = prefixSum + num;
        const complement = prefixSum - k;
        // Check for complement in map
        if(prefixSumMap.has(complement)) {
            count = count + prefixSumMap.get(complement);
        }
        prefixSumMap.set(prefixSum, (prefixSumMap.get(prefixSum)|| 0) + 1);
    }
    
    return count;
}

let nums = [1, 1, 1], k = 2;
let output = getNoOfSubArraysEfficient(nums, k);
console.log(`No of subarrays with sum ${k} is: ${output}`);

nums = [3, 4, 7, 2, -3, 1, 4, 2], k = 7;
output = getNoOfSubArraysEfficient(nums, k);
console.log(`No of subarrays with sum ${k} is: ${output}`);