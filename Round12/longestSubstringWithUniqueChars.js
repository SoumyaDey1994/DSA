/**
 * Date: 18th April, 2025
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
function findLongestSubstringLengthWithUniqueChar(input) {
  if (input.length === 0) return 0;

  const unique = new Set();
  let left = 0,
    maxLength = 0;

  for (let right = 0; right < input.length; right++) {
    const curr = input[right];
    while (unique.has(curr)) {
      unique.delete(input[left]);
      left++;
    }
    unique.add(curr);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

let input = "abcabcbb";
console.log(
  `Longest Substring length of ${input} with unique chars is: ${findLongestSubstringLengthWithUniqueChar(
    input,
  )}`,
);

input = "bbbbb";
console.log(
  `Longest Substring length of ${input} with unique chars is: ${findLongestSubstringLengthWithUniqueChar(
    input,
  )}`,
);

input = "pwwkew";
console.log(
  `Longest Substring length of ${input} with unique chars is: ${findLongestSubstringLengthWithUniqueChar(
    input,
  )}`,
);

input = "geeksforgeek";
console.log(
  `Longest Substring length of ${input} with unique chars is: ${findLongestSubstringLengthWithUniqueChar(
    input,
  )}`,
);
