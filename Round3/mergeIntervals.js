/**
 * Date: 25th March, 2025
 * Problem Statement: Merge Intervals
 * Given an array of intervals where intervals[i] = [start, end],
 * merge all overlapping intervals and return an array of the non-overlapping intervals.
 * Example 1:
 *      Input: [[1,3],[2,6],[8,10],[15,18]]
 *      Output: [[1,6],[8,10],[15,18]]
 * Example 2:
 *      Input:[[1,4],[4,5]]
 *      Output: [[1, 5]]
 * Example: 3:
 *      Input: [[6,8],[1,9],[2,4],[4,7]]
 *      Output: [[1, 9]]
 */

function mergeIntervals(input) {
    const length = input.length;
    if(length <=1) return input;

    let output = [input[0]];
    // Iterate through each interval pair
    for(let curr of input) {
        const prev = output[output.length-1];
        // If prev end > curr start, then its a overlap
        // Hence merge it, else push the pair to output
        if(prev[1] >= curr[0]) {
            prev[1] = Math.max(prev[1], curr[1]);
            prev[0] = Math.min(prev[0], curr[0]);
        } else {
            output.push(curr);
        }
    }
    return output;
}

let input = [[1,3],[2,6],[8,10],[15,18]];
let output = mergeIntervals(input);
console.log(`Merged interval of [${input}] is: [${output.map(o => `[${o}]`)}]`);

input = [[1,4],[4,5]];
output = mergeIntervals(input);
console.log(`Merged interval of [${input}] is: [${output.map(o => `[${o}]`)}]`);

input = [[3, 7],[2, 5],[9,10],[12,18]];
output = mergeIntervals(input);
console.log(`Merged interval of [${input}] is: [${output.map(o => `[${o}]`)}]`);

input = [[6,8],[1,9],[2,4],[4,7]];
output = mergeIntervals(input);
console.log(`Merged interval of [${input}] is: [${output.map(o => `[${o}]`)}]`);
