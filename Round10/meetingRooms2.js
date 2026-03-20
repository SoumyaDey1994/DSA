/**
 * Date: 20th March, 2026
 * Problem Statement: Meeting Rooms 1 - Find minimum no of rooms required to host all meetings
 * Given an array of intervals:
 *      intervals[i] = [start, end]
 * Each interval represents a meeting time.
 * Find out minimum rooms required to host all meetings
 * Example 1:
 *      intervals = [[0,30],[5,10],[15,20]]
 *      output: 2
 *      explanation: interval [0, 30] overlap with other meetings, so we need atleast 2 rooms
 * Example 2:
 *      intervals = [[1,5],[8,9],[8,9]]
 *      output: 2
 *      explanation: 2nd & 3rd meeting starts at same time, so we need 2 rooms atleast
 */
function findMinNoOfRooms(intervals) {
  if (!intervals || intervals.length === 0) return 0;

  // get all start & end times in sorted order (ASC)
  const startTimes = intervals.map((intr) => intr[0]).sort((s1, s2) => s1 - s2);
  const endTimes = intervals.map((intr) => intr[1]).sort((e1, e2) => e1 - e2);

  let minRooms = 0,
    roomCount = 0;
  let i = 0,
    j = 0;

  while (i < startTimes.length && j < endTimes.length) {
    // console.log(startTimes[i], endTimes[j]);
    if (startTimes[i] < endTimes[j]) {
      roomCount++;
      i++;
    } else {
      roomCount--;
      j++;
    }
    // console.log(`Room Count: ${roomCount}`);
    minRooms = Math.max(minRooms, roomCount);
  }

  return minRooms;
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
