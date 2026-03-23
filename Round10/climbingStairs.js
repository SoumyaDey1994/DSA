/**
 * Date: 23rd March, 2026
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */
function findNoOfWays(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return n;

  let way1 = 1,
    ways2 = 2;
  let totalWays = 0;
  while (n > 2) {
    totalWays = way1 + ways2;
    way1 = ways2;
    ways2 = totalWays;

    n--;
  }

  return totalWays;
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
