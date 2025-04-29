/**
 * Date: 29th April, 2025
 * Given an array of integers nums,
 * find all unique triplets (nums[i], nums[j], nums[k]) in the array such that:
 *      1. i <> j <> k
 *      2. nums[i]+nums[j]+nums[k]=0
 * Example:
 *      Input: nums = [-1, 0, 1, 2, -1, -4]
 *      Output: [[-1, -1, 2], [-1, 0, 1]]
 *
 */
function getTriplets(nums) {
  // O(n^2)
  if (!nums) return;
  if (nums.length < 3) return [];

  // sort the numbers
  nums = nums.sort((num1, num2) => num1 - num2); // O(nlogn)
  const length = nums.length;
  const result = [],
    complementMap = new Map();

  for (let i = 0; i < length; i++) {
    // O(n)
    const currNum = nums[i];
    const complementNum = 0 - nums[i];
    for (let j = 1; j < length - 1; j++) {
      // O(n)
      if (nums[j] + nums[j + 1] === complementNum) {
        if (!complementMap.has(currNum) && !complementMap.has(complementNum)) {
          // Push triplet to result
          result.push([currNum, nums[j], nums[j + 1]]);
          complementMap.set(currNum, complementNum);
          complementMap.set(complementNum, currNum);
        }
      }
    }
  }
  return result;
}

function getTripletsEfficient(nums) { // O(n^2)
  if (!nums) return;
  if (nums.length < 3) return [];

  nums = nums.sort((num1, num2) => num1 - num2); // O(nlogn)
  const length = nums.length;
  const result = [];
  for (let index = 0; index < length - 2; index++) { // O(n)
    // skip duplicates
    if (index > 0 && nums[index - 1] === nums[index]) continue;
    let left = index + 1,
      right = length - 1;
    while (left < right) { // O(nlogn)
      const sum = nums[index] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[index], nums[left], nums[right]]);

        // Skip Duplicates
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }

        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

let nums = [-1, 0, 1, 2, -1, -4];
let output = getTriplets(nums);
console.log(
  `3 Sum triplets of [${nums}] are: [${output.map((t) => `[${t}]`)}]`
);

nums = [0, 1, 1];
output = getTriplets(nums);
console.log(
  `3 Sum triplets of [${nums}] are: [${output.map((t) => `[${t}]`)}]`
);

nums = [0, 0, 0];
output = getTriplets(nums);
console.log(
  `3 Sum triplets of [${nums}] are: [${output.map((t) => `[${t}]`)}]`
);

nums = [1, 2, 3, 4, 5];
output = getTriplets(nums);
console.log(
  `3 Sum triplets of [${nums}] are: [${output.map((t) => `[${t}]`)}]`
);

nums = [-2, 0, 1, 1, 2, -1, -4, 2];
output = getTripletsEfficient(nums);
console.log(
  `3 Sum triplets of [${nums}] are: [${output.map((t) => `[${t}]`)}]`
);

nums = [-4, -2, -2, -1, 0, 1, 2, 2, 2, 3];
output = getTripletsEfficient(nums);
console.log(
  `3 Sum triplets of [${nums}] are: [${output.map((t) => `[${t}]`)}]`
);

nums = [3, -5, 2, 7, -9, 5, -6];
output = getTripletsEfficient(nums);
console.log(
  `3 Sum triplets of [${nums}] are: [${output.map((t) => `[${t}]`)}]`
);