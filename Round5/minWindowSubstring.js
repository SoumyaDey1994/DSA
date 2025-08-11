/**
 * Date: 10th August, 2025
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
  if (!source || source.length === 0 || !target || target.length === 0)
    return "";

  const sourceMap = new Map();
  const targetMap = new Map();

  for (let char of target) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1);
  }

  const windowSize = targetMap.size;
  let left = 0,
    right = 0,
    formedSize = 0,
    minStart = 0,
    minLength = Infinity;

  while (right < source.length) {
    let sourceChar = source[right];
    sourceMap.set(sourceChar, (sourceChar || 0) + 1);

    if (
      targetMap.has(sourceChar) &&
      targetMap.get(sourceChar) === sourceMap.get(sourceChar)
    ) {
      formedSize++;
    }

    while (formedSize === windowSize) {
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minStart = left;
      }

      let leftChar = source[left];
      sourceMap.set(leftChar, sourceMap.get(leftChar) - 1);
      if (
        sourceMap.has(leftChar) &&
        sourceMap.get(leftChar) < targetMap.get(leftChar)
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
