/**
 * Date: 19th August, 2026
 * Problem Statement: Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 step or 2 steps.
 * In how many distinct ways can you climb to the top?
 * For a given n value
 *
 * Note: Similar to Fibonacci problem
 */
function findNoOfWaysToClimbIterative(totalSteps) {
  if (!totalSteps || totalSteps === 0) return 0;

  if (totalSteps === 1 || totalSteps === 2) return totalSteps;

  let wayCount1 = 1,
    wayCount2 = 2;
  for (let i = 2; i < totalSteps; i++) {
    const total = wayCount1 + wayCount2;
    wayCount1 = wayCount2;
    wayCount2 = total;
  }

  return wayCount2;
}

let steps = 3;
let output = findNoOfWaysToClimbIterative(steps);
console.log(`No of ways to climb (iterative approach) ${steps} are ${output}`);

steps = 5;
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
