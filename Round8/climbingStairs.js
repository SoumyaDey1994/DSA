/**
 * Date: 11th Feb, 2026
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */
function findNoOfWaysToClimbRecursive(steps, memo = new Map()) {
  if (steps <= 2) return steps;

  if (memo.has(steps)) return memo.get(steps);

  const result =
    findNoOfWaysToClimbRecursive(steps - 2) +
    findNoOfWaysToClimbRecursive(steps - 1);
  memo.set(steps, result);
  return result;
}

function findNoOfWaysToClimbIterative(steps) {
  if (steps <= 2) return steps;

  let first = 1,
    second = 2;
  let noOfWays = 0;
  for (let step = 3; step <= steps; step++) {
    noOfWays = first + second;
    first = second;
    second = noOfWays;
  }

  return noOfWays;
}

let steps = 3;
let output = findNoOfWaysToClimbRecursive(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 5;
output = findNoOfWaysToClimbRecursive(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 1;
output = findNoOfWaysToClimbRecursive(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 10;
output = findNoOfWaysToClimbRecursive(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 4;
output = findNoOfWaysToClimbRecursive(steps);
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
