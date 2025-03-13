/**
 * Date: 13th March, 2025
 * Problem Statement: How Many Times a Sorted Array is Rotated ?
 * You are given a sorted and rotated array,
 * meaning a sorted array has been rotated k times in the clockwise direction.
 * Your task is to determine the value of k,
 * which represents how many times the original sorted array has been rotated.
 * Input:
 *      A sorted array that has been rotated some number of times.
 *      The array does not contain duplicate elements.
 * Output:
 *      An integer k, which represents the number of rotations.
 *      If the array is already sorted (not rotated), k = 0.
 * Example 1:
 *      Input: [4, 5, 6, 7, 0, 1, 2]
 *      Output: 4
 *      Explanation: The original sorted array was [0, 1, 2, 4, 5, 6, 7].
 *                   After 4 rotations, it becomes [4, 5, 6, 7, 0, 1, 2].
 * Example 2:
 *      Input: [1, 2, 3, 4, 5, 6, 7]
 *      Output: 3
 *      Explanation: The array is already sorted and has not been rotated.
 */

function getRotationCount(arr) {
  const length = arr.length;
  let left = 0,
    right = length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // iff mid less than from both immediate left & right,
    // then thats the point from which array is rotated
    if (arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]) return mid;
    // if mid > right, hence left part is sorted & rotating point has tobe at right
    // else, right part is sorted & rotating point has tobe at left
    else if (arr[mid] > arr[right]) left = mid + 1;
    else right = mid - 1;
  }
  return 0;
}

let arr = [4, 5, 6, 7, 0, 1, 2];
let count = getRotationCount(arr);
console.log(`Array [${arr}] is rotated ${count} times`);

arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
count = getRotationCount(arr);
console.log(`Array [${arr}] is rotated ${count} times`);

arr = [1, 2, 3, 4, 5, 6, 7];
count = getRotationCount(arr);
console.log(`Array [${arr}] is rotated ${count} times`);

arr = [10, 15, 1, 3, 8];
count = getRotationCount(arr);
console.log(`Array [${arr}] is rotated ${count} times`);

arr = [3, 4, 5, 1, 2];
count = getRotationCount(arr);
console.log(`Array [${arr}] is rotated ${count} times`);
