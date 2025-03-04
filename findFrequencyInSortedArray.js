/**
 * Given an sorted array of integers, find the occurance of a given value
 */

function getIndex(nums, element, isLeft = true) {
  const length = nums.length;
  if (length < 1) return -1;

  let low = 0, high = length - 1;
  let resultIndex = -1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (nums[mid] === element) {
      resultIndex = mid;
      if (isLeft) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (nums[mid] > element) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return resultIndex;
}

function getFrequency(nums, element) {
  // get left index of element
  const leftIndex = getIndex(nums, element, true);
  // get right index of element
  const rightIndex = getIndex(nums, element, false);

  if (leftIndex !== -1 && rightIndex !== -1) return rightIndex - leftIndex + 1;
  else return null;
}

let nums = [2, 3, 3, 3, 5, 7, 7, 9];
let element = 3;
let output = getFrequency(nums, element);
console.log(`Frequency of ${element} in [${nums}] is: ${output}`);

element = 7;
output = getFrequency(nums, element);
console.log(`Frequency of ${element} in [${nums}] is: ${output}`);

element = 5;
output = getFrequency(nums, element);
console.log(`Frequency of ${element} in [${nums}] is: ${output}`);

nums = [4, 4, 4, 4, 4, 4, 4, 4];
element = 4;
output = getFrequency(nums, element);
console.log(`Frequency of ${element} in [${nums}] is: ${output}`);

nums = [];
element = 4;
output = getFrequency(nums, element);
console.log(`Frequency of ${element} in [${nums}] is: ${output}`);

nums = [3];
element = 3;
output = getFrequency(nums, element);
console.log(`Frequency of ${element} in [${nums}] is: ${output}`);
