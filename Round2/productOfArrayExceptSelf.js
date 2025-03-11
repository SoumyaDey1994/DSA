/**
 * Date: 11th March, 2025
 * Problem Statement: Product of Array Except Self
 * given an integer array nums of size n,
 * You need to return an array output such that output[i] is equal to the product of all elements in nums except nums[i].
 * Constraints:
 *      1. You must not use division.
 *      2. The solution should run in O(n) time complexity.
 * Example 1:
 *      nums = [1, 2, 3, 4]
 *      output = [24, 12, 8, 6]
 *      Explanation:
 *          output[0] = 2 × 3 × 4 = 24
 *          output[1] = 1 × 3 × 4 = 12
 *          output[2] = 1 × 2 × 4 = 8
 *          output[3] = 1 × 2 × 3 = 6
 * Example 2:
 *      nums = [-1, 1, 0, -3, 3]
 *      output = [0, 0, 9, 0, 0]
 *      Explanation: Since there's a 0 in the array,
 * all elements except the one at index 2 (where 0 exists) become 0.
 * The only nonzero value comes from multiplying the nonzero numbers (-1 × 1 × -3 × 3 = 9).
 */

function getProductExceptSelf(arr) {
  let length = arr.length;
  let prefix = 1,
    suffix = 1;
  let result = new Array(length).fill(1);
  for (let i = 0; i < length; i++) {
    result[i] = prefix;
    prefix = prefix * arr[i];
  }

  for (let i = length - 1; i >= 0; i--) {
    result[i] = suffix * result[i];
    suffix = suffix * arr[i];
  }
  return result;
}

let nums = [1, 2, 3, 4]; // 1, 2, 6, 24
let output = getProductExceptSelf(nums);
console.log(`Product of [${nums}] except self: [${output}]`);
