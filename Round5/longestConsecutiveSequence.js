/**
 * Date: 30th May, 2025
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

  let maxLength = 0;
  const nums = new Set(arr);
  const visited = new Set();
  let seqLength = 1;
  for (let num of arr) {
    // if already viisted skip
    if (visited.has(num)) continue;

    while (nums.has(num - 1)) {
      visited.add(num);
      seqLength++;
      num--;
    }

    maxLength = Math.max(maxLength, seqLength);
    seqLength = 1;
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
  `Longest Consecutive Sequence of [${arr}] is: ${findLongestConsecutiveSeqLength(arr)}`
);

arr = [7];
console.log(
  `Longest Consecutive Sequence of [${arr}] is: ${findLongestConsecutiveSeqLength(arr)}`
);

arr = [1, 2, 3, 4, 5, 6];
console.log(
  `Longest Consecutive Sequence of [${arr}] is: ${findLongestConsecutiveSeqLength(arr)}`
);

arr = [10, 100, 1000];
console.log(
  `Longest Consecutive Sequence of [${arr}] is: ${findLongestConsecutiveSeqLength(arr)}`
);

arr = [10, 11, 21, 22, 33, 34, 23];
console.log(
  `Longest Consecutive Sequence of [${arr}] is: ${findLongestConsecutiveSeqLength(arr)}`
);
