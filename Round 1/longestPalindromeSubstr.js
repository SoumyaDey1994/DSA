/**
 * Find the longest palindrome substring from a given input substring
 * Input: s = "abccbabac"
 * Output: "abccba"
 */
function getLongestPalindromeSubstr(input, start, end) {
  // Base cases
  // If start > end, return empty string
  // If start & end value is same, return the start[char]
  if (start > end) return "";
  if (start === end) return input[start];

  // If start & end char is same, check for inner substring palindrome
  if (input[start] === input[end]) {
    const innerPlaindromeStr = getLongestPalindromeSubstr(
      input,
      start + 1,
      end - 1
    );
    if (innerPlaindromeStr.length === end - start - 1) {
      return input[start] + innerPlaindromeStr + input[end];
    }
  }

  // check substring start+1 to end & start to end-1
  const excludeStartSubstr = getLongestPalindromeSubstr(input, start + 1, end);
  const excludeEndSubstr = getLongestPalindromeSubstr(input, start, end - 1);

  return excludeStartSubstr.length > excludeEndSubstr.length
    ? excludeStartSubstr
    : excludeEndSubstr;
}

let inputStr = "abccbabac";
let result = getLongestPalindromeSubstr(inputStr, 0, inputStr.length - 1);
console.log(`Longest palindromic substr of input ${inputStr} is: ${result}`);

inputStr = "babad";
result = getLongestPalindromeSubstr(inputStr, 0, inputStr.length - 1);
console.log(`Longest palindromic substr of input ${inputStr} is: ${result}`);

inputStr = "racecar";
result = getLongestPalindromeSubstr(inputStr, 0, inputStr.length - 1);
console.log(`Longest palindromic substr of input ${inputStr} is: ${result}`);

inputStr = "abcd";
result = getLongestPalindromeSubstr(inputStr, 0, inputStr.length - 1);
console.log(`Longest palindromic substr of input ${inputStr} is: ${result}`);

inputStr = "aaaa";
result = getLongestPalindromeSubstr(inputStr, 0, inputStr.length - 1);
console.log(`Longest palindromic substr of input ${inputStr} is: ${result}`);

inputStr = "";
result = getLongestPalindromeSubstr(inputStr, 0, inputStr.length - 1);
console.log(`Longest palindromic substr of input ${inputStr} is: ${result}`);

inputStr = "cbbd";
result = getLongestPalindromeSubstr(inputStr, 0, inputStr.length - 1);
console.log(`Longest palindromic substr of input ${inputStr} is: ${result}`);
