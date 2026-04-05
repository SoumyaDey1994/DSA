/**
 * Date: 20th March, 2026
 * Problem Statement: Jump Games II
 * You are given an array nums where:
 *      nums[i] = maximum jump length from index i
 *      Start at index 0
 *      Find min no of jumps need to reach to end
 *      Return -1 if not possible to reach end
 * Example 1:
 *      nums = [2,3,1,1,4]
 *      output: 2
 *      Explanation:
 *          From index 0 → jump 2 steps → index 2
 *          From index 1 → jump 3 steps → reach index 5 (end)
 *          So, total number of jumps = 2
 * Example 2:
 *      nums = [3,2,1,0,4]
 *      output: -1
 *      Explanation:
 *          You get stuck at index 3 (value = 0)
 *          So, can't reach end
 */
function findMinJumps(nums) {
  if (!nums || nums.length === 0) return -1;

  let jumpCount = 0;
  let currentEnd = 0,
    maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    maxReach = Math.max(maxReach, i + nums[i]);

    if (i === currentEnd) {
      jumpCount++;
      currentEnd = maxReach;
    }

    if (currentEnd === nums.length - 1) return jumpCount;
  }

  return -1;
}

let nums = [2, 3, 1, 1, 4];
console.log(
  `With Jumps [${nums}], attemps to reach end: ${findMinJumps(nums)}`,
);

nums = [3, 2, 1, 0, 4];
console.log(
  `With Jumps [${nums}], attemps to reach end: ${findMinJumps(nums)}`,
);
