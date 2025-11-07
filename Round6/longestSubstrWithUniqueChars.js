/**
 * Date: 7th Nov, 2025
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
function findLongestSubstrWithUniqueChars(input) {
  if (!input || input.length === 0) return;

  const visited = new Set();
  let start = 0,
    targetLength = 0;
  const length = input.length - 1;
//   let targetSubstr = "";
  for (let end = 0; end <= length; end++) {
    const curr = input[end];

    while (visited.has(curr)) {
      visited.delete(input[start]);
      start++;
    }

    visited.add(curr);
    // if(end - start + 1 > targetLength) {
    //     targetLength = end - start + 1;
    //     targetSubstr = input.slice(start, end+1);
    // }
    targetLength = Math.max(targetLength, end - start + 1);
  }

  //   console.log(targetSubstr);
  return targetLength;
}

let input = "abcabcbb";
console.log(
  `Longest Substring length of ${input} with unique chars is: ${findLongestSubstrWithUniqueChars(
    input
  )}`
);

input = "bbbbb";
console.log(
  `Longest Substring length of ${input} with unique chars is: ${findLongestSubstrWithUniqueChars(
    input
  )}`
);

input = "pwwkew";
console.log(
  `Longest Substring length of ${input} with unique chars is: ${findLongestSubstrWithUniqueChars(
    input
  )}`
);

input = "geeksforgeek";
console.log(
  `Longest Substring length of ${input} with unique chars is: ${findLongestSubstrWithUniqueChars(
    input
  )}`
);
