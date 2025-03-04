/**
 * Date: 24th Feb, 2025
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
const memo = new Map();

function getLongestPalindromeSubstr(input, start=0, end=input.length-1) {
    // Base cases: start> end return '' & start === end, return start char
    if(start > end) return '';
    if(start === end) return input[start];

    const key = `${start}-${end}`;
    if(memo.has(key)) return memo.get(key);
    // If start & end char same, check for palindrome in rem substr
    if(input[start] === input[end]) {
        const remainingPalindrome = getLongestPalindromeSubstr(input, start+1, end-1);
        if(remainingPalindrome.length === end-start-1) {
            return input[start] + remainingPalindrome + input[end]; 
        }
    }
    // Check palindrome substrings excluding start as well as end
    // Whichever is greater, return that
    const excludeStart = getLongestPalindromeSubstr(input, start+1, end);
    const excludeEnd = getLongestPalindromeSubstr(input, start, end-1);
    const result = excludeStart.length > excludeEnd.length ? excludeStart : excludeEnd;
    //Setting to memo set
    memo.set(key, result);
    return result;
}

let input = "babad";
let output = getLongestPalindromeSubstr(input);
console.log(`Longest Palindrome Substring of ${input} is ${output}`);

memo.clear();
input = "cbbd";
output = getLongestPalindromeSubstr(input);
console.log(`Longest Palindrome Substring of ${input} is ${output}`);

memo.clear();
input = "a";
output = getLongestPalindromeSubstr(input);
console.log(`Longest Palindrome Substring of ${input} is ${output}`);

memo.clear();
input = "forgeeksskeegfor";
output = getLongestPalindromeSubstr(input);
console.log(`Longest Palindrome Substring of ${input} is ${output}`);

memo.clear();
input = "ramakanakamar";
output = getLongestPalindromeSubstr(input);
console.log(`Longest Palindrome Substring of ${input} is ${output}`);
