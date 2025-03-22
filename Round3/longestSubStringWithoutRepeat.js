/**
 * Date: 21st March, 2025
 * Given a string s, find the length of the longest substring 
 * that contains only unique characters (i.e., without any repeating characters).

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

    Constraints:
        0 <= s.length <= 10^5
        s consists of English letters, digits, symbols, and spaces.
 */

function getSubstrLength(str) {
  const length = str.length;
  if (length <= 1) return length;

  let maxLength = 0,
    start = 0;
  const visited = new Set();
  for (let end = 0; end < length; end++) {
    const char = str[end];
    //Check if already visited
    while (visited.has(char)) {
      visited.delete(str[start]);
      start++;
    }
    // add char to set
    visited.add(char);
    // Re-calculate maxlength
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

let str = "abcabcbb";
console.log(
  `Length of substring without repeat char is: ${getSubstrLength(str)}`
);

str = "bbbbb";
console.log(
  `Length of substring without repeat char is: ${getSubstrLength(str)}`
);

str = "pwwkew";
console.log(
  `Length of substring without repeat char is: ${getSubstrLength(str)}`
);

str = "geeksforgeeks";
console.log(
  `Length of substring without repeat char is: ${getSubstrLength(str)}`
);
