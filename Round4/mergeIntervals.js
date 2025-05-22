/**
 * Date: 22nd May, 2025
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
function findMergedIntervals(intervals) {
  if (!intervals || intervals.length === 0) return [];

  const length = intervals.length;
  if (length === 1) return intervals;

  const output = [intervals[0]];

  for (let i = 1; i < length; i++) {
    const prev = output[output.length - 1];
    const curr = intervals[i];

    if (prev[1] >= curr[0]) {
      prev[0] = Math.min(prev[0], curr[0]);
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      output.push(curr);
    }
  }

  return output.map((interval) => `[${interval}]`);
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
