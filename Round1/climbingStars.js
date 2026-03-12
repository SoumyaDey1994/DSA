/**
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 * 
 * Note: Similar to Fibonacci problem
 */

function getNoOfStepsToClimb(n, memo={}) {
    // Base case
    if(n===1) return 1;
    if(n===2) return 2;

    // If step value is already computed, return the value without recompute
    if(memo[n]) return memo[n];

    // Total no of ways = Sum of ways to climb n-1 & n-2 steps
    memo[n] = getNoOfStepsToClimb(n-1, memo) + getNoOfStepsToClimb(n-2, memo);
    return memo[n];
}

let top = 2;
let output = getNoOfStepsToClimb(top);
console.log(`No of ways to climb level ${top} are: ${output}`);

top = 3;
output = getNoOfStepsToClimb(top);
console.log(`No of ways to climb level ${top} are: ${output}`);

top = 6;
output = getNoOfStepsToClimb(top);
console.log(`No of ways to climb level ${top} are: ${output}`);

top = 7;
output = getNoOfStepsToClimb(top);
console.log(`No of ways to climb level ${top} are: ${output}`);

function getNoOfStepsToClimbIteration(n) {
    // To climb 1 step, ways=1, 
    // 2 step, ways=2
    let step1 = 1, step2 = 2;
    // Loop through from step 3 to n (step),
    // new sum = ways(step-1) + ways(step-2)
    // step2 = sum, step1= step2
    for(let step=3; step <=n; step++) {
        const sum = step1 + step2;
        step1 = step2;
        step2 = sum;
    }
    return step2;
}

console.log("\n....Iterative Approach....\n");
let level = 2;
let outputSteps = getNoOfStepsToClimbIteration(level);
console.log(`No of ways to climb level ${level} are: ${outputSteps}`);

level = 3;
outputSteps = getNoOfStepsToClimbIteration(level);
console.log(`No of ways to climb level ${level} are: ${outputSteps}`);

level = 6;
outputSteps = getNoOfStepsToClimbIteration(level);
console.log(`No of ways to climb level ${level} are: ${outputSteps}`);

level = 7;
outputSteps = getNoOfStepsToClimbIteration(level);
console.log(`No of ways to climb level ${level} are: ${outputSteps}`);
