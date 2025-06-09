/**
 * Date: 9th June, 2025
 * Problem Statement: Capacity To Ship Packages Within D Days
 * Given an array weights where weights[i] represents the weight of the i-th package.
 * A ship can carry packages in order (i.e., it cannot reorder them),
 * and we must ship all packages within D days.
 * Find the minimum ship capacity (weight limit) required so that
 * all packages can be shipped within D days.
 * Example 1:
 *      weights = [1,2,3,4,5,6,7,8,9,10];
 *      D = 5
 *      output: 15
 *      Explanation:
 *          One possible way to split the packages into 5 days is:
 *              [1,2,3,4,5] | [6,7] | [8] | [9] | [10]
 *          Each subarray represents a day’s shipment. Hence capacity is 15
 * Example 2:
 *      weights = [3,2,2,4,1,4];
 *      D = 3
 *      output: 6
 *      Explanation:
 *          The minimum capacity required is 6, and one way to split is:
 *              [3,2] | [2,4] | [1,4]
 */
function findCapacity(weights, days) {
  if (!weights || weights.length === 0 || days === 0) return;

  let low = Math.max(...weights);
  let high = weights.reduce((sum, w) => sum + w, 0);

  while (low < high) {
    const pivot = Math.floor((low + high) / 2);
    if (canShip(weights, days, pivot)) {
      high = pivot;
    } else {
      low = pivot + 1;
    }
  }

  return low;
}

function canShip(weights, days, pivot) {
  let sumWeight = 0,
    daysRequired = 1;
  for (let weight of weights) {
    if (weight + sumWeight > pivot) {
      daysRequired++;
      sumWeight = 0;
    }
    sumWeight = sumWeight + weight;
  }

  return daysRequired <= days;
}

let weights = [3, 2, 2, 4, 1, 4];
let days = 3;
console.log(
  `Minimum capacity needed to ship within ${days} days is: ${findCapacity(
    weights,
    days
  )}`
);

weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
days = 5;
console.log(
  `Minimum capacity needed to ship within ${days} days is: ${findCapacity(
    weights,
    days
  )}`
);

weights = [5, 6];
days = 1;
console.log(
  `Minimum capacity needed to ship within ${days} days is: ${findCapacity(
    weights,
    days
  )}`
);
