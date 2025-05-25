/**
 * Date: 25th May, 2025
 * Problem Statement: Find Frequency in a Sorted Number Array
 * Given a sorted array of numbers and a target number.
 * Your task is to find the frequency (count of occurrences) of the target number in the array.
 * 💡 Constraints:
 *      The array is sorted in non-decreasing order.
 *      The target number may or may not be present in the array.
 *      We need to determine the number of times the target appears efficiently.
 * Example 1:
 *      arr = [1, 2, 2, 2, 3, 4, 4, 5];
 *      target = 2;
 *      output: 3
 *      Explanation: 2 appears three times in the array
 * Example 2:
 *      arr = [1, 1, 1, 1, 1, 1];
 *      target = 1;
 *      output: 6
 *      Explanation: 2 appears three times in the array
 * Example 2:
 *      arr = [2, 4, 6, 8, 10];
 *      target = 5;
 *      output: 0
 *      Explanation: 5 is not in the array
 */
function findFreq(arr, targetNum) {
  if (!arr || arr.length === 0) return;

  const leftIndex = getIndex(arr, targetNum, true);
  const rightIndex = getIndex(arr, targetNum, false);

  return leftIndex > -1 && rightIndex > 1 ? rightIndex - leftIndex + 1 : 0;
}

function getIndex(arr, targetNum, isLeft = true) {
  let left = 0,
    right = arr.length - 1;
  let resultIndex = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (targetNum === arr[mid]) {
      resultIndex = mid;
      if (isLeft) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (targetNum > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return resultIndex;
}

let arr = [1, 2, 2, 2, 3, 4, 4, 5];
let target = 2;
console.log(`Frequency of ${target} in [${arr}] is: ${findFreq(arr, target)}`);

arr = [1, 1, 1, 1, 1, 1];
target = 1;
console.log(`Frequency of ${target} in [${arr}] is: ${findFreq(arr, target)}`);

arr = [2, 4, 6, 8, 10];
target = 5;
console.log(`Frequency of ${target} in [${arr}] is: ${findFreq(arr, target)}`);

arr = [4, 5, 6, 6, 6, 6, 9, 9];
target = 9;
console.log(`Frequency of ${target} in [${arr}] is: ${findFreq(arr, target)}`);

arr = [1, 2, 3, 4, 5];
target = 3;
console.log(`Frequency of ${target} in [${arr}] is: ${findFreq(arr, target)}`);

arr = [7, 9, 10, 10, 15, 18];
target = 10;
console.log(`Frequency of ${target} in [${arr}] is: ${findFreq(arr, target)}`);
