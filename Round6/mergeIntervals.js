/**
 * Date: 8th Nov, 2025
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

function getMergedIntervals(intervals) {
  if (!intervals || intervals.length === 0) return [];

  let mergedIntervals = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    let prev = mergedIntervals[mergedIntervals.length - 1];
    let curr = intervals[i];

    if (curr[0] <= prev[1]) {
      prev[0] = Math.min(prev[0], curr[0]);
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      mergedIntervals.push(curr);
    }
  }
  return mergedIntervals.map((interval) => `[${interval}]`);
}

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(`Merged Intervals: [${getMergedIntervals(intervals)}]`);

intervals = [
  [1, 4],
  [4, 5],
];
console.log(`Merged Intervals: [${getMergedIntervals(intervals)}]`);

intervals = [
  [6, 8],
  [1, 9],
  [2, 4],
  [4, 7],
];
console.log(`Merged Intervals: [${getMergedIntervals(intervals)}]`);

intervals = [
  [1, 3],
  [4, 7],
  [8, 9],
];
console.log(`Merged Intervals: [${getMergedIntervals(intervals)}]`);

intervals = [
  [2, 7],
  [1, 5],
  [6, 9],
  [8, 12],
  [13, 15],
  [14, 18],
];
console.log(`Merged Intervals: [${getMergedIntervals(intervals)}]`);

intervals = [];
console.log(`Merged Intervals: [${getMergedIntervals(intervals)}]`);
