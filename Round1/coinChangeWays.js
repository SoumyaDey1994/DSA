/**
 * Given a set of coin denominations and a total amount,
 * find the number of unique combinations to form the amount.
    Problem Statement:
        You are given an array coins[] of integers representing coin denominations.
        You are given an integer amount representing the target sum.
        Find the number of ways to make the amount.
    Example 1:
    Input: coins = [1, 2, 5], amount = 5
    Output: 4
    Explanation: 
        a. 1+1+1+1+1
        b. 2+1+1+1
        c. 2+2+1
        d. 5
 */

function findNoOfWaysToChangeCoin(coins, totalAmount) {
  // Create a DP array to store the number of ways to make each amount
  const dp = new Array(amount + 1).fill(0);

  // Base case: There is 1 way to make amount 0 (use no coins)
  dp[0] = 1;

  // Iterate over each coin
  for (let coin of coins) {
    // For each coin, update the DP array for all amounts >= coin
    for (let currentAmount = coin; currentAmount <= amount; currentAmount++) {
      dp[currentAmount] += dp[currentAmount - coin];
    }
    //  console.log("Coin: "+ coin + " DP: "+ dp);
  }
  // Return the number of ways to make the target amount
  return dp[amount];
}

let coins = [1, 2, 5];
let amount = 5;
console.log(
  `No of ways to get change of ${amount} is: ${findNoOfWaysToChangeCoin(
    coins,
    amount
  )}`
);

function countWaysRecursive(coins, n, amount) {
  // Base cases
  if (amount === 0) return 1; // One way to make the amount
  if (amount < 0 || n <= 0) return 0; // No solution exists

  // Recursive case
  // Option 1: Include the current coin
  const include = countWaysRecursive(coins, n, amount - coins[n - 1]);

  // Option 2: Exclude the current coin
  const exclude = countWaysRecursive(coins, n - 1, amount);

  // Total ways is the sum of both options
  return include + exclude;
}

// Wrapper function
function countWaysToMakeChangeRecursive(coins, amount) {
  return countWaysRecursive(coins, coins.length, amount);
}

// Example Usage
console.log(countWaysToMakeChangeRecursive([1, 2, 5], 5)); // Output: 4
console.log(countWaysToMakeChangeRecursive([2], 3)); // Output: 0
console.log(countWaysToMakeChangeRecursive([1, 2, 3], 4)); // Output: 4
