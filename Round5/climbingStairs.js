/**
 * Date: 21st May, 2025
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */
function getNoOfWays(n, memo = new Map()) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return n;

  if (memo.has(n)) return memo.get(n);

  const ways = getNoOfWays(n - 1) + getNoOfWays(n - 2);
  memo.set(n, ways);
  return ways;
}

function getNoOfWaysIterative(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return n;

  let prev = 1,
    curr = 2;
  let step = 3;
  while (step <= n) {
    const next = prev + curr;
    prev = curr;
    curr = next;
    step++;
  }

  return curr;
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
