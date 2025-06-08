/**
 * Date: 7th June, 2025
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
function getLargestSumFromSplitArray(nums, k) {
  if (!nums || nums.length === 0) return;

  let low = Math.max(...nums);
  let high = nums.reduce((acc, curr) => acc + curr, 0);

  while (low < high) {
    const pivot = Math.floor((low + high) / 2);
    const isSplitPossible = canSplit(nums, k, pivot);
    // console.log(pivot, isSplitPossible);
    if (isSplitPossible) {
      high = pivot;
    } else {
      low = pivot + 1;
    }
  }

  return low;
}

function canSplit(nums, k, pivot) {
  let subArr = 1,
    sum = 0;
  for (let num of nums) {
    if (sum + num > pivot) {
      subArr++;
      sum = 0;
    }
    sum = sum + num;
  }

  return subArr <= k;
}

let nums = [7, 2, 5, 10, 8],
  k = 2;
outputSum = getLargestSumFromSplitArray(nums, k);
console.log(
  `Minimized largest sum for [${nums}] with ${k} split is: ${outputSum}`
);

(nums = [1, 2, 3, 4, 5]), (k = 2);
outputSum = getLargestSumFromSplitArray(nums, k);
console.log(
  `Minimized largest sum for [${nums}] with ${k} split is: ${outputSum}`
);

(nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]), (k = 3);
outputSum = getLargestSumFromSplitArray(nums, k);
console.log(
  `Minimized largest sum for [${nums}] with ${k} split is: ${outputSum}`
);

(nums = [7, 2, 5, 10, 8]), (k = 3);
outputSum = getLargestSumFromSplitArray(nums, k);
console.log(
  `Minimized largest sum for [${nums}] with ${k} split is: ${outputSum}`
);

(nums = [1, 4, 4]), (k = 3);
outputSum = getLargestSumFromSplitArray(nums, k);
console.log(
  `Minimized largest sum for [${nums}] with ${k} split is: ${outputSum}`
);

(nums = [5]), (k = 2);
outputSum = getLargestSumFromSplitArray(nums, k);
console.log(
  `Minimized largest sum for [${nums}] with ${k} split is: ${outputSum}`
);
