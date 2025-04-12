/**
 * Date: 12th April, 2025
 * Efficient Janitor Problem - DSA Explanation
 * Problem Statement:
 * A janitor has to carry garbage bags, and each bag has a weight between 1.01 and 3.00 kilograms.
 * The janitor can carry at most N kg in one trip.
 * Find the minimum number of trips required to move all the garbage bags.
 * Example 1:
 *      Input: [1.50, 1.99, 2.50, 1.01, 2.30] 
 *      Output: 3 trips
 *      Explanation: 
            1st trip: (1.01 + 1.99) = 3.00  
            2nd trip: (1.50 + 2.30) = 3.00  
            3rd trip: (2.50 alone)
 * Example 2:
 *      Input: [1.20, 1.80, 2.40, 2.00, 1.00]
 *      Output: 3 trips
 *      Explanation:  
            1st trip: (1.00 + 2.00) = 3.00  
            2nd trip: (1.20 + 1.80) = 3.00  
            3rd trip: (2.40 alone)
 * Example 3:
 *      Input: [2.90, 2.80, 2.70, 1.50]
 *      Output: 4 trips
 *      Explanation: Each heavy bag has to be taken alone.
 */
function getNoOfTrips(weights, maxWeight) {
  if (weights.length === 0) return 0;
  if (weights.length === 1) {
    return weights[0] <= maxWeight ? 1 : 0;
  }

  let left = 0,
    right = weights.length - 1,
    tripCount = 0;
  const sortedWeights = weights.sort((w1, w2) => w1 - w2); // O(nlogn)

  while (left <= right) {
    // O(n)
    // if left+right <= max, consider both
    // else only consider the rightmost weight
    if (sortedWeights[left] + sortedWeights[right] <= maxWeight) {
      left++;
    }
    right--;
    tripCount++;
  }
  return tripCount;
}

let weights = [0.5, 1.99, 2.5, 1.01, 2.3];
let maxWeight = 3;
console.log(`No of trips needed is: ${getNoOfTrips(weights, maxWeight)}`);

weights = [1.2, 1.8, 2.4, 2.0, 1.0];
maxWeight = 3;
console.log(`No of trips needed is: ${getNoOfTrips(weights, maxWeight)}`);

weights = [2.9, 2.8, 2.7, 1.5];
maxWeight = 3;
console.log(`No of trips needed is: ${getNoOfTrips(weights, maxWeight)}`);
