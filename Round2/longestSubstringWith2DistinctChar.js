/**
 * Date: 22nd April, 2025
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
function getLongestSubstringLength(inputStr) {
  if (!inputStr) return;
  if (inputStr.length <= 2) return inputStr;

  const freqMap = new Map();
  let left = 0,
    maxLength = 0;
  for (let right = 0; right < inputStr.length; right++) {
    const char = inputStr[right];
    freqMap.set(char, right); // track rightmost index of char

    // if no of distinct char exceeds 2
    if (freqMap.size > 2) {
      const leftMostChar = Math.min(...freqMap.values());
      freqMap.delete(inputStr[leftMostChar]); // remove char which is leftmost
      left = leftMostChar + 1;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

let input = "eceba";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${getLongestSubstringLength(
    input
  )}`
);

input = "ccaabbb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${getLongestSubstringLength(
    input
  )}`
);

input = "abcbbbbcccbdddadacb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${getLongestSubstringLength(
    input
  )}`
);

input = "aabbcc";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${getLongestSubstringLength(
    input
  )}`
);

input = "aaabbbb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${getLongestSubstringLength(
    input
  )}`
);

input = "zzzz";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${getLongestSubstringLength(
    input
  )}`
);

input = "lmnopqrst";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${getLongestSubstringLength(
    input
  )}`
);
