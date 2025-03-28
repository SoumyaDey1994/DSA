/**
 * Date: 10th March, 2025
 * Problem Statement: Longest Consecutive Sequence
 * Given an unsorted array of integers.
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

function getLengthOfLongestConsecutiveSubseq(nums) {
  // If no nums, then return length as 0
  if (!nums || nums.length === 0) return 0;

  const numSet = new Set(nums);
  let maxLength = -Infinity;
  // Iterate through each element of nums
  for (let num of nums) {
    // O(n)
    // if num-1 doesn't exists, then consider it as start of subseq
    if (!numSet.has(num - 1)) {
      let curr = num;
      let subSeqLength = 1;
      // increment curr by 1 & check if curr+1 exists in set
      while (numSet.has(curr + 1)) {
        subSeqLength++;
        curr = curr + 1;
      }
      maxLength = Math.max(maxLength, subSeqLength);
    }
  }
  return maxLength;
}

let arr = [100, 4, 200, 1, 3, 2];
let maxLength = getLengthOfLongestConsecutiveSubseq(arr);
console.log(`Longest consecutive subseq length of [${arr}] is: ${maxLength}`);

arr = [9, 1, 3, 2, 4, 20, 19, 21, 22, 23];
maxLength = getLengthOfLongestConsecutiveSubseq(arr);
console.log(`Longest consecutive subseq length of [${arr}] is: ${maxLength}`);

arr = [1, 3, 5, 7, 9];
maxLength = getLengthOfLongestConsecutiveSubseq(arr);
console.log(`Longest consecutive subseq length of [${arr}] is: ${maxLength}`);

arr = [2, 7, 5, 11, 9, 6, 4, 18, 3, 8];
maxLength = getLengthOfLongestConsecutiveSubseq(arr);
console.log(`Longest consecutive subseq length of [${arr}] is: ${maxLength}`);

arr = [];
maxLength = getLengthOfLongestConsecutiveSubseq(arr);
console.log(`Longest consecutive subseq length of [${arr}] is: ${maxLength}`);
