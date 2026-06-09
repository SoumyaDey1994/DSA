/**
 * Date: 9th June, 2026
 * Problem Statement
 * Given two strings s and t, 
 * return the smallest substring of s that contains all characters of t.
 * If no such substring exists, return an empty string "".
 * Example 1:
 *      Input: s = "ADOBECODEBANC", t = "ABC"
        Output: "BANC"
        Explanation: The shortest substring containing 'A', 'B', and 'C' is "BANC".
 * Example 2:
        Input: s = "a", t = "aa"
        Output: ""
        Explanation: The character 'a' appears only once in `s`, so no valid substring exists.
 */
function findMinWindowSubstring(source, target) {
  if (!source || !target) return;

  const sourceMap = new Map(),
    targetMap = new Map();
  for (let char of target) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
  }

  const windowSize = targetMap.size;
  let left = 0,
    right = 0,
    minStart = 0,
    minLength = Infinity;
  let formed = 0;

  while (right < source.length) {
    const currChar = source[right];
    sourceMap.set(currChar, (sourceMap.get(currChar) || 0) + 1);

    if (
      targetMap.has(currChar) &&
      sourceMap.get(currChar) === targetMap.get(currChar)
    ) {
      formed++;
    }

    while (formed === windowSize) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minStart = left;
      }
      // Shrink the window
      const leftChar = source[left];
      sourceMap.set(leftChar, sourceMap.get(leftChar) - 1);
      if (
        targetMap.has(leftChar) &&
        sourceMap.get(leftChar) < targetMap.get(leftChar)
      ) {
        formed--;
      }
      left++;
    }
    right++;
  }

  return minLength === Infinity
    ? ""
    : source.substring(minStart, minStart + minLength);
}

let source = "ADOBECODEBANC";
let target = "ABC";
console.log(
  `Min window substring of ${source} is: ${findMinWindowSubstring(
    source,
    target,
  )}`,
);

source = "a";
target = "aa";
console.log(
  `Min window substring of ${source} is: ${findMinWindowSubstring(
    source,
    target,
  )}`,
);

source = "AAADOBECODEBANCAA";
target = "ABC";
console.log(
  `Min window substring of ${source} is: ${findMinWindowSubstring(
    source,
    target,
  )}`,
);

source = "ABC";
target = "ABC";
console.log(
  `Min window substring of ${source} is: ${findMinWindowSubstring(
    source,
    target,
  )}`,
);

source = "abcde";
target = "xyz";
console.log(
  `Min window substring of ${source} is: ${findMinWindowSubstring(
    source,
    target,
  )}`,
);

source = "ADOBECODEBANCABC";
target = "ABC";
console.log(
  `Min window substring of ${source} is: ${findMinWindowSubstring(
    source,
    target,
  )}`,
);

source = "aaabaaddae";
target = "aae";
console.log(
  `Min window substring of ${source} is: ${findMinWindowSubstring(
    source,
    target,
  )}`,
);
