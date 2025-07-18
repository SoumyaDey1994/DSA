/**
 * Date: 18th May, 2025
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
  if (!nums || nums.length === 0) return;

  const complementMap = new Map();

  const sortedNums = nums.sort((a, b) => a - b); // sort nums in ASC order
  const result = [];
  for (let i = 0; i < sortedNums.length; i++) {
    const curr = sortedNums[i];
    const complement = 0 - curr;
    for (let j = 1; j < sortedNums.length - 1; j++) {
      if (sortedNums[j] + sortedNums[j + 1] === complement) {
        if (!complementMap.has(curr) && !complementMap.has(complement)) {
          result.push([curr, sortedNums[j], sortedNums[j + 1]]);
          complementMap.set(curr, complement);
          complementMap.set(complement, curr);
        }
      }
    }
  }

  return result.map((r) => `[${r}]`);
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
