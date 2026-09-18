/**
 * Date: 18th September, 2026
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
function findMinRoomsRequired(intervals) {
  if (!intervals || intervals.length === 0) return;

  const startTimes = intervals
    .map((range) => range[0])
    .sort((t1, t2) => t1 - t2);
  const endTimes = intervals.map((range) => range[1]).sort((t1, t2) => t1 - t2);

  let i = 0,
    j = 0;
  let roomCount = 0;

  while (i < startTimes.length && j < endTimes.length) {
    if (startTimes[i] < endTimes[j]) {
      roomCount++;
      i++;
    } else {
      roomCount--;
      j++;
    }
  }

  return Math.max(roomCount, 0);
}

let intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(`Mininum Rooms Required: ${findMinRoomsRequired(intervals)}`);

intervals = [
  [7, 10],
  [2, 4],
];
console.log(`Mininum Rooms Required: ${findMinRoomsRequired(intervals)}`);

intervals = [
  [1, 5],
  [8, 9],
  [8, 9],
];
console.log(`Mininum Rooms Required: ${findMinRoomsRequired(intervals)}`);

intervals = [
  [1, 3],
  [6, 7],
  [3, 5],
];
console.log(`Mininum Rooms Required: ${findMinRoomsRequired(intervals)}`);
