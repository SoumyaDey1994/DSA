/**
 * Date: 5th March, 2025
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
function getKthHighestByQuickSelect(nums, k) {
  // O(nlogn)
  // invalid scenario
  if (!nums || nums.length < k) return null;

  const pivot = nums[0];
  const left = [],
    right = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] >= pivot) left.push(nums[i]);
    else right.push(nums[i]);
  }

  const pivotIndex = left.length + 1; // immediate next element after left subarray
  if (pivotIndex === k) return pivot;
  else if (k < pivotIndex) return getKthHighestByQuickSelect(left, k);
  else return getKthHighestByQuickSelect(right, k - pivotIndex);
}

function getKthHighestElementByHeap(nums, k) {
  // invalid scenario
  if (!nums || nums.length < k) return null;

  const heap = new Array();
  const sortHeap = () => heap.sort((num1, num2) => num1 - num2); // O(kLogk)

  for (let i = 0; i < nums.length; i++) {
    // O(n)
    heap.push(nums[i]);
    sortHeap();
    if (heap.length > k) {
      heap.shift();
    }
  }
  return heap[0];
}

let nums = [3, 1, 5, 12, 2, 8],
  k = 2;
console.log(
  `${k}th Highest Element of [${nums}] is: ${getKthHighestByQuickSelect(
    nums,
    k
  )}`
);

(nums = [7, 10, 4, 3, 20, 15]), (k = 3);
console.log(
  `${k}th Highest Element of [${nums}] is: ${getKthHighestByQuickSelect(
    nums,
    k
  )}`
);

(nums = [4, 2, 2, 8, 6, 4, 7]), (k = 4);
console.log(
  `${k}th Highest Element of [${nums}] is: ${getKthHighestByQuickSelect(
    nums,
    k
  )}`
);

(nums = [3, 7, 1, 9, 2, 13, 15]), (k = 3);
console.log(
  `${k}th Highest Element of [${nums}] is: ${getKthHighestElementByHeap(
    nums,
    k
  )}`
);

(nums = [3, 7, 1, 2, 11]), (k = 1);
console.log(
  `${k}th Highest Element of [${nums}] is: ${getKthHighestElementByHeap(
    nums,
    k
  )}`
);

(nums = [3, 7, 5, 11]), (k = 5);
console.log(
  `${k}th Highest Element of [${nums}] is: ${getKthHighestElementByHeap(
    nums,
    k
  )}`
);
