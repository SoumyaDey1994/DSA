/**
 * Date: 14th September, 2026
 * Problem Statement: Longest Substring with At Most Two Distinct Characters
 * Given a string s,
 * return the length of the longest substring that contains at most two distinct characters.
 * We need to find the longest continuous part of the string (substring)
 * where there are no more than 2 unique characters.
 * Example 1:
 *      Input: "eceba"
 *      Output: 3
 *      Explanation: Longest substring with at most 2 distinct characters is "ece"
 * Example 2:
 *      Input: "ccaabbb"
 *      Output: 5
 *      Explanation: Longest substring with at most 2 distinct characters is "aabbb"
 * Example 3:
 *      Input: "abcbbbbcccbdddadacb"
 *      Output: 10
 *      Explanation: Longest substring with at most 2 distinct characters is "bcbbbbcccb"
 * Example 4:
 *      Input: "aabbcc"
 *      Output: 4
 *      Explanation: Longest substring with at most 2 distinct characters is "aabb" or "bbcc"
 */
function findLongestSubstrLength(inputStr) {
  if (!inputStr || inputStr.length === 0) return;

  const indexMap = new Map();
  let left = 0,
    maxLength = -Infinity;

  for (let right = 0; right < inputStr.length; right++) {
    const currChar = inputStr[right];
    indexMap.set(currChar, right);

    if (indexMap.size > 2) {
      const leftMostCharIndex = Math.min(...indexMap.values());
      const leftMostChar = inputStr[leftMostCharIndex];

      indexMap.delete(leftMostChar);
      left = leftMostCharIndex + 1;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}


let input = "eceba";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findLongestSubstrLength(
    input,
  )}`,
);

input = "ccaabbb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findLongestSubstrLength(
    input,
  )}`,
);

input = "abcbbbbcccbdddadacb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findLongestSubstrLength(
    input,
  )}`,
);

input = "aabbcc";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findLongestSubstrLength(
    input,
  )}`,
);

input = "aaabbbb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findLongestSubstrLength(
    input,
  )}`,
);

input = "zzzz";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findLongestSubstrLength(
    input,
  )}`,
);

input = "lmnopqrst";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findLongestSubstrLength(
    input,
  )}`,
);
