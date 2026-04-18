/**
 * Date: 18th April, 2026
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
function findMergedIntervals(input) {
  if (!input || input.length === 0) return [];

  const output = [input[0]];

  for (let i = 1; i < input.length; i++) {
    const prev = output[output.length - 1];
    const curr = input[i];

    if (curr[1] < prev[0]) {
      output.unshift(curr);
    } else if (curr[0] <= prev[1]) {
      prev[0] = Math.min(prev[0], curr[0]);
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      output.push(curr);
    }
  }

  return output.sort((p1, p2) => p1[0] - p2[0]).map((p) => `[${p}]`);
}

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(`Merged Intervals: [${findMergedIntervals(intervals)}]`);

intervals = [
  [1, 4],
  [4, 5],
];
console.log(`Merged Intervals: [${findMergedIntervals(intervals)}]`);

intervals = [
  [6, 8],
  [1, 9],
  [2, 4],
  [4, 7],
];
console.log(`Merged Intervals: [${findMergedIntervals(intervals)}]`);

intervals = [
  [1, 3],
  [4, 7],
  [8, 9],
];
console.log(`Merged Intervals: [${findMergedIntervals(intervals)}]`);

intervals = [
  [2, 7],
  [1, 5],
  [6, 9],
  [8, 12],
  [13, 15],
  [14, 18],
];
console.log(`Merged Intervals: [${findMergedIntervals(intervals)}]`);

intervals = [];
console.log(`Merged Intervals: [${findMergedIntervals(intervals)}]`);

intervals = [
  [4, 8],
  [7, 9],
  [1, 3],
  [12, 18],
  [15, 20],
];
console.log(`Merged Intervals: [${findMergedIntervals(intervals)}]`);
