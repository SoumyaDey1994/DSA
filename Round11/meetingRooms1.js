/**
 * Date: 5th April, 2026
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
  if (!intervals || intervals.length === 0) return null;

  intervals.sort((i1, i2) => i1[0] - i2[0]); // sort meeting intervals against start time
  const executionQueue = [intervals[0]];
  let isOverlap = false;

  for (let i = 1; i < intervals.length; i++) {
    const [prevStart, prevEnd] = executionQueue[executionQueue.length - 1];
    const [currStart, currEnd] = intervals[i];

    if (currStart < prevEnd) {
      isOverlap = true;
      break;
    }

    executionQueue.push(intervals[i]);
  }

  return !isOverlap;
}

let intervals = [[0,30],[5,10],[15,20]];
console.log(`Is possible to attned all meetings: ${IsPossibleToAttendAllMeetings(intervals)}`);

intervals = [[7,10],[2,4]];
console.log(`Is possible to attned all meetings: ${IsPossibleToAttendAllMeetings(intervals)}`);
