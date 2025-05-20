/**
 * Date: 21st May, 2025
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
function finMinCoinsGreedy(coins, amount) {
  if (!coins || coins.length === 0 || amount === 0) return -1;
  // sort coins in desc order
  coins = coins.sort((a, b) => b - a);
  let count = 0;

  for (let coin of coins) {
    count = count + Math.floor(amount / coin);
    amount = amount % coin;
  }

  return amount === 0 ? count : -1;
}

function finMinCoinsDp(coins, amount) {
  if (!coins || coins.length === 0 || amount === 0) return -1;

  const dp = new Array(amount + 1).fill(Infinity);
  // 0 coins required to get change of 0
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

let coins = [1, 2, 5];
let amount = 11;
console.log(
  `Min no of coins required to change amount ${amount} is: ${finMinCoinsGreedy(
    coins,
    amount
  )}`
);

coins = [2];
amount = 3;
console.log(
  `Min no of coins required to change amount ${amount} is: ${finMinCoinsGreedy(
    coins,
    amount
  )}`
);

coins = [2];
amount = 0;
console.log(
  `Min no of coins required to change amount ${amount} is: ${finMinCoinsGreedy(
    coins,
    amount
  )}`
);

coins = [2, 5, 10];
amount = 55;
console.log(
  `Min no of coins required to change amount ${amount} is: ${finMinCoinsGreedy(
    coins,
    amount
  )}`
);

coins = [10, 20, 50];
amount = 50;
console.log(
  `Min no of coins required to change amount ${amount} is: ${finMinCoinsDp(
    coins,
    amount
  )}`
);

coins = [1, 3, 4];
amount = 6;
console.log(
  `Min no of coins required to change amount ${amount} is: ${finMinCoinsDp(
    coins,
    amount
  )}`
);
