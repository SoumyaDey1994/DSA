/**
 * Date: 14th March, 2026
 * Given an array of distinct coin denominations and an integer amount,
 * determine the total number of ways to make up that amount using any number of the given coins.
 * You may assume that you have an infinite supply of each coin.
 * Example 1:
 *      coins = [1, 2, 5]
        amount = 5
    Output: 4
    Explanation: There are 4 ways to make change for 5.
 * Example 2:
        coins = [2, 3, 5]
        amount = 7
    Output: 2
    Explanation: There are 2 ways to make change for 7.
 * Example 3:
        coins = [2]
        amount = 3
    Output: 0
    Explanation: It's not possible to form 3 using only 2, so the answer is 0.
 */
function findNoOfWays(coins, amount) {
  if (!coins || coins.length === 0 || amount === 0) return 0;

  const memo = new Map();

  function getNoOfWays(index, amount) {
    if (amount === 0) return 1;

    if (amount < 0 || index >= coins.length) return 0;

    const key = `${index}-${amount}`;
    if (memo.has(key)) return memo.get(key);

    const waysIncCurrent = getNoOfWays(index, amount - coins[index]);
    const waysExclCurrent = getNoOfWays(index + 1, amount, memo);

    const result = waysIncCurrent + waysExclCurrent;
    memo.set(key, result);
    return result;
  }

  return getNoOfWays(0, amount);
}

let coins = [1, 2, 5],
  amount = 5;
let output = findNoOfWays(coins, amount);
console.log(`No of ways to get change of amount ${amount} is: ${output}`);

((coins = [2, 3, 5]), (amount = 7));
output = findNoOfWays(coins, amount);
console.log(`No of ways to get change of amount ${amount} is: ${output}`);

((coins = [2]), (amount = 3));
output = findNoOfWays(coins, amount);
console.log(`No of ways to get change of amount ${amount} is: ${output}`);

((coins = [2, 5, 1, 10]), (amount = 20));
output = findNoOfWays(coins, amount);
console.log(`No of ways to get change of amount ${amount} is: ${output}`);
