/**
 * Date: 19th Nov, 2025
 * Problem Statement: Longest Consecutive Sequence
 * given an unsorted array of integers.
 * Your task is to find the length of the longest consecutive sequence (i.e., a subsequence of numbers that appear consecutively in increasing order).
 * Constraints:
 *      1. The sequence must consist of consecutive integers appearing anywhere in the array.
 *      2. The order of elements in the original array does not matter.
 *      3. The solution should have O(n) time complexity.
 * Example 1:
 *      Input: arr = [100, 4, 200, 1, 3, 2]
 *      Output: 4
 *      Explanation: The longest consecutive sequence is [1, 2, 3, 4] (length = 4).
 * Example 2:
 *      Input: arr = [9, 1, 3, 2, 4, 20, 19, 21, 22, 23]
 *      Output: 5
 *      Explanation: The longest consecutive sequence is [19, 20, 21, 22, 23] (length = 5).
 */

function findLongestConsecutiveSeqLength(nums) {
  if (!nums || nums.length === 0) return 0;

  const numSet = new Set(nums);
  const visited = new Set();

  let maxLength = 0,
    start = 0;
  while (start < nums.length) {
    let curr = nums[start];
    if (visited.has(curr)) {
      start++;
      continue;
    }
    let length = 1;
    while (numSet.has(curr - 1)) {
      visited.add(curr);
      length++;
      curr--;
    }
    maxLength = Math.max(maxLength, length);
    start++;
  }

  return maxLength;
}

let arr = [100, 4, 200, 1, 3, 2];
console.log(
  `Longest Consecutive Sequence of [${arr}] is: ${findLongestConsecutiveSeqLength(
    arr
  )}`
);

arr = [9, 1, 3, 2, 4, 20, 19, 21, 22, 23];
console.log(
  `Longest Consecutive Sequence of [${arr}] is: ${findLongestConsecutiveSeqLength(
    arr
  )}`
);

arr = [7];
console.log(
  `Longest Consecutive Sequence of [${arr}] is: ${findLongestConsecutiveSeqLength(
    arr
  )}`
);

arr = [1, 2, 3, 4, 5, 6];
console.log(
  `Longest Consecutive Sequence of [${arr}] is: ${findLongestConsecutiveSeqLength(
    arr
  )}`
);

arr = [10, 100, 1000];
console.log(
  `Longest Consecutive Sequence of [${arr}] is: ${findLongestConsecutiveSeqLength(
    arr
  )}`
);

arr = [10, 11, 21, 22, 33, 34, 23];
console.log(
  `Longest Consecutive Sequence of [${arr}] is: ${findLongestConsecutiveSeqLength(
    arr
  )}`
);
