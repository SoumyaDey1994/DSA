/**
 * Date: 31st May, 2025
 * Problem Statement: Valid Palindrome
 * You are given a string, and your task is to determine whether
 * it reads the same forward and backward — ignoring case and non-alphanumeric characters.
 * What to Consider:
 *      - Alphanumeric characters only → ignore spaces, punctuation, symbols.
 *      - Case-insensitive → treat 'A' and 'a' as the same.
 *      - You are not allowed to reverse the string and compare directly in interviews — a two-pointer approach is usually expected.
 */

// Helper to check if a character is alphanumeric
function isAlphaNumeric(char) {
  return /^[a-z0-9]$/i.test(char);
}

function isSameChar(str, left, right) {
  if (left > right) return false;
  if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;

  return true;
}

function isValidPalindrome(str) {
  if (!str || str.length === 0) return;
  if (str.length === 1) return true;

  let left = 0,
    right = str.length - 1;

  while (left < right) {
    // increment left if not alphanumeric
    while (left < right && !isAlphaNumeric(str[left])) {
      left++;
    }

    // decrement right if not alphanumeric
    while (left < right && !isAlphaNumeric(str[right])) {
      right--;
    }

    // check for same char of left & right
    if (!isSameChar(str, left, right)) {
      return false;
    }
    // if same, converge left & right pointers
    left++;
    right--;
  }

  return true;
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
