/**
 * Date: 2nd Jan, 2026
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
function findLongestSubstrWithUniqueChars(inputStr) {
  if (!inputStr || inputStr.length === 0) return 0;

  const uniqueChars = new Set();
  let start = 0,
    maxLength = 0;

  for (let end = 0; end < inputStr.length; end++) {
    const char = inputStr[end];

    while (uniqueChars.has(char)) {
      uniqueChars.delete(inputStr[start]);
      start++;
    }

    uniqueChars.add(char);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

let str = "abcabcbb";
console.log(
  `Longest Substring length with only unique characters is: ${findLongestSubstrWithUniqueChars(
    str
  )}`
);

str = "bbbb";
console.log(
  `Longest Substring length with only unique characters is: ${findLongestSubstrWithUniqueChars(
    str
  )}`
);

str = "pwwkew";
console.log(
  `Longest Substring length with only unique characters is: ${findLongestSubstrWithUniqueChars(
    str
  )}`
);

str = "geeksforgeek";
console.log(
  `Longest Substring length with only unique characters is: ${findLongestSubstrWithUniqueChars(
    str
  )}`
);
