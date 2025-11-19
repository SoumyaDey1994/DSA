/**
 * Date: 19th Nov, 2025
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

function findNoOfSubArrays(nums, k) {
  if (!nums || nums.length === 0) return 0;

  let prefixSum = 0;
  let sumMap = new Map();
  let count = 0;

  sumMap.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    prefixSum = prefixSum + nums[i];
    const complement = prefixSum - k;

    if (sumMap.has(complement)) {
      count = count + sumMap.get(complement);
    }

    sumMap.set(prefixSum, (sumMap.get(prefixSum) || 0) + 1);
  }

  return count;
}

let nums = [1, 1, 1],
  k = 2;
let output = findNoOfSubArrays(nums, k);
console.log(`No of subarrays with sum ${k} is: ${output}`);

(nums = [3, 4, 7, 2, -3, 1, 4, 2]), (k = 7);
output = findNoOfSubArrays(nums, k);
console.log(`No of subarrays with sum ${k} is: ${output}`);
