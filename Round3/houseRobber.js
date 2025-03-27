/**
 * Date: 27th March, 2025
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
function getMaxAmount(
  amounts,
  start = 0,
  end = amounts.length - 1,
  memo = new Map()
) {
  if (amounts.length === 0) return 0;
  if (start > end) return 0;
  if (start === end) return amounts[start];

  if (memo.has(start)) return memo.get(start);

  const includeStart = amounts[start] + getMaxAmount(amounts, start + 2, end);
  const excludeStart = getMaxAmount(amounts, start + 1, end);

  const result = includeStart > excludeStart ? includeStart : excludeStart;
  memo.set(start, result);
  return result;
}

let amounts = [2, 7, 9, 3, 1];
let maxAmount = getMaxAmount(amounts);
console.log(`Maximum amount can be robbed from [${amounts}] is: ${maxAmount}`);

amounts = [5, 1, 1, 10];
maxAmount = getMaxAmount(amounts);
console.log(`Maximum amount can be robbed from [${amounts}] is: ${maxAmount}`);
