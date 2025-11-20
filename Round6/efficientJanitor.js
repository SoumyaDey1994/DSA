/**
 * Date: 15th August, 2025
 * Efficient Janitor Problem - DSA Explanation
 * Problem Statement:
 * A janitor has to carry garbage bags, and each bag has a weight between 1.01 and 3.00 kilograms.
 * The janitor can carry at most N kg in one trip.
 * Find the minimum number of trips required to move all the garbage bags.
 * Example 1:
 *      N: 3.0
 *      Input: [1.50, 1.99, 2.50, 1.01, 2.30] 
 *      Output: 3 trips
 *      Explanation: 
            1st trip: (1.01 + 1.99) = 3.00  
            2nd trip: (1.50 alone)
            3rd trip: (2.30 alone)
            4th trip: (2.50 alone)
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

function findNoOfTrips(bags, maxWeight) {
  if (!bags || bags.length === 0 || maxWeight === 0) return 0;

  bags = bags.sort((w1, w2) => w1 - w2);
  let left = 0,
    right = bags.length - 1;
  let trips = 0;

  while (left <= right) {
    const weight = bags[left] + bags[right];
    if (weight <= maxWeight) {
      left++;
    }
    right--;
    trips++;
  }

  return trips;
}

let maxWeight = 3.0;
let bags = [1.5, 1.99, 2.5, 1.01, 2.3];
let output = findNoOfTrips(bags, maxWeight);
console.log(`No of trips required to carry [${bags}] bags are: ${output}`);

bags = [2.9, 2.8, 2.7, 1.5];
output = findNoOfTrips(bags, maxWeight);
console.log(`No of trips required to carry [${bags}] bags are: ${output}`);

bags = [1.2, 1.8, 2.4, 2.0, 1.0];
output = findNoOfTrips(bags, maxWeight);
console.log(`No of trips required to carry [${bags}] bags are: ${output}`);

bags = [1.01, 2.99, 2.5, 1.49];
output = findNoOfTrips(bags, maxWeight);
console.log(`No of trips required to carry [${bags}] bags are: ${output}`);

bags = [1.1, 1.2, 1.3, 1.4, 1.5, 2.5, 2.6, 2.7, 2.8, 2.9];
output = findNoOfTrips(bags, maxWeight);
console.log(`No of trips required to carry [${bags}] bags are: ${output}`);

bags = [1.1, 1.4, 1.6, 1.8, 2.5, 2.6, 2.7, 2.9];
output = findNoOfTrips(bags, maxWeight);
console.log(`No of trips required to carry [${bags}] bags are: ${output}`);

bags = [1.1, 1.5, 1.8];
output = findNoOfTrips(bags, maxWeight);
console.log(`No of trips required to carry [${bags}] bags are: ${output}`);
