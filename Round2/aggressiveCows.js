/**
 * Date: 30th March, 2025
 * Problem Statement: Aggressive Cows (or Allocate Minimum Pages) Problem
 * You are given an array of N stalls (or books with page counts) and C cows (or students).
 * You need to place the cows in these stalls such that the minimum distance between any two cows is maximized.
 * Each stall (or book) has a position (or page count), and cows must be placed in different stalls.
 * The objective is to find the largest minimum distance that can be maintained between any two cows.
 *
 * Example 1:
 *      stalls = [1, 2, 8, 4, 9], cows = 3;
 *      output: 3
 *      Explanation: The best placement: Cows at positions [1, 4, 8]
 *                   Minimum distance = min(4-1, 8-4) = 3
 *                   This is the maximum possible minimum distance.
 * Example 2:
 *      stalls = [10, 1, 2, 7, 5], cows = 2;
 *      output: 9
 *      Explanation: The best placement: Cows at positions [1, 10]
 *                   Minimum distance = min(9) = 9
 *                   This is the maximum possible minimum distance.
 *
 */
function canBePlaced(stalls, cowCount, distance) {
  let totalCows = 1;
  let lastPlaced = stalls[0];
  for (let i = 1; i < stalls.length; i++) {
    if (stalls[i] - lastPlaced >= distance) {
      totalCows++;
      lastPlaced = stalls[i];
    }
    if (totalCows === cowCount) return true;
  }

  return false;
}

function findMinDistance(stalls, cowCount) {
  // Invalid scenarios
  if (stalls.length <= 1 || cowCount === 0 || cowCount > stalls.length)
    return null;
  // Sort the stalls w.r.t their positions
  stalls = stalls.sort((s1, s2) => s1 - s2);

  // consider left = 1 & right = distance b/w first & last stall
  let left = 1;
  let right = stalls[stalls.length - 1] - stalls[0];
  let minDistance = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canBePlaced(stalls, cowCount, mid)) {
      minDistance = mid;
      left = mid + 1; // look for higher distance
    } else {
      right = mid - 1;
    }
  }
  return minDistance;
}

let stalls = [1, 2, 8, 4, 9],
  cows = 3;
console.log(
  `Minimum distance among ${cows} cows should be: ${findMinDistance(
    stalls,
    cows
  )}`
);

(stalls = [10, 1, 2, 7, 5]), (cows = 2);
console.log(
  `Minimum distance among ${cows} cows should be: ${findMinDistance(
    stalls,
    cows
  )}`
);

(stalls = [11]), (cows = 3);
console.log(
  `Minimum distance among ${cows} cows should be: ${findMinDistance(
    stalls,
    cows
  )}`
);

(stalls = [7, 2, 9, 1, 11, 8, 15]), (cows = 4);
console.log(
  `Minimum distance among ${cows} cows should be: ${findMinDistance(
    stalls,
    cows
  )}`
);

(stalls = [7, 2, 9, 11, 15]), (cows = 5);
console.log(
  `Minimum distance among ${cows} cows should be: ${findMinDistance(
    stalls,
    cows
  )}`
);
