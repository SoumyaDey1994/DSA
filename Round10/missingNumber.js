/**
 * Date: 26th March, 2025
 * 📌 Problem Statement — Missing Number
 * You are given an array nums containing n distinct integers in the range:
 *      0, 1, 2, 3, ..., n
 * So there should be n + 1 numbers total, but exactly one number is missing from the array.
 * Return the missing number.
 * Example 1:
 *      Input:  nums = [3, 0, 1]
 *          The range should contain: 0, 1, 2, 3
 *          Missing number = 2
 *      Output: 2
 * Example 2:
 *      Input: nums = [9, 6, 4, 2, 3, 5, 7, 0, 1]
 *          Range should be: 0 → 9
 *          Missing number = 8
 *      Output: 8
 * ❗ Constraints
 *      The array contains distinct integers
 *      Values are always within 0 to n
 *      Only one number is missing, not multiple
 */
function findMissingNumber(nums) {
  if (!nums || nums.length === 0) return;

  const length = nums.length;
  const total = (length * (length + 1)) / 2;
  const sum = nums.reduce((acc, curr) => acc + curr);

  return total - sum;
}

let nums = [3, 0, 1];
console.log(`Missing number from [${nums}] is: ${findMissingNumber(nums)}`);

nums = [0, 1];
console.log(`Missing number from [${nums}] is: ${findMissingNumber(nums)}`);

nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
console.log(`Missing number from [${nums}] is: ${findMissingNumber(nums)}`);

nums = [5, 3, 4, 2, 0, 1];
console.log(`Missing number from [${nums}] is: ${findMissingNumber(nums)}`);
