/**
 * Date: 24th March, 2025
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
function getCapacity(weights, minDays) {
  const length = weights.length;
  // If no of weights < min days, then it will take mindays only
  if (length <= minDays) return minDays;

  // start with min cap as max weight
  // and max cap as sum of all weights
  let minCap = Math.max(...weights);
  let maxCap = weights.reduce((acc, w) => acc + w, 0);

  while (minCap < maxCap) {
    const pivot = Math.floor((minCap + maxCap) / 2);
    const canShip = canShipWeights(weights, pivot, minDays);
    // if weights can be shipped, check for lower capactity
    // else increment the capacity by 1
    if (canShip) {
      maxCap = pivot;
    } else {
      minCap = pivot + 1;
    }
  }
  return minCap;
}

function canShipWeights(weights, pivot, days) {
  let dayCount = 1,
    capacity = 0;
  // For each weight, check if its within capacity or not
  // if exceeding capacity, increment dayCount & start again
  for (let weight of weights) {
    if (capacity + weight > pivot) {
      capacity = 0;
      dayCount++;
    }
    capacity = capacity + weight;
  }
  return dayCount <= days;
}

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let minDays = 5;
console.log(`Min capacity is: ${getCapacity(weights, minDays)}`);

weights = [3, 2, 2, 4, 1, 4];
minDays = 3;
console.log(`Min capacity is: ${getCapacity(weights, minDays)}`);

weights = [5, 6];
minDays = 1;
console.log(`Min capacity is: ${getCapacity(weights, minDays)}`);
