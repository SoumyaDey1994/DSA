/**
 * Date: 17th Jan, 2025
 * Given an sorted array of integers
 * find a target element using Binary Search
 */

function binarySearch(arr, target, low, high) {
  // Base case
  if (low > high) return -1;

  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === target) return mid;
  else if (target < arr[mid]) return binarySearch(arr, target, low, mid - 1);
  else return binarySearch(arr, target, mid + 1, high);
}

let arr = [3, 4, 6, 7, 8, 10, 11, 12];
let target = 11;
let outputIndex = binarySearch(arr, target, 0, arr.length - 1);
console.log(`Element ${target} found at index ${outputIndex}`);

arr = [10];
target = 10;
outputIndex = binarySearch(arr, target, 0, arr.length - 1);
console.log(`Element ${target} found at index ${outputIndex}`);

arr = [10, 20, 25, 30];
target = 20;
outputIndex = binarySearch(arr, target, 0, arr.length - 1);
console.log(`Element ${target} found at index ${outputIndex}`);

arr = [10, 20, 40];
target = 40;
outputIndex = binarySearch(arr, target, 0, arr.length - 1);
console.log(`Element ${target} found at index ${outputIndex}`);
