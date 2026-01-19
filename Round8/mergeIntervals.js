/**
 * Date: 19th Jan, 2025
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
function getMergedIntervals(input) {
  if (!input || input.length === 0) return [];

  const output = [input[0]];
  for (let i = 1; i < input.length; i++) {
    const prev = output[output.length - 1];
    const curr = input[i];

    if (prev[1] >= curr[0]) {
      prev[0] = Math.min(prev[0], curr[0]);
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      output.push(curr);
    }
  }

  return output.map((o) => `[${o}]`);
}

let input = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
let output = getMergedIntervals(input);
console.log(`Merged Intervals of [${input}] becomes [${output}]`);

input = [
  [1, 4],
  [4, 5],
];
output = getMergedIntervals(input);
console.log(`Merged Intervals of [${input}] becomes [${output}]`);

input = [
  [6, 8],
  [1, 9],
  [2, 4],
  [4, 7],
];
output = getMergedIntervals(input);
console.log(`Merged Intervals of [${input}] becomes [${output}]`);

input = [
  [1, 7],
  [2, 5],
  [6, 9],
  [8, 12],
  [13, 15],
  [14, 18],
];
output = getMergedIntervals(input);
console.log(`Merged Intervals of [${input}] becomes [${output}]`);

input = [];
output = getMergedIntervals(input);
console.log(`Merged Intervals of [${input}] becomes [${output}]`);
