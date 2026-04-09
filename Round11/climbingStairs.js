/**
 * Date: 9th April, 2026
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */
function findNoOfWays(steps) {
  if (!steps || steps === 0) return 0;

  if (steps === 1 || steps === 2) return steps;

  let first = 1,
    second = 2;
  let total = 0;
  while (steps > 2) {
    total = first + second;
    first = second;
    second = total;

    steps = steps - 1;
  }

  return total;
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

steps = 10;
output = findNoOfWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 4;
output = findNoOfWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);

steps = 5;
output = findNoOfWays(steps);
console.log(`No of ways to climb ${steps} are ${output}`);
