/**
 * Date: 17th Nov, 2025
 * Problem Statement: Remove Duplicates from Sorted Array
 * Given a sorted array (in non-decreasing order),
 * We need to remove the duplicates in-place such that each unique element appears only once.
 * After removing the duplicates, return the length of the unique portion.
 * Important:
 *      Do NOT use extra array or object (must modify the original array itself).
 *      You can have extra space O(1) only (i.e., constant space).
 *      The elements beyond the new length don’t matter.
 * Example 1:
 *      nums = [1, 1, 2]
 *      output: 2, nums = [1, 2, _]
 *      Explanation: The first 2 elements [1, 2] are unique, _ means we don't care what's beyond index 2
 * Example 2:
 *      nums = [0,0,1,1,1,2,2,3,3,4]
 *      output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
 *      Explanation: The first 5 elements [0,1,2,3,4] are unique, the rest are irrelevant.
 */

function removeDuplicates(nums) {
  if (!nums) return;
  if (nums.length <= 1) {
    return {
      nums,
      countOfUniques: nums.length,
    };
  }

  let countOfUniques = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      // Assign to unique w.r.t index
      nums[countOfUniques] = nums[i + 1];
      countOfUniques++;
    }
  }

  return {
    nums: nums.fill("_", countOfUniques),
    countOfUniques,
  };
}

let nums = [1, 1, 2];
console.log(
  `Unique count & elements of [${nums}] are: ${JSON.stringify(
    removeDuplicates(nums)
  )}`
);

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(
  `Unique count & elements of [${nums}] are: ${JSON.stringify(
    removeDuplicates(nums)
  )}`
);

nums = [2, 3, 4, 4, 5, 7, 7, 7];
console.log(
  `Unique count & elements of [${nums}] are: ${JSON.stringify(
    removeDuplicates(nums)
  )}`
);

nums = [5, 6, 7, 8];
console.log(
  `Unique count & elements of [${nums}] are: ${JSON.stringify(
    removeDuplicates(nums)
  )}`
);
