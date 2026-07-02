/**
 * Date: 2nd July, 2026
 * Problem Statement: Meeting Rooms 1 - Find overlapping meetings exists or not
 * Given an array of intervals:
 *      intervals[i] = [start, end]
 * Each interval represents a meeting time.
 * Check if a person can attend all meetings.
 * Return true → if no meetings overlap
 * Return false → if any meetings overlap
 *
 * Example 1:
 *      intervals = [[0,30],[5,10],[15,20]]
 *      output: false
 *      explanation: interval [0, 30] overlap with other meetings
 * Example 1:
 *      intervals =  [[7,10],[2,4]]
 *      output: true
 *      explanation: no overlap meeting intervals
 */
function IsMeetingOverlap(intervals) {
  if (!intervals || intervals.length === 0) return;

  intervals.sort((i1, i2) => i1[0] - i2[0]); // sort intervals against their start time

  for (let i = 1; i < intervals.length; i++) {
    const prev = intervals[i - 1];
    const curr = intervals[i];

    if (prev[1] > curr[0]) return true;
  }

  return false;
}

let intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(`Is overlapping Meeting exists: ${IsMeetingOverlap(intervals)}`);

intervals = [
  [7, 10],
  [2, 4],
];
console.log(`Is overlapping Meeting exists: ${IsMeetingOverlap(intervals)}`);

intervals = [
  [5, 10],
  [12, 18],
  [1, 3],
  [2, 6],
];
console.log(`Is overlapping Meeting exists: ${IsMeetingOverlap(intervals)}`);
