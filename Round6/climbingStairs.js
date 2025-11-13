/**
 * Date: 13th Nov, 2025
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */

function getNoOfWays(steps) {
  if (steps === 0) return 0;
  if (steps === 1 || steps === 2) return steps;

  return getNoOfWays(steps - 2) + getNoOfWays(steps - 1);
}

function getNoOfWaysIterative(steps) {
  if (steps === 0) return 0;
  if (steps === 1 || steps === 2) return steps;

  let result = 0;
  let r1 = 1,
    r2 = 2;
  for (let i = 2; i < steps; i++) {
    result = r1 + r2;
    r1 = r2;
    r2 = result;
  }

  return result;
}

let steps = 3;
let output = getNoOfWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 7;
output = getNoOfWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 1;
output = getNoOfWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 10;
output = getNoOfWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 4;
output = getNoOfWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 10;
output = getNoOfWaysIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);

steps = 4;
output = getNoOfWaysIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);

steps = 5;
output = getNoOfWaysIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);
