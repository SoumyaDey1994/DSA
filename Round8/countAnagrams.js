/**
 * Date: 17th Feb, 2026
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
function findAllAnagramStartIndices(src, pattern) {
  if (!src || !pattern) return;

  const srcMap = new Map(),
    patternMap = new Map();
  for (let char of pattern) {
    char = char.toLowerCase();
    patternMap.set(char, (patternMap.get(char) || 0) + 1);
  }

  const windowSize = patternMap.size;
  const outputIndices = [];

  for (let i = 0; i < src.length; i++) {
    const srcChar = src[i];
    srcMap.set(srcChar, (srcMap.get(srcChar) || 0) + 1);

    if (i >= windowSize) {
      const leftChar = src[i - windowSize];
      if (srcMap.get(leftChar) === 1) {
        srcMap.delete(leftChar);
      } else {
        srcMap.set(leftChar, srcMap.get(leftChar) - 1);
      }
    }

    const srcString = [...srcMap.keys()].join("");
    if (srcString.length === pattern.length && isAnagram(srcString, pattern)) {
      outputIndices.push(i - windowSize + 1);
    }
  }

  return outputIndices;
}

function isAnagram(str1, str2) {

  const frequencies = new Array(26).fill(0);

  for (let i = 0; i < str1.length; i++) {
    const str1CharCode = str1[i].toLowerCase().charCodeAt(0);
    const str2CharCode = str2[i].toLowerCase().charCodeAt(0);

    frequencies[str1CharCode - 97]++;
    frequencies[str2CharCode - 97]--;
  }

  return Math.max(...frequencies) === 0;
}

let source = "cbaebabacd",
  pattern = "abc";
let output = findAllAnagramStartIndices(source, pattern);
console.log(
  `Anagrams of ${pattern} present in source ${source} indices: [${output}]`,
);

((source = "abab"), (pattern = "ab"));
output = findAllAnagramStartIndices(source, pattern);
console.log(
  `Anagrams of ${pattern} present in source ${source} indices: [${output}]`,
);
