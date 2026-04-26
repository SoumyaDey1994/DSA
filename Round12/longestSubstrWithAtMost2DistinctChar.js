/**
 * Date: 16th Feb, 2026
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
function findSubstrLength(input) {
  if (!input || input.length === 0) return;

  const indexMap = new Map();
  let left = 0,
    maxLength = -Infinity;

  for (let i = 0; i < input.length; i++) {
    const currChar = input[i];
    indexMap.set(currChar, i);

    if (indexMap.size > 2) {
      const leftMostCharIndex = Math.min(...indexMap.values());
      const leftChar = input[leftMostCharIndex];

      indexMap.delete(leftChar);
      left = leftMostCharIndex + 1;
    }

    maxLength = Math.max(maxLength, i - left + 1);
  }

  return maxLength;
}


let input = "eceba";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findSubstrLength(
    input,
  )}`,
);

input = "ccaabbb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findSubstrLength(
    input,
  )}`,
);

input = "abcbbbbcccbdddadacb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findSubstrLength(
    input,
  )}`,
);

input = "aabbcc";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findSubstrLength(
    input,
  )}`,
);

input = "aaabbbb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findSubstrLength(
    input,
  )}`,
);

input = "zzzz";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findSubstrLength(
    input,
  )}`,
);

input = "lmnopqrst";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findSubstrLength(
    input,
  )}`,
);
