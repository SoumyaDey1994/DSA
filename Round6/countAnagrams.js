/**
 * Date: 20th Nov, 2025
 * Problem Statement: Count Anagrams (Find All Anagrams in a String)
 * We're given two strings: s-the main string & p-the pattern
 * Our task is to find all start indices of substrings in s that are anagrams of p.
 * Note: An anagram of a string is another string with the same characters and frequencies, but in any order.
 * Example 1:
 *      Input: s = "cbaebabacd", p = "abc"
 *      Output: [0, 6]
 *      Explanation:
 *          - Substring starting at index 0: "cba" → anagram of "abc"
 *          - Substring starting at index 6: "bac" → anagram of "abc"
 * Example 2:
 *      Input: s = "abab", p = "ab"
 *      Output: [0, 1, 2]
 *      Explanation:
 *          - "ab", "ba", and "ab" are all valid anagrams
 */

function countAnagrams(source, pattern) {
  if (!source || !pattern) return;

  const sourceMap = new Map();
  const patternMap = new Map();
  const result = [];

  for (let char of pattern) {
    patternMap.set(char, (patternMap.get(char) || 0) + 1);
  }

  const windowSize = patternMap.size;

  for (let i = 0; i < source.length; i++) {
    const currChar = source[i];
    sourceMap.set(currChar, (sourceMap.get(currChar) || 0) + 1);

    if (i >= windowSize) {
      const startChar = source[i - windowSize];
      const freq = sourceMap.get(startChar);

      if (freq === 1) {
        sourceMap.delete(startChar);
      } else {
        sourceMap.set(startChar, sourceMap.get(startChar) - 1);
      }
    }

    if (mapsAreEqual(sourceMap, patternMap)) {
      result.push(i - windowSize + 1);
    }
  }

  return result;
}

function mapsAreEqual(sourceMap, patternMap) {
  if (sourceMap.size !== patternMap.size) return false;

  for (const [key, _] of sourceMap) {
    if (sourceMap.get(key) !== patternMap.get(key)) {
      return false;
    }
  }

  return true;
}

let source = "cbaebabacd",
  pattern = "abc";
let output = countAnagrams(source, pattern);
console.log(`Anagrams present in indices: [${output}]`);

(source = "abab"), (pattern = "ab");
output = countAnagrams(source, pattern);
console.log(`Anagrams present in indices: [${output}]`);
