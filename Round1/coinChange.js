/**
 * Date: 26th January, 2025
 * Given a set of coin denominations and a total amount, 
 * find the minimum number of coins required to make that amount. 
 * If it's not possible, return that the amount cannot be formed.
 * Problem Statement:
 *      You are given an array coins[] of integers representing coin denominations.
 *      You are given an integer amount representing the target sum.
 *      Find the minimum number of coins needed to make the amount.
 * Example 1:
 *      Input: coins = [1, 2, 5], amount = 11
 *      Output: 3
 *      Explanation: The minimum number of coins to make 11 is 3: 5+5+1=11
 */

function findMinCoins(coins, totalAmount) {
    // Sort coins in desc order of their value
    coins = coins.sort((c1, c2) => c2-c1);
    let count = 0;
    // Check with every coin & deduct the original amount each step untill 0
    for(let i=0; i<coins.length; i++) {
        if(totalAmount === 0) break;

        if(totalAmount >= coins[i]) {
            count = count + Math.floor(totalAmount/coins[i]);
            totalAmount = Math.floor(totalAmount%coins[i]);
        }
    }
    return totalAmount === 0 ? count : 'Not Possible';
}

let coins = [1, 2, 5];
let amount = 11;
console.log(`Min no of coins required to change ${amount} is: ${findMinCoins(coins, amount)}`);

coins = [1, 2, 5];
amount = 3;
console.log(`Min no of coins required to change ${amount} is: ${findMinCoins(coins, amount)}`);

coins = [5];
amount = 7;
console.log(`Min no of coins required to change ${amount} is: ${findMinCoins(coins, amount)}`);

coins = [1, 2, 5];
amount = 18;
console.log(`Min no of coins required to change ${amount} is: ${findMinCoins(coins, amount)}`);

coins = [2, 5];
amount = 18;
console.log(`Min no of coins required to change ${amount} is: ${findMinCoins(coins, amount)}`);

coins = [1, 2, 3];
amount = 7;
console.log(`Min no of coins required to change ${amount} is: ${findMinCoins(coins, amount)}`);