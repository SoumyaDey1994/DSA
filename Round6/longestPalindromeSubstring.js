/**
 * Date: 8th Nov, 2025
 * Given a string s, find the longest palindromic substring in s. 
 * A palindrome is a string that reads the same forward and backward.
    Example 1:
        Input: "babad"
        Output: "bab" or "aba"
        Explanation: Both "bab" and "aba" are valid palindromic substrings of maximum length 3.

    Example 2:
        Input: "cbbd"
        Output: "bb"
        Explanation: The longest palindromic substring is "bb", with a length of 2.

    Example 3:
        Input: "a"
        Output: "a"
        Explanation: A single character is always a palindrome.

    Example 4:
        Input: "forgeeksskeegfor"
        Output: "geeksskeeg"
        Explanation: The longest palindromic substring is "geeksskeeg", with a length of 10.

    Constraints:
        1 <= s.length <= 1000
        s consists of lowercase English letters.
 */

function findLongestPalindromeSubstr(str, start = 0, end = str.length - 1) {
  if (start > end) return "";
  if (start === end) return str[start];

  if (str[start] === str[end]) {
    const innerPlaindrome = findLongestPalindromeSubstr(
      str,
      start + 1,
      end - 1
    );
    if (innerPlaindrome.length === end - start - 1) {
      return str[start] + innerPlaindrome + str[end];
    }
  }

  const excludeStart = findLongestPalindromeSubstr(str, start + 1, end);
  const excludeEnd = findLongestPalindromeSubstr(str, start, end - 1);

  return excludeStart.length > excludeEnd.length ? excludeStart : excludeEnd;
}

let input = "babad";
console.log(
  `Longest Palindrome Substr of ${input} is: ${findLongestPalindromeSubstr(
    input
  )}`
);

input = "cbbd";
console.log(
  `Longest Palindrome Substr of ${input} is: ${findLongestPalindromeSubstr(
    input
  )}`
);

input = "a";
console.log(
  `Longest Palindrome Substr of ${input} is: ${findLongestPalindromeSubstr(
    input
  )}`
);

input = "forgeeksskeegfor";
console.log(
  `Longest Palindrome Substr of ${input} is: ${findLongestPalindromeSubstr(
    input
  )}`
);

input = "committee";
console.log(
  `Longest Palindrome Substr of ${input} is: ${findLongestPalindromeSubstr(
    input
  )}`
);

input = "abccba";
console.log(
  `Longest Palindrome Substr of ${input} is: ${findLongestPalindromeSubstr(
    input
  )}`
);
