/**
 * Date: 4th Jan, 2026
 * 📌 Problem Statement — Majority Element
 * You are given an integer array nums.
 * You must find the element that appears more than ⌊ n/2 ⌋ times (i.e., strictly more than half of the size of the array).
 * Assumptions of the problem
 *      It’s guaranteed that a majority element always exists in the input array.
 * Output
 *      Return the majority element.
 * Example 1:
 *      Input:  nums = [3, 2, 3]
 *      Output: 3
 *      Explanation: Because 3 appears 2 times, and array size is 3 → 2 > 3/2.
 * Example 2:
 *      Input:  nums = [2, 2, 1, 1, 1, 2, 2]
 *      Output: 2
 *      Explanation:
 *          n = 7 → majority threshold = ⌊7/2⌋ = 3
 *          2 appears 4 times, so it is the majority element.
 */
function findMajorityElement(nums) {
  if (!nums || nums.length === 0) return null;
  if (nums.length === 1) return nums[0];

  let target = nums[0],
    count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === target) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      target = nums[i];
      count = 1;
    }
  }

  return target;
}


let nums = [3, 2, 3];
console.log(`Major element of [${nums}] is: ${findMajorityElement(nums)}`);

nums = [2, 2, 1, 1, 1, 2, 2];
console.log(`Major element of [${nums}] is: ${findMajorityElement(nums)}`);

nums = [6, 5, 5];
console.log(`Major element of [${nums}] is: ${findMajorityElement(nums)}`);

nums = [4, 1, 2, 4, 2, 4, 4, 4];
console.log(`Major element of [${nums}] is: ${findMajorityElement(nums)}`);

nums = [7, 7, 7, 3, 3];
console.log(`Major element of [${nums}] is: ${findMajorityElement(nums)}`);

nums = [4, 5, 4, 5, 4, 4];
console.log(`Major element of [${nums}] is: ${findMajorityElement(nums)}`);

nums = [9, 1, 9, 2, 9, 3, 9];
console.log(`Major element of [${nums}] is: ${findMajorityElement(nums)}`);

nums = [8, 8, 7, 7, 8, 8];
console.log(`Major element of [${nums}] is: ${findMajorityElement(nums)}`);

nums = [1, 2, 1, 2, 1, 2, 1];
console.log(`Major element of [${nums}] is: ${findMajorityElement(nums)}`);

nums = [5, 6, 5, 6, 5, 6, 5, 6, 5];
console.log(`Major element of [${nums}] is: ${findMajorityElement(nums)}`);

nums = [-1, -1, -1, 2];
console.log(`Major element of [${nums}] is: ${findMajorityElement(nums)}`);

nums = [10, -5, 10, -5, 10];
console.log(`Major element of [${nums}] is: ${findMajorityElement(nums)}`);

nums = [5, 5, 9, 9];
console.log(`Major element of [${nums}] is: ${findMajorityElement(nums)}`);
