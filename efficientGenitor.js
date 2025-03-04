/**
 * Date: 29th Jan, 2025
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

function getMinAttempts(weights, maxAllowedWeight) {
    const sortedWeights = weights.sort((w1, w2) => w1-w2);
    let low=0, high=sortedWeights.length -1;
    let attempts = 0;
    while(low <= high) {
        if((sortedWeights[low] + sortedWeights[high]) <= maxAllowedWeight) {
            low++; // consider more lowest weights iff more weight can be added
        }
        high--; // always consider highest weight first
        attempts++;
    }
    return attempts;
}


let weights = [1.5, 2.0, 1.2, 1.8];
let maxWeight = 3.0;
let attempts = getMinAttempts(weights, maxWeight);
console.log(`No of attempt required: ${attempts}`);

weights = [1.9, 1.9, 1.1, 1.5];
maxWeight = 3.0;
attempts = getMinAttempts(weights, maxWeight);
console.log(`No of attempt required: ${attempts}`);

weights = [3.0, 3.0, 3.0];
maxWeight = 3.0;
attempts = getMinAttempts(weights, maxWeight);
console.log(`No of attempt required: ${attempts}`);

weights = [1.0, 1.9, 1.1, 0.8, 1.5, 2.0, 1.8, 1.2];
maxWeight = 3.0;
attempts = getMinAttempts(weights, maxWeight);
console.log(`No of attempt required: ${attempts}`);