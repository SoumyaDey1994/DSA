/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 * 
 * Note: Similar to Fibonacci problem
 */

function getNoOfWaysToClimb(steps, memo={}) {
    // Base cases for 1 & 2 steps
    if(steps === 1) return 1;
    if(steps === 2) return 2;

    // if step exists in memo, return count
    if(memo[steps]) return memo[steps];

    memo[steps] = getNoOfWaysToClimb(steps-1) + getNoOfWaysToClimb(steps-2);
    return memo[steps];
}

let steps = 3;
let output = getNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 7;
output = getNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 1;
output = getNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 10;
output = getNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 4;
output = getNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);
