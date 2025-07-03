/**
 * Date: 3rd July, 2025
 * Given an array of integers nums and an integer target,
 * return the indices of the two numbers such that they add up to the target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1] as nums[0] + nums[1] = 2 + 7 = 9, so the output is [0, 1].
 */
function find2SumIndices(nums, target) {
  if (!nums || nums.length === 0) return;

  const visitedMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (visitedMap.has(complement)) {
      return [visitedMap.get(complement), i];
    }
    visitedMap.set(nums[i], i);
  }
  return [-1];
}

let nums = [2, 7, 11, 15];
let targetSum = 9;
let result = find2SumIndices(nums, targetSum);
console.log(`Indices add upto sum ${targetSum} are: ${result}`);

nums = [3, 2, 4];
targetSum = 6;
result = find2SumIndices(nums, targetSum);
console.log(`Indices add upto sum ${targetSum} are: ${result}`);

nums = [3, 3];
targetSum = 6;
result = find2SumIndices(nums, targetSum);
console.log(`Indices add upto sum ${targetSum} are: ${result}`);

nums = [3, 6];
targetSum = 8;
result = find2SumIndices(nums, targetSum);
console.log(`Indices add upto sum ${targetSum} are: ${result}`);
