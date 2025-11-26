/**
 * Date: 26th Nov, 2025
 * Problem Statement — Valid Palindrome II
 * You are given a string s.
 * You need to determine whether it is possible to make the string a palindrome by deleting at most ONE character.
 * Output:
 *      true → if the string can become a palindrome by removing 0 or 1 character
 *      false → otherwise
 * ❗ Cases to understand
 *      If the string is already a palindrome → return true
 *      If removing one character can make it a palindrome → return true
 *      If even after removing one character it cannot become a palindrome → return false
 * Example 1: 
 *      Input:  "aba"
 *      Output: true
 * Example 2: 
        Input:  "abca"
        Output: true
 * Example 3: 
        Input: "deeee"
        Output: true 
 * Example 4: 
        Input:  "abc"
        Output: false
 */
function validPalindromeII(str) {
  if (!str || str.length === 0) return false;

  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
    } else {
      return (
        isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1)
      );
    }
  }
  return true;
}

function isPalindrome(str, start, end) {
  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

let str = "aba";
console.log(`String ${str} is valid palindrome II: ${validPalindromeII(str)}`);

str = "abca";
console.log(`String ${str} is valid palindrome II: ${validPalindromeII(str)}`);

str = "deeee";
console.log(`String ${str} is valid palindrome II: ${validPalindromeII(str)}`);

str = "abc";
console.log(`String ${str} is valid palindrome II: ${validPalindromeII(str)}`);
