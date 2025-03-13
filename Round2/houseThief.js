/**
 * Date: 13th March, 2025
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

function getMaxMoneyStolen(arr, start=0, memo={}) { // O(n)
    //base cases
    if(start >= arr.length) return 0;
    if(start === arr.length - 1) return arr[start];

    if(memo[start]) return memo[start];
    // Case 1: Rob curr house & check remaining n-2 houses
    const moneyIncludingCurrHouse = arr[start] + getMaxMoneyStolen(arr, start+2);
    // Case 2: Consider remaining n-1 houses
    const moneyExcludingCurrHouse = getMaxMoneyStolen(arr, start+1);

    memo[start]= Math.max(moneyIncludingCurrHouse, moneyExcludingCurrHouse)
    return memo[start];
}

function getMaxMoneyStolenIterative(arr) {
    //Base cases
    if(arr.length === 0) return 0;
    if(arr.length === 1) return arr[0];

    let prev1 = arr[0], prev2 = 0;
    for(let i=1; i<arr.length; i++) {
        // max of include current & considering prev, excluding current
        const currentAmount = Math.max(prev2+arr[i], prev1);
        prev2 = prev1;
        prev1 = currentAmount;
    }
    return prev1;
}

let arr = [2, 7, 9, 3, 1];
let output = getMaxMoneyStolen(arr);
console.log(`Max amount can be stolen from [${arr}] houses is: ${output}`);

arr = [5, 1, 1, 10];
output = getMaxMoneyStolen(arr);
console.log(`Max amount can be stolen from [${arr}] houses is: ${output}`);

arr = [3, 10, 3, 1, 2];
output = getMaxMoneyStolen(arr);
console.log(`Max amount can be stolen from [${arr}] houses is: ${output}`);

arr = [8];
output = getMaxMoneyStolen(arr);
console.log(`Max amount can be stolen from [${arr}] houses is: ${output}`);

arr = [2, 3];
output = getMaxMoneyStolen(arr);
console.log(`Max amount can be stolen from [${arr}] houses is: ${output}`);

arr = [1, 4, 5, 7, 3];
output = getMaxMoneyStolenIterative(arr);
console.log(`Max amount can be stolen from [${arr}] houses is: ${output}`);

arr = [9, 6];
output = getMaxMoneyStolenIterative(arr);
console.log(`Max amount can be stolen from [${arr}] houses is: ${output}`);
