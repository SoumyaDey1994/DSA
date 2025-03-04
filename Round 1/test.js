/**
 * Input: s = "abccbabac"
 * Output: "abccba"
 */

function getLongestPalindromeSubstr(inputStr, start, end) {
    // Base case: empty substring or single char
    if(start > end) return '';
    if (start === end) return inputStr[start];

    // If start & end chars are same
    if(inputStr[start] === inputStr[end]) {
        const remainingSubstrPalindrome = getLongestPalindromeSubstr(inputStr, start+1, end-1);
        if(remainingSubstrPalindrome.length === (end-start-1)) {
            return inputStr[start] + remainingSubstrPalindrome + inputStr[end];
        }
    }

    // Check for substrings start+1 -> end & start -> end-1
    const excludeStart = getLongestPalindromeSubstr(inputStr, start+1, end);
    const excludeEnd = getLongestPalindromeSubstr(inputStr, start, end-1);

    return excludeStart.length > excludeEnd.length ? excludeStart : excludeEnd;
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

