/**
 * Date: 16th October, 2026
 * Given an array of integers nums,
 * find all unique triplets (nums[i], nums[j], nums[k]) in the array such that:
 *      1. i <> j <> k
 *      2. nums[i]+nums[j]+nums[k]=0
 * Example:
 *      Input: nums = [-1, 0, 1, 2, -1, -4]
 *      Output: [[-1, -1, 2], [-1, 0, 1]]
 */
function find3SumTriplets(numbers) {
  if (!numbers || numbers.length < 3) return;

  numbers.sort((num1, num2) => num1 - num2); // sort numbers in ASC order

  const complementMap = new Map();
  const output = [];

  for (let i = 0; i < numbers.length; i++) {
    const curr = numbers[i];
    const complement = -curr;

    for (let j = 1; j < numbers.length - 1; j++) {
      const total = numbers[j] + numbers[j + 1];
      if (total === complement) {
        if (!complementMap.has(curr) && !complementMap.has(complement)) {
          output.push([curr, numbers[j], numbers[j + 1]]);
          complementMap.set(curr, complement);
          complementMap.set(complement, curr);
        }
      }
    }
  }

  return output.map((triplet) => `[${triplet}]`);
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
