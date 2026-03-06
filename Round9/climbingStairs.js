/**
 * Date: 6th March, 2026
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */
function findNoOfWays(n, memo = new Map()) {
  if (!n || n === 0) return 0;

  if (n === 1 || n === 2) return n;

  const key = n;
  if (memo.has(key)) return memo.get(key);

  const result = findNoOfWays(n - 2) + findNoOfWays(n - 1);
  memo.set(key, result);
  return result;
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

// steps = 10;
// output = getNoOfWaysIterative(steps);
// console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);

// steps = 4;
// output = getNoOfWaysIterative(steps);
// console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);

// steps = 5;
// output = getNoOfWaysIterative(steps);
// console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);
