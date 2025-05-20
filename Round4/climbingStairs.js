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
function findNoOfWaysToClimb(n, memo = new Map()) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return n;

  const key = n;
  if (memo.has(key)) return memo.get(key);

  const ways = findNoOfWaysToClimb(n - 1) + findNoOfWaysToClimb(n - 2);
  memo.set(key, ways);
  return ways;
}

function findNoOfWaysToClimbIterative(n, memo = new Map()) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return n;

  let step1 = 1,
    step2 = 2;
  for (let step = 3; step <= n; step++) {
    const result = step1 + step2;
    step1 = step2;
    step2 = result;
  }
  return step2;
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

steps = 10;
output = findNoOfWaysToClimbIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);

steps = 4;
output = findNoOfWaysToClimbIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);

steps = 5;
output = findNoOfWaysToClimbIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);
