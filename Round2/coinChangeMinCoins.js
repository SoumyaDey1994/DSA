/**
 * Date: 25th February, 2025
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

function getMinCoinsRequired(coins, amount) {
    // return 0 if amount is 0
    if(amount === 0) return 0;
    let countOfCoins = 0;
    // Sort the coins in descending order
    coins = coins.sort((c1, c2) => c2-c1); // O(nlogn)
    for(let coin of coins) { // O(n)
        if(amount === 0)
            break;
        countOfCoins += Math.floor(amount/coin);
        amount =  amount%coin;
    }
    // If amount is not 0, return -1, else return count
    return amount === 0 ? countOfCoins : -1;
}

let coins = [1, 2, 5];
let amount = 11;
console.log(`Min no of coins required to change amount ${amount} is: ${getMinCoinsRequired(coins, amount)}`);

coins = [2];
amount = 3;
console.log(`Min no of coins required to change amount ${amount} is: ${getMinCoinsRequired(coins, amount)}`);

coins = [2];
amount = 0;
console.log(`Min no of coins required to change amount ${amount} is: ${getMinCoinsRequired(coins, amount)}`);

coins = [2, 5, 10];
amount = 55;
console.log(`Min no of coins required to change amount ${amount} is: ${getMinCoinsRequired(coins, amount)}`);

coins = [10, 20, 50];
amount = 50;
console.log(`Min no of coins required to change amount ${amount} is: ${getMinCoinsRequired(coins, amount)}`);

coins = [1, 3, 4];
amount = 6;
console.log(`Min no of coins required to change amount ${amount} is: ${getMinCoinsRequired(coins, amount)}`);
