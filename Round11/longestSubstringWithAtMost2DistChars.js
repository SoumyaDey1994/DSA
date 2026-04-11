/**
 * Date: 11th April, 2026
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
function findLongestSubstr(input, uniqueCharCount = 2) {
  if (!input || input.length === 0) return 0;

  const indexMap = new Map();
  let maxLength = -Infinity,
    left = 0;

  for (let i = 0; i < input.length; i++) {
    const currChar = input[i];
    indexMap.set(currChar, i);

    const size = indexMap.size;

    if (size > uniqueCharCount) {
      const leftMostCharIndex = Math.min(...indexMap.values());
      const leftMostChar = input[leftMostCharIndex];
      indexMap.delete(leftMostChar);
      left = leftMostCharIndex + 1;
    }

    maxLength = Math.max(maxLength, i - left + 1);
  }

  return maxLength;
}

let input = "eceba";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findLongestSubstr(
    input,
  )}`,
);

input = "ccaabbb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findLongestSubstr(
    input,
  )}`,
);

input = "abcbbbbcccbdddadacb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findLongestSubstr(
    input,
  )}`,
);

input = "aabbcc";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findLongestSubstr(
    input,
  )}`,
);

input = "aaabbbb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findLongestSubstr(
    input,
  )}`,
);

input = "zzzz";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findLongestSubstr(
    input,
  )}`,
);

input = "lmnopqrst";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findLongestSubstr(
    input,
  )}`,
);
