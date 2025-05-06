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
function getLongestSubstringLength(originalStr) {
  // invalid scenarios
  if (!originalStr || originalStr.length < 2) return;

  let left = 0,
    maxLength = 0;
  const freqMap = new Map();

  for (let right = 0; right < originalStr.length; right++) {
    const char = originalStr[right];
    freqMap.set(char, (freqMap.get(char) || 0) + 1);

    if (freqMap.size > 2) {
      const minFreqChar = Math.min(...freqMap.values());
      //   console.log(minFreqChar, originalStr[minFreqChar]);
      freqMap.delete(originalStr[minFreqChar]);
      left = minFreqChar + 1;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

let inputStr = "eceba";
console.log(
  `Longest substring with 2 distinct char is of length: ${getLongestSubstringLength(
    inputStr
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
