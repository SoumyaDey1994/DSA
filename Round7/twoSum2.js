/**
 * Date: 5th Feb, 2026
 * Problem Statement: Two Sum II – Input Array is Sorted
 * We are given a sorted array of integers (in non-decreasing order) and a target integer.
 * Our task is to find two numbers such that they add up to the target,
 * and return their 1-based indices as an array [index1, index2].
 * Constraints:
 *      There is exactly one solution.
 *      You must use only constant extra space.
 *      Indices must be 1-based, not 0-based.
 * Example 1:
 *      numbers = [2, 7, 11, 15], target = 9
 *      result: [1, 2]
 *      Explanation: 2 + 7 = 9
 * Example 2:
 *      numbers = [1, 2, 3, 4, 4, 9, 56, 90], target = 8
 *      result: [4, 5]
 *      Explanation: 4 + 8 = 8
 * Hint: Binary Search based approach
 */
function get2SumIndices(numbers, target) {
  if (!numbers || numbers.length === 0) return [-1];

  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [-1];
}


let numbers = [2, 7, 11, 15],
  target = 9;
console.log(
  `2 Sum indices of [${numbers}] for target ${target} are: [${get2SumIndices(
    numbers,
    target
  )}]`
);

(numbers = [1, 2, 3, 4, 4, 9, 56, 90]), (target = 8);
console.log(
  `2 Sum indices of [${numbers}] for target ${target} are: [${get2SumIndices(
    numbers,
    target
  )}]`
);

(numbers = [5, 7]), (target = 6);
console.log(
  `2 Sum indices of [${numbers}] for target ${target} are: [${get2SumIndices(
    numbers,
    target
  )}]`
);

(numbers = [5, 7]), (target = 12);
console.log(
  `2 Sum indices of [${numbers}] for target ${target} are: [${get2SumIndices(
    numbers,
    target
  )}]`
);

(numbers = [1, 3, 4, 5, 7, 11]), (target = 6);
console.log(
  `2 Sum indices of [${numbers}] for target ${target} are: [${get2SumIndices(
    numbers,
    target
  )}]`
);

(numbers = [1, 2, 3, 9, 11]), (target = 14);
console.log(
  `2 Sum indices of [${numbers}] for target ${target} are: [${get2SumIndices(
    numbers,
    target
  )}]`
);

(numbers = [-5, -2, 0, 3, 8]), (target = 1);
console.log(
  `2 Sum indices of [${numbers}] for target ${target} are: [${get2SumIndices(
    numbers,
    target
  )}]`
);

(numbers = [2, 3, 4]), (target = 6);
console.log(
  `2 Sum indices of [${numbers}] for target ${target} are: [${get2SumIndices(
    numbers,
    target
  )}]`
);

(numbers = [5, 25, 75]), (target = 100);
console.log(
  `2 Sum indices of [${numbers}] for target ${target} are: [${get2SumIndices(
    numbers,
    target
  )}]`
);
