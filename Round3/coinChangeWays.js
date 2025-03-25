/**
 * Date: 25th March, 2025
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
function getNoOfWays(coins, amount) {
  // Initialize dp array
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1; // as there can be only 1 way to get 0 amount
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = dp[i] + dp[i - coin];
    }
  }
  return dp[amount];
}

let coins = [1, 2, 5],
  amount = 5;
let output = getNoOfWays(coins, amount);
console.log(`No of ways to get change of amount ${amount} is: ${output}`);

(coins = [2, 3, 5]), (amount = 7);
output = getNoOfWays(coins, amount);
console.log(`No of ways to get change of amount ${amount} is: ${output}`);

(coins = [2]), (amount = 3);
output = getNoOfWays(coins, amount);
console.log(`No of ways to get change of amount ${amount} is: ${output}`);

(coins = [2, 5, 1, 10]), (amount = 20);
output = getNoOfWays(coins, amount);
console.log(`No of ways to get change of amount ${amount} is: ${output}`);
