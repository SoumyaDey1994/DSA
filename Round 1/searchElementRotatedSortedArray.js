/**
 * Date: 17th Jan, 2025
 * Given an sorted array, which is rotated
 * find a given element & return its index
 * Input:
 *      nums = [15, 16, 18, 2, 4, 5, 7, 9, 10]
 *      element = 7
 */

function findElement(arr, element) {
  let low = 0,
    high = arr.length;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === element) return mid;
    else if (arr[mid] < arr[high]) {
      if (element > arr[mid] && element <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      if (element < arr[mid] && element > arr[low]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }
  return -1;
}

let nums = [15, 16, 18, 2, 4, 5, 7, 9, 10];
let element = 7;
console.log(
  `Index of ${element} in array [${nums}] is: ${findElement(nums, element)}`
);

nums = [10];
element = 10;
console.log(
  `Index of ${element} in array [${nums}] is: ${findElement(nums, element)}`
);


nums = [10, 1, 3, 8];
element = 3;
console.log(
  `Index of ${element} in array [${nums}] is: ${findElement(nums, element)}`
);

nums = [10, 1, 3, 8];
element = 6;
console.log(
  `Index of ${element} in array [${nums}] is: ${findElement(nums, element)}`
);

nums = [];
element = 5;
console.log(
  `Index of ${element} in array [${nums}] is: ${findElement(nums, element)}`
);
