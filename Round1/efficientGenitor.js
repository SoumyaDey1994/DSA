/**
 * Date: 23rd Jan, 2025
 * A janitor has to carry garbage bags to a disposal area.
 * Each garbage bag has a weight, and the janitor can carry multiple bags at once, but the total weight of the bags he carries on a single trip must not exceed 3.0 kg.
 * You are given a list of weights of the garbage bags.
 * Your task is to determine the minimum number of trips the janitor needs to make to carry all the garbage bags.
 * 
 * Example:
 *      Weights: [1.5, 2.0, 1.2, 1.8]
 *      Output: 3
 *      Explanation: [[1.5, 1.2], [1.8], [2.0]]
 * 
 */

function getMinTripCount(weights, maxWeight) {
    const sortedWeights = weights.sort((w1, w2) => w1-w2);
    const weightCount = sortedWeights.length;
    let attemptCount = 0;
    let left=0, right = weightCount -1;
    while (left <= right) {
        // If the lightest and heaviest bags can fit in one trip
        if (weights[left] + weights[right] <= maxWeight) {
          left++; // Include the lightest bag in this trip
        }
        // Always include the heaviest bag in this trip
        right--;
        attemptCount++;
      }
    return attemptCount;
}

let weights = [1.5, 2.0, 1.2, 1.8];
let maxWeight = 3.0;
let attempts = getMinTripCount(weights, maxWeight);
console.log(`No of attempt required: ${attempts}`);

weights = [1.9, 1.9, 1.1, 1.5];
maxWeight = 3.0;
attempts = getMinTripCount(weights, maxWeight);
console.log(`No of attempt required: ${attempts}`);

weights = [3.0, 3.0, 3.0];
maxWeight = 3.0;
attempts = getMinTripCount(weights, maxWeight);
console.log(`No of attempt required: ${attempts}`);

weights = [1.0, 1.9, 1.1, 0.8, 1.5, 2.0, 1.8, 1.2];
maxWeight = 3.0;
attempts = getMinTripCount(weights, maxWeight);
console.log(`No of attempt required: ${attempts}`);