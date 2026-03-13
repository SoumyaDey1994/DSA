/**
 * Date: 13th March, 2026
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
function findMaxAmountRobbed(input) {
  if (!input || input.length === 0) return 0;

  function getAmount(index, memo = new Map()) {
    if (index >= input.length) return 0;
    if (index === input.length - 1) return input[index];

    if (memo.has(index)) return memo.get(index);

    const amountIncludingCurr = input[index] + getAmount(index + 2);
    const amountExcludingCurr = getAmount(index + 1);
    const result = Math.max(amountIncludingCurr, amountExcludingCurr);
    memo.set(index, result);

    return result;
  }

  return getAmount(0);
}

let amounts = [2, 7, 9, 3, 1];
let maxAmount = findMaxAmountRobbed(amounts);
console.log(`Maximum amount can be robbed from [${amounts}] is: ${maxAmount}`);

amounts = [5, 1, 1, 10];
maxAmount = findMaxAmountRobbed(amounts);
console.log(`Maximum amount can be robbed from [${amounts}] is: ${maxAmount}`);

amounts = [1, 2, 3, 1];
maxAmount = findMaxAmountRobbed(amounts);
console.log(`Maximum amount can be robbed from [${amounts}] is: ${maxAmount}`);

amounts = [4, 4, 4, 4];
maxAmount = findMaxAmountRobbed(amounts);
console.log(`Maximum amount can be robbed from [${amounts}] is: ${maxAmount}`);

amounts = [10];
maxAmount = findMaxAmountRobbed(amounts);
console.log(`Maximum amount can be robbed from [${amounts}] is: ${maxAmount}`);

amounts = [2, 8];
maxAmount = findMaxAmountRobbed(amounts);
console.log(`Maximum amount can be robbed from [${amounts}] is: ${maxAmount}`);

amounts = [6, 1, 2, 7, 3, 5, 1, 1, 10];
maxAmount = findMaxAmountRobbed(amounts);
console.log(`Maximum amount can be robbed from [${amounts}] is: ${maxAmount}`);
