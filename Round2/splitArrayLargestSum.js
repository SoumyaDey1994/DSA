/**
 * Date: 26th March, 2025
 * Problem Statement: Split Array Largest Sum
 * Given an integer array nums and an integer k.
 * Goal: Split the array into k non-empty continuous subarrays to minimize the largest subarray sum.
 * Return the minimum possible largest sum among these subarrays.
 * Example 1:
 *      nums = [7,2,5,10,8]
 *      k = 2
 *      output: 18
 *      Explanation:
 *          We need to split nums into 2 subarrays such that the largest sum among them is minimized.
 *          Possible splits and their largest sum:
 *          [7,2,5] | [10,8] → max(14,18) = 18 ✅
 * Example 2:
 *      nums = [1,2,3,4,5];
 *      k = 2
 *      output: 9
 *      Explanation:
 *          We need to split nums into 2 subarrays such that the largest sum among them is minimized.
 *          Possible splits and their largest sum:
 *          [1,2,3] | [4,5] → max(6,9) = 9 ✅
 */
function canSplit(nums, k, pivot) {
  let subArrayCount = 1,
    sum = 0;
  // For each num, check curr sum value > pivot sum
  // if yes, increment the subarray count, else continue checking
  // return no of subarray <= k or not
  for (let num of nums) {
    if (sum + num > pivot) {
      subArrayCount++;
      sum = 0;
    }
    sum = sum + num;
  }
  return subArrayCount <= k;
}

function getLargestSum(nums, k) {
  // if list has < k numbers, then its invalid scenario
  if (nums.length < k) return null;
  // initialize low to max of nums
  // high to sum of nums
  let low = Math.max(...nums);
  let high = nums.reduce((acc, val) => acc + val, 0);

  // Loop through, check if with pivot value
  // num array can be split
  while (low < high) {
    const pivot = Math.floor((low + high) / 2);
    if (canSplit(nums, k, pivot)) {
      high = pivot;
    } else {
      low = pivot + 1;
    }
  }
  return low;
}

let nums = [7, 2, 5, 10, 8],
  k = 2;
outputSum = getLargestSum(nums, k);
console.log(
  `Minimized largest sum for [${nums}] with ${k} split is: ${outputSum}`
);

(nums = [1, 2, 3, 4, 5]), (k = 2);
outputSum = getLargestSum(nums, k);
console.log(
  `Minimized largest sum for [${nums}] with ${k} split is: ${outputSum}`
);

(nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]), (k = 3);
outputSum = getLargestSum(nums, k);
console.log(
  `Minimized largest sum for [${nums}] with ${k} split is: ${outputSum}`
);

(nums = [7, 2, 5, 10, 8]), (k = 3);
outputSum = getLargestSum(nums, k);
console.log(
  `Minimized largest sum for [${nums}] with ${k} split is: ${outputSum}`
);

(nums = [1, 4, 4]), (k = 3);
outputSum = getLargestSum(nums, k);
console.log(
  `Minimized largest sum for [${nums}] with ${k} split is: ${outputSum}`
);

(nums = [5]), (k = 2);
outputSum = getLargestSum(nums, k);
console.log(
  `Minimized largest sum for [${nums}] with ${k} split is: ${outputSum}`
);
