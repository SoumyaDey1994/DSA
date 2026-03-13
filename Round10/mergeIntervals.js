/**
 * Date: 13th March, 2026
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

  const result = [input[0]];

  for (let i = 1; i < input.length; i++) {
    const prev = result[result.length - 1];
    const curr = input[i];

    if (curr[1] < prev[0]) {
      result.unshift(curr);
    } else if (curr[0] <= prev[1]) {
      prev[0] = Math.min(prev[0], curr[0]);
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      result.push(curr);
    }
  }

  return result.sort((p1, p2) => p1[0] - p2[0]).map((r) => `[${r}]`);
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
  [2, 7],
  [1, 5],
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

input = [
  [4, 8],
  [7, 9],
  [1, 3],
  [12, 18],
  [15, 20],
];
output = getMergedIntervals(input);
console.log(`Merged Intervals of [${input}] becomes [${output}]`);
