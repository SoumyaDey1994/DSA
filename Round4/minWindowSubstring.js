/**
 * Date: 9th June, 2025
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
  if (!source || source.length < target.length) return;

  const targetFreqMap = new Map(),
    sourceFreqMap = new Map();
  for (let char of target) {
    targetFreqMap.set(char, (targetFreqMap.get(char) || 0) + 1);
  }
  const windowSize = targetFreqMap.size;
  let left = 0,
    right = 0,
    minStart = 0,
    formedSize = 0,
    minLength = Infinity;

  while (right < source.length) {
    const sourceChar = source[right];
    sourceFreqMap.set(sourceChar, (sourceFreqMap.get(sourceChar) || 0) + 1);

    if (
      targetFreqMap.has(sourceChar) &&
      targetFreqMap.get(sourceChar) === sourceFreqMap.get(sourceChar)
    ) {
      formedSize++;
    }

    while (formedSize === windowSize) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minStart = left;
      }

      let leftChar = source[left];
      sourceFreqMap.set(leftChar, sourceFreqMap.get(leftChar) - 1);
      if (
        sourceFreqMap.has(leftChar) &&
        sourceFreqMap.get(leftChar) < targetFreqMap.get(leftChar)
      ) {
        formedSize--;
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
    target
  )}`
);

source = "a";
target = "aa";
console.log(
  `Min window substring of ${source} is: ${findMinWindowSubstring(
    source,
    target
  )}`
);

source = "AAADOBECODEBANCAA";
target = "ABC";
console.log(
  `Min window substring of ${source} is: ${findMinWindowSubstring(
    source,
    target
  )}`
);

source = "ABC";
target = "ABC";
console.log(
  `Min window substring of ${source} is: ${findMinWindowSubstring(
    source,
    target
  )}`
);

source = "abcde";
target = "xyz";
console.log(
  `Min window substring of ${source} is: ${findMinWindowSubstring(
    source,
    target
  )}`
);

source = "ADOBECODEBANCABC";
target = "ABC";
console.log(
  `Min window substring of ${source} is: ${findMinWindowSubstring(
    source,
    target
  )}`
);

source = "aaabaaddae";
target = "aae";
console.log(
  `Min window substring of ${source} is: ${findMinWindowSubstring(
    source,
    target
  )}`
);
