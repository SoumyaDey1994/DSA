/**
 * Date: 22nd March, 2025
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
function getFrequency(arr, target) {
  // Base: If No element, freq is 0
  if (!arr || arr.length === 0) return 0;
  // Find left & right index of target using Binary Search
  const leftIndex = getIndex(arr, target, true);
  const rightIndex = getIndex(arr, target, false);
  // if left/right index > -1 then return (rightIndex-leftIndex+1) else 0
  return leftIndex > -1 ? rightIndex - leftIndex + 1 : 0;
}

function getIndex(arr, target, isLeft = true) {
  let left = 0,
    right = arr.length - 1;
  let resultIndex = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      // save the index & then proceed to left/right
      // to find other leftmost/rightmost occurrences of target
      // as per isLeft parameter
      resultIndex = mid;
      if (isLeft) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return resultIndex;
}

let arr = [1, 2, 2, 2, 3, 4, 4, 5];
let target = 2;
console.log(`Frequency of ${target} in [${arr}] is: ${getFrequency(arr, target)}`);

arr = [1, 1, 1, 1, 1, 1];
target = 1;
console.log(`Frequency of ${target} in [${arr}] is: ${getFrequency(arr, target)}`);

arr = [2, 4, 6, 8, 10];
target = 5;
console.log(`Frequency of ${target} in [${arr}] is: ${getFrequency(arr, target)}`);

arr = [4, 5, 6, 6, 6, 6, 9, 9];
target = 9;
console.log(`Frequency of ${target} in [${arr}] is: ${getFrequency(arr, target)}`);

arr = [1, 2, 3, 4, 5];
target = 3;
console.log(`Frequency of ${target} in [${arr}] is: ${getFrequency(arr, target)}`);
