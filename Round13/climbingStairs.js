/**
 * Date: 17th May, 2026
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */
function findNoOfDistinctWays(n) {
  if (!n || n === 0) return 0;
  if (n === 1 || n === 2) return n;

  let first = 1,
    second = 2;
  let next = null;

  while (n > 2) {
    next = first + second;
    first = second;
    second = next;

    n = n - 1;
  }

  return next;
}

let steps = 3;
let output = findNoOfDistinctWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 7;
output = findNoOfDistinctWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 1;
output = findNoOfDistinctWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 10;
output = findNoOfDistinctWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 4;
output = findNoOfDistinctWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);
