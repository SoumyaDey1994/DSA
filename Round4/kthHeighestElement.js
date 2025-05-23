/**
 * Date: 23rd May, 2025
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

/**
 * Approach: Quick Select
 * @param {*} nums
 * @param {*} k
 * @returns
 */
function findKthHeighestElement(nums, k) {
  // O(nlogn)
  if (!nums || nums.length === 0 || k > nums.length) return;

  const pivot = nums[0];
  const left = [],
    right = [];
  for (let i = 1; i < nums.length; i++) {
    // O(n)
    // decending sorting pattern
    if (nums[i] < pivot) {
      right.push(nums[i]);
    } else {
      left.push(nums[i]);
    }
  }

  const pivotIndex = left.length + 1;
  if (k === pivotIndex) {
    return pivot;
  } else if (k < pivotIndex) {
    return findKthHeighestElement(left, k); // O(long)
  } else {
    return findKthHeighestElement(right, k - pivotIndex);
  }
}

let nums = [3, 1, 5, 12, 2, 8],
  k = 2;
let output = findKthHeighestElement(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [7, 10, 4, 3, 20, 15]), (k = 3);
output = findKthHeighestElement(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [7, 10, 20, 3, 25, 15]), (k = 1);
output = findKthHeighestElement(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [7, 10]), (k = 3);
output = findKthHeighestElement(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [7, 10, 20, 3, 25, 15]), (k = 5);
output = findKthHeighestElement(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

/**
 * Approach: Max Heap
 * @param {*} nums
 * @param {*} k
 * @returns
 */

function findKthHeighestElementUsingHeap(nums, k) {
  if (!nums || nums.length === 0 || k > nums.length) {
    return;
  }

  const heap = [];
  const sortHeapAsc = () => heap.sort((num1, num2) => num1 - num2);

  for (let i = 0; i < nums.length; i++) {
    heap.push(nums[i]);
    sortHeapAsc();
    if (heap.length > k) {
      heap.shift();
    }
  }

  return heap[0];
}

console.log("....Heap Approach....");
(nums = [3, 1, 5, 12, 2, 8]), (k = 2);
output = findKthHeighestElementUsingHeap(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [7, 10, 4, 3, 20, 15]), (k = 3);
output = findKthHeighestElementUsingHeap(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [7, 10, 20, 3, 25, 15]), (k = 1);
output = findKthHeighestElementUsingHeap(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [7, 10]), (k = 3);
output = findKthHeighestElementUsingHeap(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);

(nums = [7, 10, 20, 3, 25, 15]), (k = 5);
output = findKthHeighestElementUsingHeap(nums, k);
console.log(`${k}th heighest element of [${nums}] is: ${output}`);
