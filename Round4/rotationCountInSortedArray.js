/**
 * Date: 29th May, 2025
 * Problem Statement: How Many Times a Sorted Array is Rotated ?
 * You are given a sorted and rotated inputay,
 * meaning a sorted inputay has been rotated k times in the clockwise direction.
 * Your task is to determine the value of k,
 * which represents how many times the original sorted inputay has been rotated.
 * Input:
 *      A sorted inputay that has been rotated some number of times.
 *      The inputay does not contain duplicate elements.
 * Output:
 *      An integer k, which represents the number of rotations.
 *      If the inputay is already sorted (not rotated), k = 0.
 * Example 1:
 *      Input: [4, 5, 6, 7, 0, 1, 2]
 *      Output: 4
 *      Explanation: The original sorted inputay was [0, 1, 2, 4, 5, 6, 7].
 *                   After 4 rotations, it becomes [4, 5, 6, 7, 0, 1, 2].
 * Example 2:
 *      Input: [1, 2, 3, 4, 5, 6, 7]
 *      Output: 0
 *      Explanation: The inputay is already sorted and has not been rotated.
 */
function findRotationCount(input) {
  if (!input || input.length === 0) return;

  let left = 0,
    right = input.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // console.log(mid);
    // check if mid is smaller than both adjacents
    if (input[mid] < input[mid - 1] && input[mid] < input[mid + 1]) {
      return mid;
    } else if (input[mid] > input[right]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
}

let input = [4, 5, 6, 7, 0, 1, 2];
console.log(`input [${input}] is rotated ${findRotationCount(input)} times`);

input = [1, 2, 3, 4, 5, 6, 7];
console.log(`input [${input}] is rotated ${findRotationCount(input)} times`);

input = [7, 8, 9, 1, 2, 3, 4, 5, 6];
count = findRotationCount(input);
console.log(`Array [${input}] is rotated ${count} times`);

input = [10, 15, 1, 3, 8];
count = findRotationCount(input);
console.log(`Array [${input}] is rotated ${count} times`);

input = [3, 4, 5, 1, 2];
count = findRotationCount(input);
console.log(`Array [${input}] is rotated ${count} times`);
