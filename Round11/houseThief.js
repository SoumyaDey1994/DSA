/**
 * Date: 1st April, 2026
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
function findMaxAmountCanRobbed(input) {
  if (!input || input.length === 0) return 0;

  const memo = new Map();
  function findAmount(startIndex) {
    if (startIndex >= input.length) return 0;
    if (startIndex === input.length - 1) return input[startIndex];

    if (memo.has(startIndex)) return memo.get(startIndex);

    const amountIncludingStart = input[startIndex] + findAmount(startIndex + 2);
    const amountExcludingStart = findAmount(startIndex + 1);

    const result = Math.max(amountIncludingStart, amountExcludingStart);
    memo.set(startIndex, result);
    return result;
  }

  return findAmount(0);
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

input = [10, 15, 3, 12, 1];
maxAmount = findMaxAmountCanRobbed(input);
console.log(`Max amount can be robbed from [${input}] houses: ${maxAmount}`);