/**
 * Date: 30th May, 2025
 * Problem Statement: House Thief (House Robber) Problem
 * A thief wants to rob houses along a street,
 * but he cannot rob two adjacent houses (if he robs one house, he must skip the next one).
 * Given an array of non-negative integers representing the amount of money in each house,
 * determine the maximum amount of money the thief can rob without alerting the police.
 * Input:
 *      An array houses[] where houses[i] represents the amount of money in the i-th house.
 *      The length of the array can be 1 or more.
 * Output:
 *      An integer representing the maximum sum the thief can rob without robbing two consecutive houses.
 * Example 1:
 *      Input: [2, 7, 9, 3, 1]
 *      Output: 12
 *      Explanation: The best way to rob is 2 + 9 + 1 = 12.
 * Example 2:
 *      Input: [5, 1, 1, 10]
 *      Output: 15
 *      Explanation: The best way to rob is 5 + 10 = 15.
 */
function findMaxAmountCanRobbed(input, start = 0, memo = new Map()) {
  if (!input || input.length === 0) return;
  // If single house present, that can be robbed
  if (start >= input.length) return 0;

  if (memo.has(start)) {
    return memo.get(key);
  }

  const amountIncludingStart =
    input[start] + findMaxAmountCanRobbed(input, start + 2);
  const amountExcludingStart = findMaxAmountCanRobbed(input, start + 1);

  const result = Math.max(amountIncludingStart, amountExcludingStart);
  memo.set(start, result);
  return result;
}

let input = [2, 7, 9, 3, 1];
let maxAmount = findMaxAmountCanRobbed(input);
console.log(`Max amount can be robbed from [${input}] houses: ${maxAmount}`);

input = [5, 1, 1, 10];
maxAmount = findMaxAmountCanRobbed(input);
console.log(`Max amount can be robbed from [${input}] houses: ${maxAmount}`);

input = [10];
maxAmount = findMaxAmountCanRobbed(input);
console.log(`Max amount can be robbed from [${input}] houses: ${maxAmount}`);
