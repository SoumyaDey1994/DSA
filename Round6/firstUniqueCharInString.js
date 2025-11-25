/**
 * Date: 25th Nov, 2025
 * 📌 Problem Statement — First Unique Character in a String
 * You are given a string s containing lowercase/uppercase letters (depending on the version of the problem).
 * You must find the index of the first non-repeating (unique) character in the string.
 * Return:
 *      The index of the first character whose frequency in the entire string is exactly 1
 *      If no such character exists, return -1
 * Example 1:
 *      Input:  s = "leetcode"
 *      Output: 0
 *      Explanation: Letter 'l' appears once and is the first character that does.
 * Example 2:
 *      Input:  s = "loveleetcode"
 *      Output: 2
 *      Explanation: 'v' at index 2 is the first unique.
 * Example 3:
 *      Input:  s = "aabb"
 *      Output: -1
 *      Explanation: All characters repeat → No unique character.
 */

function findFirstUniqueChar(str) {
  if (!str || str.length === 0) return -1;
  if (str.length === 1) return 0;

  const freqMap = new Map();
  // count frequency of each character
  for (const char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  // Find first char whose frequency is 1
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (freqMap.get(char) === 1) {
      return i;
    }
  }

  return -1;
}

let str = "leetcode";
console.log(`First unique character of ${str} is: ${findFirstUniqueChar(str)}`);

str = "loveleetcode";
console.log(`First unique character of ${str} is: ${findFirstUniqueChar(str)}`);

str = "aabb";
console.log(`First unique character of ${str} is: ${findFirstUniqueChar(str)}`);

str = "cbba";
console.log(`First unique character of ${str} is: ${findFirstUniqueChar(str)}`);
