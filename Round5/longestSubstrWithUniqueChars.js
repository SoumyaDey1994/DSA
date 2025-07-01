/**
 * Date: 1st July, 2025
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

function findLongestSubstrWithUniqueChars(str) {
  if (!str || str.length === 0) return;

  const uniqueSet = new Set();
  const length = str.length;
  let start = 0,
    maxLength = 0;
  // iterate through every char
  for (let end = 0; end < length; end++) {
    const char = str[end];
    // if char already visited, delete start char & increment start
    while (uniqueSet.has(char)) {
      uniqueSet.delete(str[start]);
      start++;
    }
    uniqueSet.add(char);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}


let input = "abcabcbb";
console.log(`Longest Substring length with unique chars is: ${findLongestSubstrWithUniqueChars(input)}`);

input = "bbbbb";
console.log(`Longest Substring length with unique chars is: ${findLongestSubstrWithUniqueChars(input)}`);

input = "pwwkew";
console.log(`Longest Substring length with unique chars is: ${findLongestSubstrWithUniqueChars(input)}`);

input = "geeksforgeek";
console.log(`Longest Substring length with unique chars is: ${findLongestSubstrWithUniqueChars(input)}`);
