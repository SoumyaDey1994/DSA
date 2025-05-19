/**
 * Date: 19th May, 2025
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
function findAllAnagrams(s, p) {
  const result = [];
  if (p.length > s.length) return result;

  const sMap = new Map();
  const pMap = new Map();

  // Freq Map of p
  for (let char of p) {
    pMap.set(char, (pMap.get(char) || 0) + 1);
  }

  const windowSize = pMap.size;

  for (let i = 0; i < s.length; i++) {
    const endChar = s[i];
    // Freq Map of s
    sMap.set(endChar, (sMap.get(endChar) || 0) + 1);
    // Shrink window
    if (i >= windowSize) {
      const startChar = s[i - windowSize];
      if (sMap.get(startChar) === 1) {
        sMap.delete(startChar);
      } else {
        sMap.set(startChar, sMap.get(startChar) - 1);
      }
    }
    // if maps are equal, note the index
    if (mapsAreEqual(sMap, pMap)) {
      result.push(i - windowSize + 1);
    }
  }

  return result;
}
// Logic to check maps are equal or not
function mapsAreEqual(m1, m2) {
    if(m1.size !== m2.size) return false;

    for(let [key, value] of m1) {
        if(m2.get(key) !== value) return false;
    }

    return true;
}

let s = "cbaebabacd", p = "abc";
let output = findAllAnagrams(s, p);
console.log(`All anagram starting index are: [${output}]`);

s = "abab", p = "ab";
output = findAllAnagrams(s, p);
console.log(`All anagram starting index are: [${output}]`);

s = "soumya", p = "om";
output = findAllAnagrams(s, p);
console.log(`All anagram starting index are: [${output}]`);

s = "tanima", p = "an";
output = findAllAnagrams(s, p);
console.log(`All anagram starting index are: [${output}]`);

s = "ramakantakamar", p = "ram";
output = findAllAnagrams(s, p);
console.log(`All anagram starting index are: [${output}]`);
