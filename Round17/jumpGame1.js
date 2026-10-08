/**
 * Date: 8th October, 2026
 * Problem Statement: Jump Games I
 * You are given an array nums where:
 *      nums[i] = maximum jump length from index i
 *      Start at index 0
 *      Check if you can reach the last index
 * Example 1:
 *      nums = [2,3,1,1,4]
 *      output: true
 *      Explanation:
 *          From index 0 → jump 2 steps → index 2
 *          From index 1 → jump 3 steps → reach end
 * Example 2:
 *      nums = [3,2,1,0,4]
 *      output: false
 *      Explanation:
 *          You get stuck at index 3 (value = 0)
 *          So, can't reach end
 */
function isPossibleToReachEnd(numbers) {
  if (!numbers || numbers.length === 0) return;

  let currReach = 0,
    maxReach = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (i > currReach) return false;

    currReach = i + numbers[i];
    maxReach = Math.max(maxReach, currReach);
  }

  return maxReach >= numbers.length - 1;
}

let nums = [2, 3, 1, 1, 4];
console.log(
  `With Jumps [${nums}], can reach end: ${isPossibleToReachEnd(nums)}`,
);

nums = [3, 2, 1, 0, 4];
console.log(
  `With Jumps [${nums}], can reach end: ${isPossibleToReachEnd(nums)}`,
);
