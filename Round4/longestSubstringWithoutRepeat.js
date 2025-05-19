/**
 * Date: 19th May, 2025
 * Problem Statement: Longest Substring Without Repeat
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
function findLongestSubstrWithoutRepeat(str) {
  if (!str || str.length === 0) return;

  const uniqCharSet = new Set();
  let start = 0,
    maxLength = 0;

  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    while (uniqCharSet.has(char)) {
      uniqCharSet.delete(str[start]);
      start++;
    }
    uniqCharSet.add(char);
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

let str = "abcabcbb";
console.log(
  `Longest Substr of ${str} length without repeat is: ${findLongestSubstrWithoutRepeat(
    str
  )}`
);

str = "bbbbb";
console.log(
  `Longest Substr of ${str} length without repeat is: ${findLongestSubstrWithoutRepeat(
    str
  )}`
);

str = "pwwkew";
console.log(
  `Longest Substr of ${str} length without repeat is: ${findLongestSubstrWithoutRepeat(
    str
  )}`
);

str = "geeksforgeeks";
console.log(
  `Longest Substr of ${str} length without repeat is: ${findLongestSubstrWithoutRepeat(
    str
  )}`
);

str = "bottom";
console.log(
  `Longest Substr of ${str} length without repeat is: ${findLongestSubstrWithoutRepeat(
    str
  )}`
);

str = "alcohol";
console.log(
  `Longest Substr of ${str} length without repeat is: ${findLongestSubstrWithoutRepeat(
    str
  )}`
);

str = "committee";
console.log(
  `Longest Substr of ${str} length without repeat is: ${findLongestSubstrWithoutRepeat(
    str
  )}`
);
