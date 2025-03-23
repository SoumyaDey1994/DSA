/**
 * Date: 23rd March, 2025
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
function getLongestPalindromeSubstring(inputStr, start=0, end=inputStr.length-1, memo = new Map()) {
  /**
   * Base cases:
   *      1. str length = 0, return empty string
   *      2. start > end, return empty string
   *      3. start === end, return the char
   */
    if(inputStr.length === 0 || start > end) return '';
    if(start === end) return inputStr[start];

    const key = `${start}-${end}`;
    // If memo has key, return value
    if(memo.has(key)) return memo.get(key);
    // If start & end char is same, check for innter palindrome
    if(inputStr[start] === inputStr[end]) {
        const innerPalindrome = getLongestPalindromeSubstring(inputStr, start+1, end-1, memo);
        if(innerPalindrome.length === (end-start-1)) {
            return inputStr[start] + innerPalindrome + inputStr[end];
        }
    }
    // Check for palindrome including start & excluding end,
    // whichever has greater length, return
    const includeStart = getLongestPalindromeSubstring(inputStr, start+1, end, memo);
    const excludeEnd = getLongestPalindromeSubstring(inputStr, start, end-1, memo);
    const result = includeStart.length > excludeEnd.length ? includeStart: excludeEnd;
    
    memo.set(key, result);
    return memo.get(key);
}

let inputStr = 'babad';
let outoutStr = getLongestPalindromeSubstring(inputStr);
console.log(`Longest Plaindrome Substring without repeat is: ${outoutStr}`);

inputStr = 'cbbd';
outoutStr = getLongestPalindromeSubstring(inputStr);
console.log(`Longest Plaindrome Substring without repeat is: ${outoutStr}`);

inputStr = 'forgeeksskeegfor';
outoutStr = getLongestPalindromeSubstring(inputStr);
console.log(`Longest Plaindrome Substring without repeat is: ${outoutStr}`);

inputStr = 'a';
outoutStr = getLongestPalindromeSubstring(inputStr);
console.log(`Longest Plaindrome Substring without repeat is: ${outoutStr}`);

inputStr = 'ramakanakamar';
outoutStr = getLongestPalindromeSubstring(inputStr);
console.log(`Longest Plaindrome Substring without repeat is: ${outoutStr}`);

inputStr = 'polandisasidnalpqrs';
outoutStr = getLongestPalindromeSubstring(inputStr);
console.log(`Longest Plaindrome Substring without repeat is: ${outoutStr}`);