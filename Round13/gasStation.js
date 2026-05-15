/**
 * Date: 15th May, 2026
 * Problem Statement: Gas Station (Circular Tour)
 * You are given two integer arrays:
 *      gas[i] → amount of gas available at station i
 *      cost[i] → gas required to travel from station i to (i + 1)
 * You have a car with an unlimited gas tank, but you start with empty tank.
 * The stations form a circular route.
 * Return the starting gas station index from where you can travel
 * around the circuit once in clockwise direction.
 *      If it is not possible, return -1
 *      If a solution exists, it is guaranteed to be unique
 * Rules:
 *      You can start at any station i
 *      At each station:
 *          First, you fill gas[i]
 *          Then spend cost[i] to go to next station
 *      You must complete the full circle and return to the starting point
 * Example 1:
 *      gas = [1,2,3,4,5], cost = [3,4,5,1,2]
 *      Output: 3
 *      Explanation:
 */
function findStartingPointOfTour(gas, cost) {
  if (!gas || !cost) return;

  let total = 0,
    currTank = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    const delta = gas[i] - cost[i];
    total = total + delta;
    currTank = currTank + delta;

    if (currTank < 0) {
      start = i + 1;
      currTank = 0;
    }
  }

  return total >= 0 ? start : -1;
}

let gas = [1, 2, 3, 4, 5],
  cost = [3, 4, 5, 1, 2];
console.log(`Starting point of tour: ${findStartingPointOfTour(gas, cost)}`);

((gas = [2, 3, 4]), (cost = [3, 4, 3]));
console.log(`Starting point of tour: ${findStartingPointOfTour(gas, cost)}`);

((gas = [5, 1, 2, 3, 4]), (cost = [4, 4, 1, 5, 1]));
console.log(`Starting point of tour: ${findStartingPointOfTour(gas, cost)}`);

((gas = [3, 3, 4]), (cost = [3, 4, 4]));
console.log(`Starting point of tour: ${findStartingPointOfTour(gas, cost)}`);

((gas = [2, 0, 1, 2, 3, 4, 0]), (cost = [0, 1, 0, 0, 0, 0, 11]));
console.log(`Starting point of tour: ${findStartingPointOfTour(gas, cost)}`);

((gas = [4, 6, 7, 4]), (cost = [6, 5, 3, 5]));
console.log(`Starting point of tour: ${findStartingPointOfTour(gas, cost)}`);

((gas = [1, 1, 1, 1]), (cost = [1, 1, 1, 1]));
console.log(`Starting point of tour: ${findStartingPointOfTour(gas, cost)}`);

((gas = [0, 0, 0]), (cost = [1, 2, 3]));
console.log(`Starting point of tour: ${findStartingPointOfTour(gas, cost)}`);
