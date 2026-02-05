/**
 * Date: 5th Feb, 2026
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */

function findNoOfWaysToClimb(steps) {
  if (!steps || steps === 0) return 0;

  function findWays(stepCount, memo) {
    if (stepCount === 1) return 1;
    if (stepCount === 2) return 2;

    if (memo.has(stepCount)) return memo.get(stepCount);

    const result =
      findWays(stepCount - 2, memo) + findWays(stepCount - 1, memo);
    memo.set(stepCount, result);
    return result;
  }

  return findWays(steps, new Map());
}

function findNoOfWaysToClimbIterative(steps) {
  if (!steps || steps === 0) return 0;

  if (steps === 1 || steps === 2) return steps;

  let ways1 = 1,
    ways2 = 2;
  for (let i = 3; i <= steps; i++) {
    const total = ways1 + ways2;
    ways1 = ways2;
    ways2 = total;
  }

  return ways2;
}

let steps = 3;
let output = findNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 7;
output = findNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 1;
output = findNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 10;
output = findNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 4;
output = findNoOfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 3;
output = findNoOfWaysToClimbIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);

steps = 10;
output = findNoOfWaysToClimbIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);

steps = 4;
output = findNoOfWaysToClimbIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);

steps = 5;
output = findNoOfWaysToClimbIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);
