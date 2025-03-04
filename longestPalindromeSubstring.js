/**
 * Input: s = "abccbabac"
 * Output: "abccba"
 */

function getLongestPalindromeSubstr(inputStr, start, end) {
    // Base case: single character or empty substring
    if (start > end) return '';
    if (start === end) return inputStr[start];

    // Case 1: Characters at start and end match
    if (inputStr[start] === inputStr[end]) {
        const innerPalindrome = getLongestPalindromeSubstr(inputStr, start + 1, end - 1);
        if (innerPalindrome.length === (end - start - 1)) {
            return inputStr[start] + innerPalindrome + inputStr[end];
        }
    }

    // Case 2: Check excluding one character from either side
    const excludeEnd = getLongestPalindromeSubstr(inputStr, start, end - 1);
    const excludeStart = getLongestPalindromeSubstr(inputStr, start + 1, end);

    return excludeEnd.length > excludeStart.length ? excludeEnd : excludeStart;
}

let inputStr = "abccbabac";
let result = getLongestPalindromeSubstr(inputStr, 0, inputStr.length-1);
console.log(`Longest palindromic substr of input ${inputStr} is: ${result}`);

inputStr = "babad";
result = getLongestPalindromeSubstr(inputStr, 0, inputStr.length-1);
console.log(`Longest palindromic substr of input ${inputStr} is: ${result}`);

inputStr = "racecar";
result = getLongestPalindromeSubstr(inputStr, 0, inputStr.length-1);
console.log(`Longest palindromic substr of input ${inputStr} is: ${result}`);

inputStr = "abcd";
result = getLongestPalindromeSubstr(inputStr, 0, inputStr.length-1);
console.log(`Longest palindromic substr of input ${inputStr} is: ${result}`);

inputStr = "aaaa";
result = getLongestPalindromeSubstr(inputStr, 0, inputStr.length-1);
console.log(`Longest palindromic substr of input ${inputStr} is: ${result}`);

inputStr = "";
result = getLongestPalindromeSubstr(inputStr, 0, inputStr.length-1);
console.log(`Longest palindromic substr of input ${inputStr} is: ${result}`);

inputStr = "cbbd";
result = getLongestPalindromeSubstr(inputStr, 0, inputStr.length-1);
console.log(`Longest palindromic substr of input ${inputStr} is: ${result}`);
