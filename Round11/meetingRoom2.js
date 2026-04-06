/**
 * Date: 6th April, 2026
 * Problem Statement: Meeting Rooms 2 - Find minimum no of rooms required to host all meetings
 * Given an array of intervals:
 *      intervals[i] = [start, end]
 * Each interval represents a meeting time.
 * Find out minimum rooms required to host all meetings
 * Example 1:
 *      intervals = [[0,30],[5,10],[15,20]] ==> [[0, 5, 15], [10, 20, 30]]
 *      output: 2
 *      explanation: interval [0, 30] overlap with other meetings, so we need atleast 2 rooms
 * Example 2:
 *      intervals = [[1,5],[8,9],[8,9]]
 *      output: 2
 *      explanation: 2nd & 3rd meeting starts at same time, so we need 2 rooms atleast
 */
function findMinNoOfRooms(intervals) {
  if (!intervals || intervals.length === 0) return 0;

  const startIntervals = intervals
    .map((pair) => pair[0])
    .sort((s1, s2) => s1 - s2);
  const endIntervals = intervals
    .map((pair) => pair[1])
    .sort((e1, e2) => e1 - e2);

  let roomCount = 0,
    i = 0,
    j = 0;

  while (i < startIntervals.length && j < endIntervals.length) {
    if (startIntervals[i] < endIntervals[j]) {
      roomCount++;
      i++;
    } else {
      roomCount--;
      j++;
    }
  }

  roomCount = Math.max(0, roomCount);
  return roomCount;
}

let intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(`Mininum Rooms Required: ${findMinNoOfRooms(intervals)}`);

intervals = [
  [7, 10],
  [2, 4],
];
console.log(`Mininum Rooms Required: ${findMinNoOfRooms(intervals)}`);

intervals = [
  [1, 5],
  [8, 9],
  [8, 9],
];
console.log(`Mininum Rooms Required: ${findMinNoOfRooms(intervals)}`);
