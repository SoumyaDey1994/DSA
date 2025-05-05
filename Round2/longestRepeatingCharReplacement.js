/**
 * Date: 5th May, 2025
 * Problem Statement: Longest Repeating Character Replacement
 * Given a string s and an integer k, you can replace at most k characters in the string.
 * Your task is to find the length of the longest substring
 * that can be obtained where all the characters are the same after performing at most k replacements.
 * ✅ Constraints
 *      Only uppercase English letters (A-Z).
 *      You are allowed to replace any character with any other character.
 *      Replace at most k characters.
 * Example 1:
 *      Input: s = "ABAB", k = 2
 *      Output: 4
 *      Explanation: Replace the two 'B's with 'A's => "AAAA", length = 4.
 * Example 2:
 *      Input: s = "AABABBA", k = 1
 *      Output: 4
 *      Explanation:
 *          Change one 'A' at index 1 to 'B' => "ABBBBA"
 *          OR
 *          Change one 'B' to 'A' => "AAAABA"
 *          Either way, max length = 4.
 * Example 3:
 *      Input: s = "ABCDE", k = 2
 *      Output: 3
 *      Explanation: You can replace 2 letters to make "AAA", "BBB", etc.
 */
function getLongestSubstrLength(str, noOfReplacements) {
  let left = 0,
    maxLength = 0;
  const freq = new Array(26).fill(0);
  for (let right = 0; right < str.length; right++) {
    const charCode = str.charCodeAt(right) - 65;
    freq[charCode]++;

    maxLength = Math.max(maxLength, freq[charCode]);
    // console.log("MaxLength: ", maxLength);
    if (right - left + 1 - maxLength > noOfReplacements) {
      // console.log("Right: ", right, "Left: ", left);
      freq[str.charCodeAt(left) - 65]--;
      left++;
    }
  }
  return str.length - left;
}

let str = "ABAB",
  k = 2;
console.log(
  `Longest substring length post replacing ${k} char is: ${getLongestSubstrLength(
    str,
    k
  )}`
);

(str = "AABABBA"), (k = 1);
console.log(
  `Longest substring length post replacing ${k} char is: ${getLongestSubstrLength(
    str,
    k
  )}`
);

(str = "ABCDE"), (k = 2);
console.log(
  `Longest substring length post replacing ${k} char is: ${getLongestSubstrLength(
    str,
    k
  )}`
);
