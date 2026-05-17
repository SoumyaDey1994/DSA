/**
 * Date: 17th May, 2026
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
function IsPossibleToAttendAllMeetings(intervals) {
  if (!intervals || intervals.length === 0) return;

  intervals.sort((a, b) => a[0] - b[0]); // sort intervals against start time

  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i];

    if (curr[0] < prev[1]) return false;
    prev = curr; // set curr to prev to evaluate next interval
  }

  return true;
}

let intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(
  `Is possible to attned all meetings: ${IsPossibleToAttendAllMeetings(intervals)}`,
);

intervals = [
  [7, 10],
  [2, 4],
];
console.log(
  `Is possible to attned all meetings: ${IsPossibleToAttendAllMeetings(intervals)}`,
);

intervals = [
  [12, 13],
  [16, 18],
  [8, 9],
  [9, 11],
  [15, 16],
];
console.log(
  `Is possible to attned all meetings: ${IsPossibleToAttendAllMeetings(intervals)}`,
);

intervals = [
  [12, 13],
  [16, 18],
  [8, 10],
  [9, 11],
];
console.log(
  `Is possible to attned all meetings: ${IsPossibleToAttendAllMeetings(intervals)}`,
);
