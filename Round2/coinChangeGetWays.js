/**
 * Date: 25th February, 2025
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
function getNoOfWaysToChangeCoin(coins, amount) {
    // initialize aux array
    const aux = new Array(amount+1).fill(0);
    // Only 1 way to make amount 0
    aux[0] = 1;
    for(let coin of coins) { // O(n)
        for(let i=coin; i<=amount; i++) {
            aux[i] = aux[i] + aux[i - coin];
        }
    }
    return aux[amount];
}

let coins = [1, 2, 5];
let amount = 5;
let ways = getNoOfWaysToChangeCoin(coins, amount);
console.log(`Ways to change amount ${amount} are ${ways}`);

coins = [2, 3, 5];
amount = 7;
ways = getNoOfWaysToChangeCoin(coins, amount);
console.log(`Ways to change amount ${amount} are ${ways}`);

coins = [2];
amount = 3;
ways = getNoOfWaysToChangeCoin(coins, amount);
console.log(`Ways to change amount ${amount} are ${ways}`);

function getWaysRecursive(coins, n, amount) {
    // if amount is 0, way is 1
    if(amount === 0) return 1;
    // if no of coins <= 0 or amount <0, there is no way
    if(n <= 0 || amount < 0) return 0;

    const includeCurrCoin = getWaysRecursive(coins, n, amount - coins[n-1]);
    const excludeCurrCoin = getWaysRecursive(coins, n-1, amount);
    return includeCurrCoin + excludeCurrCoin;
}

function getNoOfWaysToChangeCoinRecursive(coins, amount) {
    const ways = getWaysRecursive(coins, coins.length, amount);
    return ways;
}

console.log("......Recursive Ways......");
coins = [1, 2, 5];
amount = 5;
ways = getNoOfWaysToChangeCoinRecursive(coins, amount);
console.log(`Ways to change amount ${amount} are ${ways}`);

coins = [2, 3, 5];
amount = 7;
ways = getNoOfWaysToChangeCoinRecursive(coins, amount);
console.log(`Ways to change amount ${amount} are ${ways}`);

coins = [2];
amount = 3;
ways = getNoOfWaysToChangeCoinRecursive(coins, amount);
console.log(`Ways to change amount ${amount} are ${ways}`);
