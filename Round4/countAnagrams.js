/**
 * Date: 1st June, 2025
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
function findStartIndicesOfAnagrams(s, p) {
  if (!s || s.length === 0) return;

  if (s.length < p.length) return [];

  let pMap = new Map();
  let sMap = new Map();

  const result = [];

  for (let char of p) {
    pMap.set(char, (pMap.get(char) || 0) + 1);
  }

  const windowSize = pMap.size;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    sMap.set(char, (sMap.get(char) || 0) + 1);
    // if current index > or equals window size
    // decrement freq count from sMap
    if (i >= windowSize) {
      const startChar = s[i - windowSize];
      const startCharFreq = sMap.get(startChar);
      if (startCharFreq === 1) {
        sMap.delete(startChar);
      } else {
        sMap.set(startChar, sMap.get(startChar) - 1);
      }
    }
    // Check if 2 Maps are equal
    if (mapsAreEqual(pMap, sMap)) {
      result.push(i - windowSize + 1);
    }
  }

  return result;
}

function mapsAreEqual(pMap, sMap) {
  if (pMap.size !== sMap.size) return false;

  for (let [key, _] of pMap) {
    if (sMap.get(key) !== pMap.get(key)) return false;
  }
  return true;
}

let s = "cbaebabacd",
  p = "abc";
let output = findStartIndicesOfAnagrams(s, p);
console.log(`Anagrams present in indices: [${output}]`);

(s = "abab"), (p = "ab");
output = findStartIndicesOfAnagrams(s, p);
console.log(`Anagrams present in indices: [${output}]`);
