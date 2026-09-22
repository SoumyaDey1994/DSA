/**
 * Date: 21st September, 2026
 * Problem Statement: Count Anagrams (Find All Anagrams in a String)
 * We're given two strings: s-the main string & p-the pattern
 * Our task is to find all start indices of substrings in s that are anagrams of p.
 * Note: An anagram of a string is another string with the same characters and frequencies,
 * but in any order.
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
  if (!src || src.length === 0) return;
  if (!pattern || pattern.length === 0) return;

  const srcMap = new Map(),
    patternMap = new Map();

  for (const char of pattern) {
    patternMap.set(char, (patternMap.get(char) || 0) + 1);
  }

  const windowSize = patternMap.size;
  const resultIndices = [];
  for (let endIndex = 0; endIndex < src.length; endIndex++) {
    const currChar = src[endIndex];
    srcMap.set(currChar, (srcMap.get(currChar) || 0) + 1);

    if (endIndex >= windowSize) {
      const leftChar = src[endIndex - windowSize];
      if (srcMap.get(leftChar) === 1) {
        srcMap.delete(leftChar);
      } else {
        srcMap.set(leftChar, srcMap.get(leftChar) - 1);
      }
    }

    if (isAnagram(srcMap, patternMap)) {
      resultIndices.push(endIndex - windowSize + 1);
    }
  }

  return resultIndices;
}

function isAnagram(srcMap, patternMap) {
  if (srcMap.size !== patternMap.size) return false;

  for (let [char, _] of srcMap) {
    if (srcMap.get(char) !== patternMap.get(char)) return false;
  }

  return true;
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
