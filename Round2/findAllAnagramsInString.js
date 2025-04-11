/**
 * Date: 11th April, 2025
 * Problem Statement: Count Anagrams / Find All Anagrams in a String
 * We're given two strings: 
 *  s - the main string
 *  p - the target string (whose anagrams we want to find in s)
 * Our task is to find all the start indices in s where an anagram of p begins.
 * 📌 Constraints:
 *      Both s and p consist of lowercase English letters.
 *      Return an array of starting indices of the anagrams of p found in s.
 * Example 1:
 *      Input:  s = "cbaebabacd", p = "abc"
 *      Output: [0, 6]
 *      Explanation:
 *          Anagrams of "abc" → "cba", "bac", etc.
            Found at index 0: "cba"
            Found at index 6: "bac"
 *              
 */
function findAllAnagramIndices(source, target) {
  // if target str > source str, anagram not possible
  if (target.length > source.length) return null;

  const result = [];
  const srcFreq = new Map(),
    targetFreq = new Map();
  let left = 0,
    right = 0,
    matchedCount = 0;
    // Frequency map of target string, required Count will be size of target freq map
  for (let char of target) {
    targetFreq.set(char, (targetFreq.get(char) || 0) + 1);
  }
  const reqCount = targetFreq.size;

  while (right < source.length) {
    const char = source[right];
    srcFreq.set(char, (srcFreq.get(char) || 0) + 1);

    if (targetFreq.has(char) && targetFreq.get(char) === srcFreq.get(char)) {
      matchedCount++;
    }
    // shrink the window
    while (right - left + 1 > target.length) {
      const leftChar = source[left];
      if (
        srcFreq.has(leftChar) &&
        srcFreq.get(leftChar) === targetFreq.get(leftChar)
      ) {
        matchedCount--;
      }
      srcFreq.set(leftChar, srcFreq.get(leftChar) - 1);
      if (srcFreq.get(leftChar) === 0) {
        delete srcFreq.delete(leftChar);
      }

      left++;
    }

    if (matchedCount === reqCount) {
      result.push(left);
    }
    right++;
  }

  return result;
}

let src = "cbaebabacd",
  target = "abc";
let output = findAllAnagramIndices(src, target);
console.log(`Anagrams present at indices: [${output}]`);

(src = "abab"), (target = "ab");
output = findAllAnagramIndices(src, target);
console.log(`Anagrams present at indices: [${output}]`);

(src = "aabaaabaa"), (target = "aab");
output = findAllAnagramIndices(src, target);
console.log(`Anagrams present at indices: [${output}]`);
