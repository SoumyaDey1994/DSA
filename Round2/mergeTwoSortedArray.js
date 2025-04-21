/**
 * Date: 22nd April, 2025
 * Problem Statement: Merge Two Sorted Arrays (in-place)
 * You are given two sorted integer arrays nums1 and nums2, where:
 *      1. nums1 has a length of m + n, with the first m elements initialized (sorted),
 *          and the last n elements set to 0, which are placeholders.
 *      2. nums2 has n elements, also sorted.
 * Merge nums2 into nums1 as one sorted array, in-place (i.e., without using extra space for another array).
 * ✅ Constraints:
 *      Both arrays are sorted in non-decreasing order.
 *      You must do it in-place in nums1.
 * Example 1:
 *      num1 = [1,2,3,0,0,0], m = 3
 *      num2 = [2,5,6], n = 3
 *      Output: nums1 = [1,2,2,3,5,6]
 * Example 2:
 *      num1 = [1,3,5,0,0], m = 3
 *      num2 = [2,4], n= 2
 *      Output: nums1 = [1,2,3,4,5]
 * Example 3:
 *      nums1 = [2,0], m = 1
 *      nums2 = [1],   n = 1
 *      Output: nums1 = [1,2]
 * Example 4:
 *      nums1 = [1], m = 1
 *      nums2 = [],  n = 0
 *      Output: nums1 = [1]
 * Example 5:
 *      nums1 = [0], m = 0
 *      nums2 = [1],  n = 1
 *      Output: nums1 = [1]
 */

function mergeArrays(num1, m, num2, n) {
  let temp = m + n - 1; // last index of merged array
  let temp1 = m - 1; // last index of valid element in num1
  let temp2 = n - 1; // last index of valid element in num2

  // if last element of num2 > last element of num1
  // push num2 element at end of num1
  // else copy num1 element at end of num1
  while (temp1 >= 0 && temp2 >= 0) {
    if (num2[temp2] >= num1[temp1]) {
      num1[temp] = num2[temp2];
      temp2--;
    } else {
      num1[temp] = num1[temp1];
      temp1--;
    }
    temp--;
  }
  // console.log("Post initial iteration: ", num1);
  /**
   * If num2 array still has values to iterate
   */
  while (temp2 >= 0) {
    num1[temp] = num2[temp2];
    temp2--;
    temp--;
  }
  // console.log("Post last iteration: ", num1);
  return num1;
}

let num1 = [1, 2, 3, 0, 0, 0],
  m = 3;
let num2 = [2, 5, 6],
  n = 3;
let output = mergeArrays(num1, m, num2, n);
console.log(`Sorted Merged Array Becomes: [${output}]`);

(num1 = [1, 3, 5, 0, 0]), (m = 3);
(num2 = [2, 4]), (n = 2);
output = mergeArrays(num1, m, num2, n);
console.log(`Sorted Merged Array Becomes: [${output}]`);

(num1 = [2, 0]), (m = 1);
(num2 = [1]), (n = 1);
output = mergeArrays(num1, m, num2, n);
console.log(`Sorted Merged Array Becomes: [${output}]`);

(num1 = [1]), (m = 1);
(num2 = []), (n = 0);
output = mergeArrays(num1, m, num2, n);
console.log(`Sorted Merged Array Becomes: [${output}]`);

(num1 = [0]), (m = 0);
(num2 = [1]), (n = 1);
output = mergeArrays(num1, m, num2, n);
console.log(`Sorted Merged Array Becomes: [${output}]`);

(num1 = [3, 5, 6, 8, 9, 0, 0, 0, 0, 0]), (m = 5);
(num2 = [1, 2, 4, 6, 7]), (n = 5);
output = mergeArrays(num1, m, num2, n);
console.log(`Sorted Merged Array Becomes: [${output}]`);
