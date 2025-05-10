/**
 * Date: 10th May, 2025
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
function isPermutationExists(str1, str2) {
    if(str1.length > str2.length) return false;

    const s1Map = new Array(26).fill(0);
    const s2Map = new Array(26).fill(0);
    const aCharCode = 97;

    for(let i=0; i<s1Map.length; i++) {
        s1Map[str1.charCodeAt(i) - aCharCode]++;
        s2Map[str2.charCodeAt(i) - aCharCode]++;
    }

    let matches = 0;
    for(let i=0; i<26; i++) {
        if(s1Map[i] === s2Map[i]) {
            matches++;
        }
    }

    for(let i=str1.length; i<str2.length; i++) {
        if (matches === 26) return true;

        const indexIn = str2.charCodeAt(i) - aCharCode;
        const indexOut = str2.charCodeAt(i - str1.length) - aCharCode;

        s2Map[indexIn]++;
        if (s2Map[indexIn] === s1Map[indexIn]) {
          matches++;
        } else if (s2Map[indexIn] === s1Map[indexIn] + 1) {
          matches--;
        }
    
        s2Map[indexOut]--;
        if (s2Map[indexOut] === s1Map[indexOut]) {
          matches++;
        } else if (s2Map[indexOut] === s1Map[indexOut] - 1) {
          matches--;
        }
    }

    return matches === 26;
}

let s1 = "ab", s2 = "eidbaooo";
console.log(`Is permutation of ${s1} exists in ${s2}: ${isPermutationExists(s1, s2)}`);

s1 = "ab", s2 = "eidboaoo";
console.log(`Is permutation of ${s1} exists in ${s2}: ${isPermutationExists(s1, s2)}`);

s1 = "adc", s2 = "dcda";
console.log(`Is permutation of ${s1} exists in ${s2}: ${isPermutationExists(s1, s2)}`);

s1 = "a", s2 = "a";
console.log(`Is permutation of ${s1} exists in ${s2}: ${isPermutationExists(s1, s2)}`);
