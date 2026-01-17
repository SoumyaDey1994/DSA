/**
 * Date: 17th Jan, 2026
 * Problem Statement: Kth Highest Element in a List
 * Given an array nums of N integers and an integer K,
 * find the Kth highest (largest) element in the array.
 * The array may contain duplicate values,
 * but the Kth highest element is determined by its position in the sorted order.
 * Example 1:
 *      Input: nums = [3, 1, 5, 12, 2, 8], K = 2
 *      Output: 8
 *      Explanation: The sorted array is [12, 8, 5, 3, 2, 1], and the 2nd highest element is 8.
 * Example 2:
 *      Input: nums = [7, 10, 4, 3, 20, 15], K = 3
 *      Output: 10
 *      Explanation: The sorted array is [20, 15, 10, 7, 4, 3], and the 3rd highest element is 10.
 * Example 3:
 *      Input: nums = [4, 2, 2, 8, 6, 4, 7], K = 4
 *      Output: 4
 *      Explanation: The sorted array is [8, 7, 6, 4, 4, 2, 2], and the 4th highest element is 4.
 */
function findKthHeighestElementQuickSelect(nums, k) {
  if (!nums || nums.length < k) return;

  const left = [],
    right = [];
  const pivot = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  const pivotPosition = left.length + 1;
  if (pivotPosition === k) {
    return pivot;
  } else if (k < pivotPosition) {
    return findKthHeighestElementQuickSelect(left, k);
  } else {
    return findKthHeighestElementQuickSelect(right, k - pivotPosition);
  }
}

console.log(`..........Search using quick select...........`);
let nums = [3, 1, 5, 12, 2, 8],
  k = 2;
let output = findKthHeighestElementQuickSelect(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [7, 10, 4, 3, 20, 15]), (k = 3);
output = findKthHeighestElementQuickSelect(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [4, 2, 2, 8, 6, 4, 7]), (k = 4);
output = findKthHeighestElementQuickSelect(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [9, 7]), (k = 1);
output = findKthHeighestElementQuickSelect(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [5, 3, 8, 2]), (k = 4);
output = findKthHeighestElementQuickSelect(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

console.log(`..........Search using min heap...........`);

function findKthHeighestElementUsingHeap(nums, k) {
  if (!nums || nums.length < k) return;

  const heap = [];

  // Sort heap in ASC order
  const sortHeap = () => heap.sort((num1, num2) => num1 - num2);

  for (let num of nums) {
    heap.push(num);
    sortHeap();
    // Remove items from beginning
    if (heap.length > k) {
      heap.shift();
    }
  }

  return heap[0];
}
(nums = [3, 1, 5, 12, 2, 8]), (k = 2);
output = findKthHeighestElementUsingHeap(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [7, 10, 4, 3, 20, 15]), (k = 3);
output = findKthHeighestElementUsingHeap(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [4, 2, 2, 8, 6, 4, 7]), (k = 4);
output = findKthHeighestElementUsingHeap(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [9, 7]), (k = 1);
output = findKthHeighestElementUsingHeap(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [5, 3, 8, 2]), (k = 4);
output = findKthHeighestElementUsingHeap(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);
