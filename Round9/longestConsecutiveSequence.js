/**
 * Date: 7th March, 2025
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
function findLongestConsecutiveSeqLength(arr) {
  if (!arr || arr.length === 0) return 0;

  const arrSet = new Set(arr);
  const visited = new Set();
  let maxLength = -Infinity,
    length = 1;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (visited.has(num)) continue;

    while (arrSet.has(num - 1)) {
      length++;
      visited.add(num);
      num = num - 1;
    }

    visited.add(num);
    maxLength = Math.max(maxLength, length);
    length = 1;
  }

  return maxLength;
}

let arr = [100, 4, 200, 1, 3, 2];
console.log(
  `Longest Consecutive Sequence length of [${arr}] is: ${findLongestConsecutiveSeqLength(
    arr,
  )}`,
);

arr = [9, 1, 3, 2, 4, 20, 19, 21, 22, 23];
console.log(
  `Longest Consecutive Sequence length of [${arr}] is: ${findLongestConsecutiveSeqLength(
    arr,
  )}`,
);

arr = [5, 6, 7, 8];
console.log(
  `Longest Consecutive Sequence length of [${arr}] is: ${findLongestConsecutiveSeqLength(
    arr,
  )}`,
);

arr = [3, 7, 10, 12, 14];
console.log(
  `Longest Consecutive Sequence length of [${arr}] is: ${findLongestConsecutiveSeqLength(
    arr,
  )}`,
);

arr = [300, 301, 100, 120, 140];
console.log(
  `Longest Consecutive Sequence length of [${arr}] is: ${findLongestConsecutiveSeqLength(
    arr,
  )}`,
);

arr = [300, 301, 100, 104, 140, 101, 233, 102, 322, 124, 103, 105];
console.log(
  `Longest Consecutive Sequence length of [${arr}] is: ${findLongestConsecutiveSeqLength(
    arr,
  )}`,
);
