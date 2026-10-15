/**
 * Date: 15h October, 2026
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */
function findTotalfWaysToClimb(n) {
  if (!n || n === 0) return 0;

  if (n === 1 || n === 2) return n;

  let ways1 = 1,
    ways2 = 2;

  for (let i = 3; i <= n; i++) {
    const total = ways1 + ways2;
    ways1 = ways2;
    ways2 = total;
  }

  return ways2;
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
