/**
 * Date: 14th August, 2026
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

  let minimum = Math.max(...weights);
  let maximum = weights.reduce((acc, curr) => acc + curr, 0);

  let result = -1;
  while (minimum <= maximum) {
    const pivot = Math.floor((minimum + maximum) / 2);
    const isPossibleToShip = canShip(weights, days, pivot);
    if (isPossibleToShip) {
      result = pivot;
      maximum = pivot - 1;
    } else {
      minimum = pivot + 1;
    }
  }

  return result;
}

function canShip(weights, days, pivot) {
  let dayCount = 1,
    total = 0;
  for (const w of weights) {
    if (w + total > pivot) {
      dayCount++;
      total = 0;
    }
    total = total + w;
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
