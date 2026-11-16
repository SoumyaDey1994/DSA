/**
 * Date: 16th November, 2026
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */
function findNoOfWaysToClimbIterative(steps) {
  if (!steps || steps === 0) return 0;

  if (steps === 1 || steps === 2) return steps;

  let way1 = 1,
    way2 = 2;
  while (steps > 2) {
    let next = way1 + way2;
    way1 = way2;
    way2 = next;

    steps--;
  }

  return way2;
}

steps = 3;
output = findNoOfWaysToClimbIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);

steps = 10;
output = findNoOfWaysToClimbIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);

steps = 4;
output = findNoOfWaysToClimbIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);

steps = 5;
output = findNoOfWaysToClimbIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);

steps = 18;
output = findNoOfWaysToClimbIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);
