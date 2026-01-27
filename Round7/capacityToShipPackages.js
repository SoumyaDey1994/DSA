/**
 * Date: 27th Jan, 2026
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
  if (!weights || weights.length === 0 || days === 0) return 0;

  let minCapacity = Math.max(...weights);
  let maxCapacity = weights.reduce((acc, w) => acc + w, 0);
  let result = null;
  while (minCapacity <= maxCapacity) {
    const pivot = Math.floor((minCapacity + maxCapacity) / 2);
    const { canShipPackage, groups } = checkEligibility(weights, days, pivot);

    if (canShipPackage) {
      result = { capacity: pivot, groups };
      maxCapacity = pivot - 1;
    } else {
      minCapacity = pivot + 1;
    }
  }

  return result;
}

function checkEligibility(weights, days, pivot) {
  let noOfDays = 1,
    sumOfWeights = 0;
  let groups = [],
    group = [];
  for (const weight of weights) {
    if (sumOfWeights + weight > pivot) {
      noOfDays++;
      sumOfWeights = 0;
      groups.push(group);
      group = [];
    }

    sumOfWeights = sumOfWeights + weight;
    group.push(weight);
  }

  if(group.length > 0) {
    groups.push(group);
  }

  return { canShipPackage: noOfDays <= days, groups };
}

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let minDays = 5;
let output = findCapacity(weights, minDays);
console.log(`Min capacity is: ${output?.capacity}`, `Groups: `, output.groups);

weights = [3, 2, 2, 4, 1, 4];
minDays = 3;
output = findCapacity(weights, minDays);
console.log(`Min capacity is: ${output?.capacity}`);

weights = [5, 6];
minDays = 1;
output = findCapacity(weights, minDays);
console.log(`Min capacity is: ${output?.capacity}`);
