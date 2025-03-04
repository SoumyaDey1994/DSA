/**
 * Date: 2nd March, 2025
 * Problem Statement
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
    if(input.length === 0) return [];
    // Sort the intervals in asc order
    input.sort((i1, i2) => i1[0] - i2[0]); // O(nlogn)
    const merged = [input[0]];
    for(let index=1; index<input.length; index++) { // O(n)
        const prev = merged[merged.length - 1];
        const curr = input[index];
        // console.log(prev, curr);
        if(prev[1] >= curr[0]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } 
        else {
            merged.push(curr);
        }
        // console.log(`[${merged}]`);
    }
    return merged;
}

let input = [[1,3],[2,6],[8,10],[15,18]];
let output = mergeIntervals(input);
console.log(`Merged Intervals of [${input}] becomes [${output}]`);

input = [[1,4],[4, 5]];
output = mergeIntervals(input);
console.log(`Merged Intervals of [${input}] becomes [${output}]`);

input = [[6,8],[1,9],[2,4],[4,7]];
output = mergeIntervals(input);
console.log(`Merged Intervals of [${input}] becomes [${output}]`);

input = [[1, 7],[2, 5],[6, 9],[8, 12], [13, 15], [14, 18]];
output = mergeIntervals(input);
console.log(`Merged Intervals of [${input}] becomes [${output}]`);

input = [];
output = mergeIntervals(input);
console.log(`Merged Intervals of [${input}] becomes [${output}]`);
