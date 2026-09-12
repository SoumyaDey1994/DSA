/**
 * Date: 12th September, 2026
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */
function findTotalNoOfWaysToClimb(noOfSteps) {
  if (!noOfSteps) return;

  const memo = new Map();

  function findCount(steps) {
    if (steps === 0) return 0;
    if (steps === 1 || steps === 2) return steps;

    if (memo.has(steps)) return memo.get(steps);

    const result = findCount(steps - 1) + findCount(steps - 2);
    memo.set(steps, result);
    return result;
  }

  return findCount(noOfSteps);
}

let steps = 3;
let output = findTotalNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 7;
output = findTotalNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 1;
output = findTotalNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 10;
output = findTotalNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 4;
output = findTotalNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 10;
output = findTotalNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 4;
output = findTotalNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 5;
output = findTotalNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);
