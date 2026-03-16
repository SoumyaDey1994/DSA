/**
 * Date: 16th March, 2026
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
function finMinCoinsDp(coins, amount) {
  if (!coins || coins.length === 0) return;
  if (amount === 0) return 0;

  const aux = new Array(amount + 1).fill(Infinity);
  aux[0] = 0;

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      aux[i] = Math.min(aux[i], 1 + aux[i - coin]);
    }
  }

  return aux[amount];
}

function finMinCoinsGreedy(coins, amount) {
  if (!coins || coins.length === 0) return;

  if (amount === 0) return 0;

  coins.sort((c1, c2) => c2 - c1); // Sort in DESC order
  let count = 0;

  for (let coin of coins) {
    if (amount < coin) {
      continue;
    }

    count = count + Math.floor(amount / coin);
    amount = amount % coin;
  }

  return amount === 0 ? count : -1;
}

let coins = [10, 20, 50];
let amount = 50;
console.log(
  `Min no of coins required to change amount ${amount} is: ${finMinCoinsDp(
    coins,
    amount,
  )}`,
);

coins = [1, 3, 4];
amount = 6;
console.log(
  `Min no of coins required to change amount ${amount} is: ${finMinCoinsDp(
    coins,
    amount,
  )}`,
);

coins = [1, 5, 10];
amount = 57;
console.log(
  `Min no of coins required to change amount ${amount} is: ${finMinCoinsDp(
    coins,
    amount,
  )}`,
);

coins = [1, 2, 5];
amount = 11;
console.log(
  `Min no of coins required to change amount ${amount} is: ${finMinCoinsGreedy(
    coins,
    amount,
  )}`,
);

coins = [2];
amount = 3;
console.log(
  `Min no of coins required to change amount ${amount} is: ${finMinCoinsGreedy(
    coins,
    amount,
  )}`,
);

coins = [2];
amount = 0;
console.log(
  `Min no of coins required to change amount ${amount} is: ${finMinCoinsGreedy(
    coins,
    amount,
  )}`,
);

coins = [2, 5, 10];
amount = 55;
console.log(
  `Min no of coins required to change amount ${amount} is: ${finMinCoinsGreedy(
    coins,
    amount,
  )}`,
);

coins = [1, 2, 5, 10];
amount = 68;
console.log(
  `Min no of coins required to change amount ${amount} is: ${finMinCoinsGreedy(
    coins,
    amount,
  )}`,
);
