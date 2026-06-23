/**
 * Date: 23rd June, 2026
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
function checkIfContainsDuplicate(nums) {
  if (!nums || nums.length === 0) return;

  const uniqueElements = new Set();

  for (let number of nums) {
    if (uniqueElements.has(number)) return true;

    uniqueElements.add(number);
  }

  return false;
}

let nums = [1, 2, 3, 1];
console.log(
  `List [${nums}] contains duplicate: ${checkIfContainsDuplicate(nums)}`,
);

nums = [1, 2, 3, 4];
console.log(
  `List [${nums}] contains duplicate: ${checkIfContainsDuplicate(nums)}`,
);

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(
  `List [${nums}] contains duplicate: ${checkIfContainsDuplicate(nums)}`,
);

nums = [3, 5, 1, 7, 2, 0, 8, 9];
console.log(
  `List [${nums}] contains duplicate: ${checkIfContainsDuplicate(nums)}`,
);
