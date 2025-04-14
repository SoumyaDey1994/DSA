/**
 * Date: 14th April, 2025
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

function findIndex(arr, target, isLeft = true) {
  let low = 0,
    high = arr.length - 1;
  let result = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
        // save result & search for other index
      result = mid;
      if (isLeft) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (arr[mid] > target) {
      // index present in left half
      high = mid - 1;
    } else {
        // index present in right half
      low = mid + 1;
    }
  }
  return result;
}

function getFrequency(arr, target) {
  // if no nums in arr, target can't exist
  if (arr.length === 0) return -1;

  const startIndex = findIndex(arr, target, true);
  const endIndex = findIndex(arr, target, false);

  if ((startIndex !== -1) & (endIndex !== -1)) {
    return endIndex - startIndex + 1;
  } else {
    return 0;
  }
}

let arr = [1, 2, 2, 2, 3, 4, 4, 5];
let target = 2;
console.log(
  `Frequency of ${target} in [${arr}] is: ${getFrequency(arr, target)}`
);

arr = [1, 1, 1, 1, 1, 1];
target = 2;
console.log(
  `Frequency of ${target} in [${arr}] is: ${getFrequency(arr, target)}`
);

arr = [2, 4, 6, 8, 10];
target = 5;
console.log(
  `Frequency of ${target} in [${arr}] is: ${getFrequency(arr, target)}`
);

arr = [1, 3, 4, 4, 7];
target = 4;
console.log(
  `Frequency of ${target} in [${arr}] is: ${getFrequency(arr, target)}`
);

