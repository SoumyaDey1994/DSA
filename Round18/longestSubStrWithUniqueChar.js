/**
 * Date: 3rd November, 2026
 * Problem Statement: Longest Substring with Unique Chars (Without Repeat)
 * Given a string, 
 * find the length of the longest substring that contains only unique characters (i.e., without any repeating characters).
 *  Constraints:
        0 <= s.length <= 10^5
        s consists of English letters, digits, symbols, and spaces.
    Example 1:
        Input: "abcabcbb"
        Output: 3
        Explanation: The longest substring without repeating characters is "abc", which has a length of 3.

    Example 2:
        Input: "bbbbb"
        Output: 1
        Explanation: The longest substring without repeating characters is "b", which has a length of 1.

    Example 3:
        Input: "pwwkew"
        Output: 3
        Explanation: The longest substring without repeating characters is "wke", which has a length of 3.
        (Note that "pwke" is also valid, but we are looking for a contiguous substring.)
 */
function getLongestSubstrWithoutRepeat(inputStr) {
  if (!inputStr || inputStr.length === 0) return;

  const unique = new Set();
  let left = 0,
    maxLength = -Infinity;

  for (let i = 0; i < inputStr.length; i++) {
    const currChar = inputStr[i];
    while (unique.has(currChar)) {
      unique.delete(inputStr[left]);
      left++;
    }

    unique.add(currChar);
    maxLength = Math.max(maxLength, i - left + 1);
  }

  return maxLength;
}

let input = "abcabcbb";
console.log(
  `Longest Substring length of ${input} with unique chars is: ${getLongestSubstrWithoutRepeat(
    input,
  )}`,
);

input = "bbbbb";
console.log(
  `Longest Substring length of ${input} with unique chars is: ${getLongestSubstrWithoutRepeat(
    input,
  )}`,
);

input = "pwwkew";
console.log(
  `Longest Substring length of ${input} with unique chars is: ${getLongestSubstrWithoutRepeat(
    input,
  )}`,
);

input = "geeksforgeek";
console.log(
  `Longest Substring length of ${input} with unique chars is: ${getLongestSubstrWithoutRepeat(
    input,
  )}`,
);
