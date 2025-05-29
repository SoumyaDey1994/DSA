/**
 * Date: 29th May, 2025
 * Problem Statement: Search in Rotated Sorted Array
 * You are given a sorted array that has been rotated at some pivot unknown to you. 
 * Your task is to determine if a given target number exists in the array and return its index. 
 * If it does not exist, return -1. The array does not contain duplicates.

🔹 Constraints:
    The array was originally sorted in ascending order before rotation.
    Your solution should run in O(log N) time complexity.

    Example 1:
        🔹 Input: nums = [4,5,6,7,0,1,2], target = 0
        🔹 Output: 4
        🔹 Explanation: The number 0 is at index 4.
    Example 2:
        🔹 Input: nums = [6,7,8,1,2,3,4,5], target = 3
        🔹 Output: 5
        🔹 Explanation: The number 3 is at index 5.
    Example 3 (Target Not Present):
        🔹 Input: nums = [3,4,5,6,7,8,1,2], target = 9
        🔹 Output: -1
        🔹 Explanation: 9 is not in the array, so return -1.
*/
function findElement(nums, target) {
  if (!nums || nums.length === 0) return;

  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      // if left half is sorted & target b/w left & mid,
      // then search b/w left & mid
      if (nums[left] < nums[mid] && target >= nums[left]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // if right half is sorted & target b/w mid & right
      // then search b/w mid & right
      if (nums[right] > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

let nums = [4, 5, 6, 7, 0, 1, 2],
  target = 0;
let targetIndex = findElement(nums, target);
console.log(`Element ${target} present in [${nums}] at index: ${targetIndex}`);

(nums = [6, 7, 8, 1, 2, 3, 4, 5]), (target = 3);
targetIndex = findElement(nums, target);
console.log(`Element ${target} present in [${nums}] at index: ${targetIndex}`);

(nums = [3, 4, 5, 6, 7, 8, 1, 2]), (target = 9);
targetIndex = findElement(nums, target);
console.log(`Element ${target} present in [${nums}] at index: ${targetIndex}`);

(nums = [1, 2, 3, 4, 5, 6, 7, 8]), (target = 6);
targetIndex = findElement(nums, target);
console.log(`Element ${target} present in [${nums}] at index: ${targetIndex}`);

(nums = [5]), (target = 5);
targetIndex = findElement(nums, target);
console.log(`Element ${target} present in [${nums}] at index: ${targetIndex}`);

(nums = [5, 7, 1]), (target = 1);
targetIndex = findElement(nums, target);
console.log(`Element ${target} present in [${nums}] at index: ${targetIndex}`);
