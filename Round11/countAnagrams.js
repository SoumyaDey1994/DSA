/**
 * Date: 14th April, 2026
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
function findAllAnagramStartIndices(source, pattern) {
  if (!source || !pattern) return;

  const patternMap = new Map(),
    sourceMap = new Map();

  for (const char of pattern) {
    patternMap.set(char, (patternMap.get(char) || 0) + 1);
  }

  const windowSize = patternMap.size;
  let right = 0;
  const resultIndices = [];

  while (right < source.length) {
    const currChar = source[right];
    sourceMap.set(currChar, (sourceMap.get(currChar) || 0) + 1);

    if (right >= windowSize) {
      const leftChar = source[right - windowSize];

      if (sourceMap.get(leftChar) === 1) {
        sourceMap.delete(leftChar);
      } else {
        sourceMap.set(leftChar, sourceMap.get(leftChar) - 1);
      }
    }

    if (isAnagram(sourceMap, patternMap)) {
      resultIndices.push(right - windowSize + 1);
    }

    right++;
  }

  return resultIndices;
}

function isAnagram(sourceMap, patternMap) {
  if (sourceMap.size !== patternMap.size) return false;

  for (let [key, value] of sourceMap) {
    if (sourceMap.get(key) !== patternMap.get(key)) return false;
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
