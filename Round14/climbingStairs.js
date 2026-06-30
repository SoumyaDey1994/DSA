/**
 * Date: 30th June, 2026
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */
function findTotalfWaysToClimb(n) {
  if (!n || n === 0) return;

  const memo = new Map();
  function findSteps(totalSteps) {
    if (totalSteps === 1 || totalSteps === 2) return totalSteps;

    if (memo.has(totalSteps)) return memo.get(totalSteps);

    const total = findSteps(totalSteps - 1) + findSteps(totalSteps - 2);
    memo.set(totalSteps, total);
    return total;
  }

  return findSteps(n);
}

let steps = 3;
let output = findTotalfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 7;
output = findTotalfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 1;
output = findTotalfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 10;
output = findTotalfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 4;
output = findTotalfWaysToClimb(steps);
console.log(`No of ways to climb ${steps} are ${output}`);
