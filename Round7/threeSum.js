/**
 * Date: 4th Jan, 2026
 * Given an array of integers nums,
 * find all unique triplets (nums[i], nums[j], nums[k]) in the array such that:
 *      1. i <> j <> k
 *      2. nums[i]+nums[j]+nums[k]=0
 * Example:
 *      Input: nums = [-1, 0, 1, 2, -1, -4]
 *      Output: [[-1, -1, 2], [-1, 0, 1]]
 *
 */
function findTriplets(nums) {
  if (!nums || nums.length < 3) return [];

  const sumMap = new Map();
  const complementMap = new Map();
  const output = [];

  // Sort the numbers first
  nums = nums.sort((num1, num2) => num1 - num2);

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const complement = 0 - curr;

    for (let j = 1; j < nums.length - 1; j++) {
      if (nums[j] + nums[j + 1] === complement) {
        if (!complementMap.has(curr) && !complementMap.has(complement)) {
          output.push([curr, nums[j], nums[j + 1]]);
          sumMap.set(curr, complement);
          complementMap.set(complement, curr);
        }
      }
    }
  }

  return output.map((o) => `[${o}]`);
}

function findTripletsUsing2Pointer(nums) {
  if (!nums || nums.length < 3) return [];

  const isAllPositive = nums.every((num) => num > 0);
  const isAllNegetive = nums.every((num) => num < 0);

  if (isAllPositive || isAllNegetive) return [];

  // Sort the nums
  nums = nums.sort((num1, num2) => num1 - num2);
  const triplets = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);
        // omit duplicate processing
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
  return triplets.map((trip) => `[${trip}]`);
}

let nums = [-1, 0, 1, 2, -1, -4];
console.log(`3 Sum triplets for [${nums}] are: [${findTriplets(nums)}]`);

nums = [0, 1, 1];
console.log(`3 Sum triplets for [${nums}] are: [${findTriplets(nums)}]`);

nums = [0, 0, 0];
console.log(`3 Sum triplets for [${nums}] are: [${findTriplets(nums)}]`);

nums = [1, 2, 3, 4, 5];
console.log(`3 Sum triplets for [${nums}] are: [${findTriplets(nums)}]`);

nums = [-2, 0, 1, 1, 2, -1, -4, 2];
console.log(`3 Sum triplets for [${nums}] are: [${findTriplets(nums)}]`);

nums = [-4, -2, -2, -1, 0, 1, 2, 2, 2, 3];
console.log(`3 Sum triplets for [${nums}] are: [${findTriplets(nums)}]`);

console.log(`.......... 2 Pointer Approach ..........`);

nums = [-1, 0, 1, 2, -1, -4];
console.log(
  `3 Sum triplets for [${nums}] are: [${findTripletsUsing2Pointer(nums)}]`
);

nums = [0, 1, 1];
console.log(
  `3 Sum triplets for [${nums}] are: [${findTripletsUsing2Pointer(nums)}]`
);

nums = [0, 0, 0];
console.log(
  `3 Sum triplets for [${nums}] are: [${findTripletsUsing2Pointer(nums)}]`
);

nums = [1, 2, 3, 4, 5];
console.log(
  `3 Sum triplets for [${nums}] are: [${findTripletsUsing2Pointer(nums)}]`
);

nums = [-2, 0, 1, 1, 2, -1, -4, 2];
console.log(
  `3 Sum triplets for [${nums}] are: [${findTripletsUsing2Pointer(nums)}]`
);

nums = [-4, -2, -2, -1, 0, 1, 2, 2, 2, 3];
console.log(
  `3 Sum triplets for [${nums}] are: [${findTripletsUsing2Pointer(nums)}]`
);
