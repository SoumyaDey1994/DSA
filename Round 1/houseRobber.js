/**
 * A thief wants to rob houses along a street. 
 * Each house has a certain amount of money stashed, but adjacent houses are connected with an alarm system. 
 * If two adjacent houses are robbed, the alarm will sound.
 * The goal is to determine the maximum amount of money the thief can rob without triggering the alarm.
 * 
 * I/P: nums = [2, 7, 9, 3, 1]
 * O/P: 12
 * Explaination: Rob houses with money [2, 9, 1] for a total of 2 + 9 + 1 = 12.
 */

function getMaximumAmountWithoutFail(amounts, start=0, memo={}) {
    // Base case
    // If starting point > noOfHouse, its 0 value
    // If starting point = noOfHouse, its last house amount

    if(start >= amounts.length) return 0;
    if(start === amounts.length-1) return amounts[amounts.length-1];

    if(memo[start]) return memo[start];

    // Approach 1: Rob 1st house, skip 2nd & proceed with n-2 houses
    // Apprpach 2: Ignore 1st House, proceed with n-1 houses
    const amount1 = amounts[start] + getMaximumAmountWithoutFail(amounts, start+2, memo);
    const amount2 = getMaximumAmountWithoutFail(amounts, start+1, memo);

    // Return the Max of approach1 & approach2 result
    memo[start] = Math.max(amount1, amount2);
    return memo[start];
}

function getMaximumRobbedAmountIterative(amounts) {
    if(amounts.length === 0) return 0;
    if(amounts.length === 1) return amounts[0];
    // Start from robbing 1st house
    let prev1 = amounts[0];
    let prev2 = 0;
    for(let i=1; i<amounts.length; i++) {
        const currentAmount = Math.max(prev1, prev2 + amounts[i]);
        // console.log("Current Amount=", currentAmount, "Prev1=", prev1, "Prev2=", prev2);
        prev2 = prev1;
        prev1 = currentAmount;
    }
    return prev1;
}

let amounts = [2, 7, 9, 3, 1];
let output = getMaximumAmountWithoutFail(amounts);
console.log(`Max amount can be robbed from [${amounts}] is: ${output}`);

amounts = [5];
output = getMaximumAmountWithoutFail(amounts);
console.log(`Max amount can be robbed from [${amounts}] is: ${output}`);

amounts = [];
output = getMaximumAmountWithoutFail(amounts);
console.log(`Max amount can be robbed from [${amounts}] is: ${output}`);

amounts = [1, 2, 3, 1];
output = getMaximumAmountWithoutFail(amounts);
console.log(`Max amount can be robbed from [${amounts}] is: ${output}`);

amounts = [5, 3, 4, 11, 2];
output = getMaximumAmountWithoutFail(amounts);
console.log(`Max amount can be robbed from [${amounts}] is: ${output}`);

amounts = [3, 10, 2, 1, 20];
output = getMaximumAmountWithoutFail(amounts);
console.log(`Max amount can be robbed from [${amounts}] is: ${output}`);

amounts = [6, 7, 1, 30, 8, 2, 4];
output = getMaximumAmountWithoutFail(amounts);
console.log(`Max amount can be robbed from [${amounts}] is: ${output}`);

amounts = [50, 1, 1, 50];
output = getMaximumRobbedAmountIterative(amounts);
console.log(`Max amount can be robbed from [${amounts}] is: ${output}`);

amounts = [10, 15, 20, 25, 30];
output = getMaximumRobbedAmountIterative(amounts);
console.log(`Max amount can be robbed from [${amounts}] is: ${output}`);

amounts = [200, 201];
output = getMaximumRobbedAmountIterative(amounts);
console.log(`Max amount can be robbed from [${amounts}] is: ${output}`);
