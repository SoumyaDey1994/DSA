/**
 * Date: 25th Nov, 2025
 * ✅ Problem: Contains Duplicate
 * You are given an array of integers nums.
 * Your task is to determine whether any value appears at least twice in the array.
 * Return:
 *      true → if any number is repeated
 *      false → if all numbers are unique
 * This is purely a duplicate detection problem.
 *
 * Example 1:
 *      nums = [1, 2, 3, 1]
 *      output: true
 *      explanation: Because 1 appears twice.
 * Example 2:
 *      nums = [1, 2, 3, 4]
 *      output: false
 *      explanation: All values are unique.
 * Example 3:
 *      nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
 *      output: true
 *      explanation: Multiple values appear more than once.
 */
function isDuplicateElementPresent(nums) {
  if (!nums || nums.length === 0) return false;

  const uniques = new Set();
  for (let num of nums) {
    if (uniques.has(num)) {
      return true;
    }
    uniques.add(num);
  }

  return false;
}

let nums = [1, 2, 3, 1];
console.log(
  `List [${nums}] contains duplicate: ${isDuplicateElementPresent(nums)}`
);

nums = [1, 2, 3, 4];
console.log(
  `List [${nums}] contains duplicate: ${isDuplicateElementPresent(nums)}`
);

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(
  `List [${nums}] contains duplicate: ${isDuplicateElementPresent(nums)}`
);
