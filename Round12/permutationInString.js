/**
 * Date: 3rd May, 2026
 * Problem Statement: Permutation in String
 * Given two strings s1 and s2, return true if any permutation of s1 is a substring of s2.
 * Otherwise, return false.
 * A permutation of a string is another string that contains the same characters,
 * only the order of characters can be different.
 * 📌 Constraints:
 *      Strings only contain lowercase English letters.
 *      1 <= s1.length, s2.length <= 10⁴
 * Example 1:
 *      s1 = "ab", s2 = "eidbaooo"
 *      Output: true
 *      Explanation: s2 contains "ba", which is a permutation of "ab".
 * Example 2:
 *      s1 = "ab", s2 = "eidboaoo"
 *      Output: false
 *      Explanation: s2 does not contain any permutation of "ab".
 * Example 3:
 *      s1 = "adc", s2 = "dcda"
 *      Output: true
 *      Explanation: s2 contains "cda", which is a permutation of "adc".
 * Example 4:
 *      s1 = "a", s2 = "a"
 *      Output: true
 *      Explanation: Same single character.
 */
function isPermutationExists(s1, s2) {
  if (s1.length > s2.length) return false;

  const s1FreqList = new Array(26).fill(0); // larger string
  const s2FreqList = new Array(26).fill(0); // smaller string
  const startCharCode = 97;

  for (let char of s1) {
    const index = char.charCodeAt(0) - startCharCode;
    s1FreqList[index] = s1FreqList[index] + 1;
  }

  for (let char of s2) {
    const index = char.charCodeAt(0) - startCharCode;
    s1FreqList[index] = s2FreqList[index] + 1;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1FreqList[i] === s2FreqList[i]) {
      matches++;
    }
  }

  for (let i = s1.length; i < s2.length; i++) {
    if (matches === 26) return true;

    const indexIn = s2.charCodeAt(i) - startCharCode;
    const indexOut = s2.charCodeAt(i - s1.length) - startCharCode;

    s2FreqList[indexIn]++;
    if (s2FreqList[indexIn] === s1FreqList[indexIn]) {
      matches++;
    } else if (s2FreqList[indexIn] === s1FreqList[indexIn] + 1) {
      matches--;
    }

    s2FreqList[indexOut]++;
    if (s2FreqList[indexOut] === s1FreqList[indexOut]) {
      matches++;
    } else if (s2FreqList[indexOut] === s1FreqList[indexOut] - 1) {
      matches--;
    }
  }

  return matches === 26;
}

let s1 = "ab",
  s2 = "eidbaooo";
console.log(
  `Is permutation of ${s1} exists in ${s2}: ${isPermutationExists(s1, s2)}`,
);

((s1 = "ab"), (s2 = "eidboaoo"));
console.log(
  `Is permutation of ${s1} exists in ${s2}: ${isPermutationExists(s1, s2)}`,
);

((s1 = "adc"), (s2 = "dcda"));
console.log(
  `Is permutation of ${s1} exists in ${s2}: ${isPermutationExists(s1, s2)}`,
);

((s1 = "a"), (s2 = "a"));
console.log(
  `Is permutation of ${s1} exists in ${s2}: ${isPermutationExists(s1, s2)}`,
);
