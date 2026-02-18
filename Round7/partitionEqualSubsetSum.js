/**
 * Date: 18th Feb, 2026
 * Problem Statement: Partition Equal Subset Sum
 * Given an integer array nums, determine whether it can be divided into two subsets
 * such that the sum of elements in both subsets is equal.
 * You may use each element at most once.
 * Return:
 *      true → if such partition exists
 *      false → otherwise
 * Example 1:
 *      nums = [1, 5, 11, 5]
 *      output: true
 *      explanation:
 *          sum = 22, target = 11
 *          subnets: [1,5,5] = 11, [11] = 11
 *          Hence, partition exists
 */
function isEqualSumPartitionExists(nums) {
  if (!nums || nums.length < 2) return false;

  const elementSum = nums.reduce((acc, curr) => acc + curr, 0);

  // Odd sum cannot have equal partition
  if (elementSum % 2 === 1) return false;

  const target = elementSum / 2;

  const dp = new Array(target + 1).fill(false);

  dp[0] = true; // sum 0 is possible without picking any element
  for (let num of nums) {
    for (let i = target; i >= num; i--) {
      dp[i] = dp[i] || dp[i - num];
    }
  }
  //   console.log(dp);
  return dp[target];
}

let nums = [1, 5, 11, 5];
console.log(
  `Is equal partition exists in list [${nums}]: ${isEqualSumPartitionExists(nums)}`,
);

nums = [2, 5, 9];
console.log(
  `Is equal partition exists in list [${nums}]: ${isEqualSumPartitionExists(nums)}`,
);

nums = [4];
console.log(
  `Is equal partition exists in list [${nums}]: ${isEqualSumPartitionExists(nums)}`,
);

nums = [2, 2, 2, 2];
console.log(
  `Is equal partition exists in list [${nums}]: ${isEqualSumPartitionExists(nums)}`,
);

nums = [1, 2, 5];
console.log(
  `Is equal partition exists in list [${nums}]: ${isEqualSumPartitionExists(nums)}`,
);

nums = [3, 3, 3, 4, 5];
console.log(
  `Is equal partition exists in list [${nums}]: ${isEqualSumPartitionExists(nums)}`,
);
