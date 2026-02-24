/**
 * Date: 24th Feb, 2026
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
function findMinWindowSubstring(src, target) {
  if (!src || !target) return;

  const srcMap = new Map(),
    targetMap = new Map();

  for (let char of target) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
  }

  const windowSize = targetMap.size;
  let left = 0,
    right = 0,
    minLength = Infinity,
    minStart = 0,
    formed = 0;

  while (right < src.length) {
    const currChar = src[right];
    srcMap.set(currChar, (srcMap.get(currChar) || 0) + 1);

    if (
      targetMap.has(currChar) &&
      targetMap.get(currChar) === srcMap.get(currChar)
    ) {
      formed++;
    }

    while (formed === windowSize) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minStart = left;
      }

      let leftChar = src[left];
      srcMap.set(leftChar, srcMap.get(leftChar) - 1);
      if (
        srcMap.has(leftChar) &&
        srcMap.get(leftChar) < targetMap.get(leftChar)
      ) {
        formed--;
      }

      left++;
    }

    right++;
  }

  return minLength === Infinity
    ? ""
    : src.slice(minStart, minStart + minLength);
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
