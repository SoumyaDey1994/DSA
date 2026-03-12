/**
 * Date: 9th Jan, 2025
 * Given an sorted array of integers, find the occurance of a given value
 * Example:
 *      nums = [2, 3, 3, 3, 5, 7, 7, 9]
 *      element = 7
 *      output = 2
 */

function findIndex(nums, element, isLeft = true) {
  const length = nums.length;
  if (length === 0) return -1;

  let low = 0,
    high = length - 1;
  let resultIndex = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === element) {
      resultIndex = mid;
      if (isLeft) high = mid - 1;
      else low = mid + 1;
    } else if (element > nums[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return resultIndex;
}

function findFrequency(nums, element) {
  const leftIndex = findIndex(nums, element, true);
  const rightIndex = findIndex(nums, element, false);

  if (rightIndex === -1 && leftIndex === -1) return 0;
  return rightIndex - leftIndex + 1;
}

let nums = [2, 3, 3, 3, 5, 7, 7, 9];
let element = 7;
output = findFrequency(nums, element);
console.log(`Frequency of ${element} in [${nums}] is: ${output}`);

element = 5;
output = findFrequency(nums, element);
console.log(`Frequency of ${element} in [${nums}] is: ${output}`);

nums = [4, 4, 4, 4, 4, 4, 4, 4];
element = 4;
output = findFrequency(nums, element);
console.log(`Frequency of ${element} in [${nums}] is: ${output}`);

nums = [];
element = 4;
output = findFrequency(nums, element);
console.log(`Frequency of ${element} in [${nums}] is: ${output}`);

nums = [3];
element = 3;
output = findFrequency(nums, element);
console.log(`Frequency of ${element} in [${nums}] is: ${output}`);
