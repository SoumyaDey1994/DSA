/**
 * Date: 9th April, 2025
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */
function getNoOfWaysToClimb(n, memo = new Map()) {
  // base cases:
  if (n === 0) return 0;
  // When climbing 1 or 2 step, only 1 & 2 ways possible respectively
  if (n === 1 || n === 2) return n;

  // check if value already computed for step n
  if (memo.has(n)) return memo.get(n);
  // else. compute the result & save to memo first
  const result = getNoOfWaysToClimb(n - 1) + getNoOfWaysToClimb(n - 2);
  memo.set(n, result);

  return result;
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
