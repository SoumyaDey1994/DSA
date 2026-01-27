/**
 * Date: 26th Jan, 2026
 * Problem Statement: Valid Palindrome
 * You are given a string, and your task is to determine whether
 * it reads the same forward and backward — ignoring case and non-alphanumeric characters.
 * What to Consider:
 *      - Alphanumeric characters only → ignore spaces, punctuation, symbols.
 *      - Case-insensitive → treat 'A' and 'a' as the same.
 *      - You are not allowed to reverse the string and compare directly in interviews — a two-pointer approach is usually expected.
 */
function isValidPalindrome(str) {
  if (!str || str.length === 0) return false;

  let left = 0,
    right = str.length - 1;
  while (left < right) {
    // if not alphanumeric char, skip
    while (left < right && !isAlphanumeric(str[left])) {
      left++;
    }

    while (left < right && !isAlphanumeric(str[right])) {
      right--;
    }
    // if chars are not same, rteurn false
    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

function isAlphanumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}


let str = "A man, a plan, a canal: Panama";
console.log(`String "${str}" is valid palindrome: ${isValidPalindrome(str)}`);

str = "race a car";
console.log(`String "${str}" is valid palindrome: ${isValidPalindrome(str)}`);

str = " ";
console.log(`String "${str}" is valid palindrome: ${isValidPalindrome(str)}`);

str = "0P";
console.log(`String "${str}" is valid palindrome: ${isValidPalindrome(str)}`);

str = "abba";
console.log(`String "${str}" is valid palindrome: ${isValidPalindrome(str)}`);

str = "XabpBax";
console.log(`String "${str}" is valid palindrome: ${isValidPalindrome(str)}`);

str = "Rama Kana Kamar";
console.log(`String "${str}" is valid palindrome: ${isValidPalindrome(str)}`);

str = "The Man, The Myth, The Mahi";
console.log(`String "${str}" is valid palindrome: ${isValidPalindrome(str)}`);

str = "123,45,54,321";
console.log(`String "${str}" is valid palindrome: ${isValidPalindrome(str)}`);

