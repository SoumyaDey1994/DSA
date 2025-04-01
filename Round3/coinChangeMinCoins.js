/**
 * Date: 1st April, 2025
 * Given an array of coins of different denominations and an integer amount,
 * return the fewest number of coins needed to make up that amount.
 * If that amount cannot be made, return -1.
 * Example 1:
 *  Input:
 *      coins = [1, 2, 5]
        amount = 11
    Output: 3
    Explanation: The minimum number of coins to make 11 is 5 + 5 + 1 (i.e., 3 coins).
 * Example 2:
 *  Input:
 *      coins = [2]
        amount = 3
    Output: -1
    Explanation: It is not possible to form 3 using only coin 2.
 * Example 3:
 *  Input:
 *      coins = [1]
        amount = 0
    Output: 0
    Explanation: No coins are needed to make an amount of 0.
 */
function getMinCoinsGreedy(coins, amount) {
  if (!coins || coins.length === 0 || amount === 0) return 0;
  // sort coins in decending order
  coins = coins.sort((c1, c2) => c2 - c1);
  let coinCount = 0;
  for (let i = 0; i < coins.length; i++) {
    // O(c): c=coins
    if (amount === 0) break;
    coinCount = coinCount + Math.floor(amount / coins[i]);
    amount = amount % coins[i];
  }
  return amount > 0 ? -1 : coinCount;
}

// 𝑂(𝑁×𝑀) - where N is the number of coins and M is the target amount.
function getMinCoinsDp(coins, amount) { 
  if (!coins || coins.length === 0 || amount === 0) return 0;

  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // Base case: Amount 0 needs 0 coins
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]); // Either take the coin or not
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}

let coins = [1, 2, 5],
  amount = 11;
let minCoins = getMinCoinsGreedy(coins, amount);
console.log(
  `Min no of coins required to get change of ${amount} is: ${minCoins}`
);

(coins = [2]), (amount = 3);
minCoins = getMinCoinsGreedy(coins, amount);
console.log(
  `Min no of coins required to get change of ${amount} is: ${minCoins}`
);

(coins = [1]), (amount = 0);
minCoins = getMinCoinsGreedy(coins, amount);
console.log(
  `Min no of coins required to get change of ${amount} is: ${minCoins}`
);

(coins = [1, 2, 5, 10]), (amount = 28);
minCoins = getMinCoinsGreedy(coins, amount);
console.log(
  `Min no of coins required to get change of ${amount} is: ${minCoins}`
);

(coins = [1, 2, 5, 10]), (amount = 16);
minCoins = getMinCoinsDp(coins, amount);
console.log(
  `Min no of coins required to get change of ${amount} is: ${minCoins}`
);

(coins = [5]), (amount = 3);
minCoins = getMinCoinsDp(coins, amount);
console.log(
  `Min no of coins required to get change of ${amount} is: ${minCoins}`
);
