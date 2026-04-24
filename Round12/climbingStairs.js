/**
 * Date: 24th April, 2026
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */
function findNoOfWays(n) {
  if (!n || n === 0) return 0;

  const memo = new Map();

  function findWays(steps) {
    if (steps === 1 || steps === 2) return steps;

    const key = steps;
    if (memo.has(key)) return memo.get(key);

    const result = findNoOfWays(steps - 2) + findNoOfWays(steps - 1);
    memo.set(key, result);
    return result;
  }

  return findWays(n);
}

let steps = 3;
let output = findNoOfWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 7;
output = findNoOfWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 1;
output = findNoOfWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 10;
output = findNoOfWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 4;
output = findNoOfWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);
