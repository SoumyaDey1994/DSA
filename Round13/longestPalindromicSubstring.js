/**
 * Date: 9th May, 2026
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
function findLongestPalindromeSubstr(input) {
  if (!input || input.length === 0) return;

  function findSubString(start, end) {
    if (start > end) return "";
    if (start === end) return input[start];
    if (input[start] === input[end]) {
      const innerPlaindrome = findSubString(start + 1, end - 1);
      if (innerPlaindrome.length === end - start - 1) {
        return input[start] + innerPlaindrome + input[end];
      }
    }

    const excludeStart = findSubString(start + 1, end);
    const excludeEnd = findSubString(start, end - 1);

    return excludeStart.length > excludeEnd.length ? excludeStart : excludeEnd;
  }

  return findSubString(0, input.length - 1);
}

let input = "babad";
console.log(
  `Longest Palindrome Substr of ${input} is: ${findLongestPalindromeSubstr(
    input,
  )}`,
);

input = "cbbd";
console.log(
  `Longest Palindrome Substr of ${input} is: ${findLongestPalindromeSubstr(
    input,
  )}`,
);

input = "a";
console.log(
  `Longest Palindrome Substr of ${input} is: ${findLongestPalindromeSubstr(
    input,
  )}`,
);

input = "forgeeksskeegfor";
console.log(
  `Longest Palindrome Substr of ${input} is: ${findLongestPalindromeSubstr(
    input,
  )}`,
);

input = "committee";
console.log(
  `Longest Palindrome Substr of ${input} is: ${findLongestPalindromeSubstr(
    input,
  )}`,
);

input = "abccba";
console.log(
  `Longest Palindrome Substr of ${input} is: ${findLongestPalindromeSubstr(
    input,
  )}`,
);

input = "committee";
console.log(
  `Longest Palindrome Substr of ${input} is: ${findLongestPalindromeSubstr(
    input,
  )}`,
);
