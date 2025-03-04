/**
 * Date: 27th February, 2025
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
function getTripCount(bags, maxWeight) {
    // sort the bags
    bags.sort((w1, w2) => w1-w2); // O(nlogn)
    let tripCount=0;
    let start=0, end=bags.length - 1;
    // let groups = [];
    // continue loop untill all bags are covered
    while(start <= end) { // O(n)
        const combined = bags[start] + bags[end];
        // Always consider the heaviest bag first
        // if lightest & heaviest < maxWeight, consider both
        if(combined <= maxWeight) {
            // groups.push([bags[start], bags[end]]);
            start++;
            end--;
        } else {
            // groups.push([bags[end]]);
            end--;
        }
        tripCount++;
    }
    // console.log(groups);
    return tripCount;
}

let maxWeight = 3.0;
let bags = [1.50, 1.99, 2.50, 1.01, 2.30];
let output = getTripCount(bags, maxWeight);
console.log(`No of trips required to carry [${bags}] bags are: ${output}`);

bags = [2.90, 2.80, 2.70, 1.50];
output = getTripCount(bags, maxWeight);
console.log(`No of trips required to carry [${bags}] bags are: ${output}`);

bags = [1.20, 1.80, 2.40, 2.00, 1.00];
output = getTripCount(bags, maxWeight);
console.log(`No of trips required to carry [${bags}] bags are: ${output}`);

bags = [1.01, 2.99, 2.50, 1.49];
output = getTripCount(bags, maxWeight);
console.log(`No of trips required to carry [${bags}] bags are: ${output}`);

bags = [1.10, 1.20, 1.30, 1.40, 1.50, 2.50, 2.60, 2.70, 2.80, 2.90];
output = getTripCount(bags, maxWeight);
console.log(`No of trips required to carry [${bags}] bags are: ${output}`);

bags = [1.10, 1.40, 1.60, 1.80, 2.50, 2.60, 2.70, 2.90];
output = getTripCount(bags, maxWeight);
console.log(`No of trips required to carry [${bags}] bags are: ${output}`);
