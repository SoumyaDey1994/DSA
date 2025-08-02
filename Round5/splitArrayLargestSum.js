/**
 * Date:  August, 2025
 * Problem Statement: Split Array Largest Sum
 * Given an integer array nums and an integer k.
 * Goal: Split the array into k non-empty continuous subarrays to minimize the largest subarray sum.
 * Return the minimum possible largest sum among these subarrays.
 * Example 1:
 *      nums = [7,2,5,10,8]
 *      k = 2
 *      output: 18
 *      Explanation:
 *          We need to split nums into 2 subarrays such that the largest sum among them is minimized.
 *          Possible splits and their largest sum:
 *          [7,2,5] | [10,8] → max(14,18) = 18 ✅
 * Example 2:
 *      nums = [1,2,3,4,5];
 *      k = 2
 *      output: 9
 *      Explanation:
 *          We need to split nums into 2 subarrays such that the largest sum among them is minimized.
 *          Possible splits and their largest sum:
 *          [1,2,3] | [4,5] → max(6,9) = 9 ✅
 */
