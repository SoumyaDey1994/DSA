/**
 * Date: 28th Feb, 2026
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
  if (!source || !target) return null;

  const sourceFreqMap = new Map(),
    targetFreqMap = new Map();

  for (let char of target) {
    targetFreqMap.set(char, (targetFreqMap.get(char) || 0) + 1);
  }

  const windowSize = targetFreqMap.size;
  let minStart = 0,
    minLength = Infinity,
    formed = 0;
  let left = 0,
    right = 0;

  while (right < source.length) {
    const currChar = source[right];
    sourceFreqMap.set(currChar, (sourceFreqMap.get(currChar) || 0) + 1);
    // console.log(currChar);
    if (
      targetFreqMap.has(currChar) &&
      targetFreqMap.get(currChar) === sourceFreqMap.get(currChar)
    ) {
      formed++;
    }
    // console.log("Formed: ", formed);
    while (formed === windowSize) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minStart = left;
      }
      const leftChar = source[left];
      sourceFreqMap.set(leftChar, sourceFreqMap.get(leftChar) - 1);
      if (
        sourceFreqMap.has(leftChar) &&
        sourceFreqMap.get(leftChar) < targetFreqMap.get(leftChar)
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
