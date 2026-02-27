/**
 * Date: 27th Feb, 2026
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
function findMinCapacity(weights, dayLimit) {
  if (!weights || weights.length === 0 || dayLimit === 0) return null;

  weights.sort((w1, w2) => w1 - w2); // sort weights in ASC order
  let min = Math.max(...weights);
  let max = weights.reduce((acc, curr) => acc + curr, 0);
  let result = -1;

  while (min <= max) {
    const pivot = Math.floor((min + max) / 2);
    const canShip = canShipPackages(weights, dayLimit, pivot);
    if (canShip) {
      result = pivot;
      max = pivot - 1;
    } else {
      min = pivot + 1;
    }
  }

  return result;
}

function canShipPackages(weights, dayLimit, pivot) {
  let dayCount = 1,
    sum = 0;
  for (let weight of weights) {
    if (sum + weight > pivot) {
      dayCount++;
      sum = 0;
    }

    sum = sum + weight;
  }

  return dayCount <= dayLimit;
}

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let minDays = 5;
let output = findMinCapacity(weights, minDays);
console.log(`Min capacity is: ${output}`);

weights = [3, 2, 2, 4, 1, 4];
minDays = 3;
output = findMinCapacity(weights, minDays);
console.log(`Min capacity is: ${output}`);

weights = [5, 6];
minDays = 1;
output = findMinCapacity(weights, minDays);
console.log(`Min capacity is: ${output}`);
