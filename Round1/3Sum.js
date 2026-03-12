/**
 * Date: 11th Jan, 2025
 * Given an array of integers nums,
 * find all unique triplets (nums[i], nums[j], nums[k]) in the array such that:
 *      1. i <> j <> k
 *      2. nums[i]+nums[j]+nums[k]=0
 * Example:
 *      Input: nums = [-1, 0, 1, 2, -1, -4]
 *      Output: [[-1, -1, 2], [-1, 0, 1]]
 *
 */

function get3Sum(input) {
  const isAllPositive = input.every((num) => num > 0);
  const isAllNegetive = input.every((num) => num < 0);

  if (isAllPositive || isAllNegetive) return [];

  // Sort the i/p nums in asc order
  input.sort((num1, num2) => num1 - num2); // O(nlogn)
  // console.log("Sorted I/P: ", input);
  const length = input.length;
  const triplets = [],
    computed = new Map();
  // Overall complexity - O(nlogn) + O(n^2) = O(n^2)
  for (let i = 0; i < length; i++) {
    // TC - O(n)
    const curr = input[i];
    const complement = 0 - curr;
    for (let j = 1; j < length - 1; j++) {
      // TC - O(n)
      if (input[j] + input[j + 1] === complement) {
        // check if this combination already computed
        if (!computed.has(complement) && !computed.has(curr)) {
          triplets.push([curr, input[j], input[j + 1]]);
          computed.set(complement, curr);
          computed.set(curr, complement);
        }
      }
    }
  }
  return triplets;
}

function get3SumEfficient(input) {
  const isAllPositive = input.every((num) => num > 0);
  const isAllNegetive = input.every((num) => num < 0);

  if (isAllPositive || isAllNegetive) return [];

  // Sort the i/p nums in asc order
  input.sort((num1, num2) => num1 - num2); // O(nlogn)
  const length = input.length;
  const triplets = [];
  for (let index = 0; index < length - 2; index++) {
    // skip the element if same as before element
    if (index > 0 && input[index] === input[index - 1]) continue;

    let left = index + 1,
      right = length - 1;

    while (left < right) {
      const sum = input[index] + input[left] + input[right];
      if (sum === 0) {
        triplets.push([input[index], input[left], input[right]]);

        // skip for duplicates
        while (left < right && input[left] === input[left + 1]) {
          left++;
        }
        while (left < right && input[right] === input[right - 1]) {
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
  return triplets;
}

let nums = [-1, 0, 1, 2, -1, -4];
let triplets = get3SumEfficient(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [0, 1, 1];
triplets = get3SumEfficient(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [0, 0, 0];
triplets = get3SumEfficient(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [1, 2, 3, 4, 5];
triplets = get3SumEfficient(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [-2, 0, 1, 1, 2, -1, -4, 2];
triplets = get3SumEfficient(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);

nums = [-4, -2, -2, -1, 0, 1, 2, 2, 2, 3];
triplets = get3SumEfficient(nums);
console.log(`3Sum triplets of [${nums}] are: `);
console.log(triplets);
