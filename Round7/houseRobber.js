/**
 * Date: 3rd Jan, 2026
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
function findMaxAmountRobbed(amounts, start = 0, memo = new Map()) {
  if (!amounts || amounts.length === 0) return 0;

  if (start >= amounts.length) return 0;
  if (start === amounts.length - 1) return amounts[start];

  if (memo.has(start)) return memo.get(start);

  const amountIncludingStart =
    amounts[start] + findMaxAmountRobbed(amounts, start + 2);
  const amountExcludingStart = findMaxAmountRobbed(amounts, start + 1);

  const resultAmount = Math.max(amountIncludingStart, amountExcludingStart);
  memo.set(start, resultAmount);

  return resultAmount;
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
