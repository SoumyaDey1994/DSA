/**
 * Date: 27th May, 2025
 * Given an array of integers nums,
 * find all unique triplets (nums[i], nums[j], nums[k]) in the array such that:
 *      1. i <> j <> k
 *      2. nums[i]+nums[j]+nums[k]=0
 * Example:
 *      Input: nums = [-1, 0, 1, 2, -1, -4]
 *      Output: [[-1, -1, 2], [-1, 0, 1]]
 *
 */
function find3SumTriplets(nums) {
  if (!nums || nums.length < 3) return;

  nums = nums.sort((a, b) => a - b); // O(nlogn)

  const triplets = [];
  const complementMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    // O(n)
    const curr = nums[i];
    const complement = 0 - curr;

    for (let j = 1; j < nums.length - 1; j++) {
      // O(n)
      if (nums[j] + nums[j + 1] === complement) {
        if (!complementMap.has(curr) && !complementMap.has(complement)) {
          triplets.push([curr, nums[j], nums[j + 1]]);
          complementMap.set(curr, complement);
          complementMap.set(complement, curr);
        }
      }
    }
  }
  return triplets.map((t) => `[${t}]`);
}

let nums = [-1, 0, 1, 2, -1, -4];
console.log(`3 Sum triplets for [${nums}] are: [${find3SumTriplets(nums)}]`);

nums = [0, 1, 1];
console.log(`3 Sum triplets for [${nums}] are: [${find3SumTriplets(nums)}]`);

nums = [0, 0, 0];
console.log(`3 Sum triplets for [${nums}] are: [${find3SumTriplets(nums)}]`);

nums = [1, 2, 3, 4, 5];
console.log(`3 Sum triplets for [${nums}] are: [${find3SumTriplets(nums)}]`);

nums = [-2, 0, 1, 1, 2, -1, -4, 2];
console.log(`3 Sum triplets for [${nums}] are: [${find3SumTriplets(nums)}]`);

nums = [-4, -2, -2, -1, 0, 1, 2, 2, 2, 3];
console.log(`3 Sum triplets for [${nums}] are: [${find3SumTriplets(nums)}]`);
