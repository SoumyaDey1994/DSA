/**
 * Date: 26th November, 2026
 * Problem Statement: Sliding Window Maximum
 * Given an integer array nums and an integer k, representing the size of the sliding window.
 * You need to return an array of the maximum values in each sliding window of size k.
 * Example 1:
 *      nums = [1,3,-1,-3,5,3,6,7], k = 3
 *      output: [3,3,5,5,6,7]
 *      Explanation:
 *          Sliding windows are:
 *              [1, 3, -1] → max = 3
 *              [3, -1, -3] → max = 3
 *              [-1, -3, 5] → max = 5
 *              [-3, 5, 3] → max = 5
 *              [5, 3, 6] → max = 6
 *              [3, 6, 7] → max = 7
 */
function findSlidingWindowMaxValues(numbers, k) {
  if (!numbers || numbers.length === 0 || k <= 0) return;

  const dequeue = [];
  const output = [];

  for (let i = 0; i < numbers.length; i++) {
    if (dequeue.length > 0 && dequeue[0] < i - k + 1) {
      dequeue.shift();
    }

    while (
      dequeue.length > 0 &&
      numbers[i] > numbers[dequeue[dequeue.length - 1]]
    ) {
      dequeue.pop();
    }

    dequeue.push(i);

    if (i + 1 >= k) {
      const maxValueIndex = dequeue[0];
      output.push(numbers[maxValueIndex]);
    }
  }

  return output;
}


let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;
console.log(
  `[${nums}] - Maximum nums of sliding window size ${k} are: [${findSlidingWindowMaxValues(
    nums,
    k,
  )}]`,
);

((nums = [4, 2, 12, 3, 8, 7]), (k = 2));
console.log(
  `[${nums}] - Maximum nums of sliding window size ${k} are: [${findSlidingWindowMaxValues(
    nums,
    k,
  )}]`,
);

((nums = [9, 11]), (k = 2));
console.log(
  `[${nums}] - Maximum nums of sliding window size ${k} are: [${findSlidingWindowMaxValues(
    nums,
    k,
  )}]`,
);

((nums = [4, 2, 1, 3, 8, 7, 9, 6, 11]), (k = 2));
console.log(
  `[${nums}] - Maximum nums of sliding window size ${k} are: [${findSlidingWindowMaxValues(
    nums,
    k,
  )}]`,
);

((nums = [4, 2, 1, 3, 8, 7, 9, 6, 11, 5, 4, 15, 18]), (k = 4));
console.log(
  `[${nums}] - Maximum nums of sliding window size ${k} are: [${findSlidingWindowMaxValues(
    nums,
    k,
  )}]`,
);
