/**
 * Date: 27th June, 2026
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
function findMinCapacity(weights, days) {
  if (!weights || weights.length === 0 || days === 0) return;

  // weights.sort((w1, w2) => w1-w2); // sort weights in ASC order

  let minCap = Math.max(...weights),
    maxCap = weights.reduce((acc, curr) => acc + curr, 0);
  let result = 0;

  while (minCap <= maxCap) {
    const pivot = Math.floor((minCap + maxCap) / 2);
    const canShip = isPossibleToShip(weights, days, pivot);
    if (canShip) {
      result = pivot;
      maxCap = pivot - 1;
    } else {
      minCap = pivot + 1;
    }
  }

  return result;
}

function isPossibleToShip(weights, days, pivot) {
  let dayCount = 1;
  let sumOfWeights = 0;

  for (let i = 0; i < weights.length; i++) {
    const curr = weights[i];
    if (sumOfWeights + curr > pivot) {
      dayCount++;
      sumOfWeights = 0;
    }

    sumOfWeights = sumOfWeights + curr;
  }

  return dayCount <= days;
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
