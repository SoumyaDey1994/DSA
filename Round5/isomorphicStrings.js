/**
 * Date: 1st July, 2025
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t,
 * with the following conditions:
 *      Each character in s maps to exactly one character in t.
 *      No two characters in s map to the same character in t.
 *      The order of characters must be preserved.
 * Example 1:
 *      Input: s = "egg", t = "add"
 *      Output: true
 *      Explanation: 'e' → 'a', 'g' → 'd' (same mapping for both 'g's).
 * Example 2:
 *      s = "foo", t = "bar"
 *      Output: false
 *      Explanation: 'f' → 'b', 'o' → 'a', but the second 'o' should also map to 'a', while 'r' is introduced.
 */
function isIsomorphic(src, target) {
  if (!src || !target) return;

  if (src.length !== target.length) return false;

  const srcMap = new Map();
  const targetMap = new Map();
  const length = src.length;
  // Iterate through every char
  for (let i = 0; i < length; i++) {
    const srcChar = src[i],
      targetChar = target[i];

    if (srcMap.has(srcChar) && srcMap.get(srcChar) !== targetChar) return false;
    if (targetMap.has(targetChar) && targetMap.get(targetChar) !== srcChar)
      return false;

    srcMap.set(srcChar, targetChar);
    targetMap.set(targetChar, srcChar);
  }
  return true;
}

let str1 = "egg";
let str2 = "add";
console.log(`${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`);

str1 = "foo";
str2 = "bar";
console.log(`${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`);

str1 = "bat";
str2 = "ball";
console.log(`${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`);

str1 = "paper";
str2 = "title";
console.log(`${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`);

str1 = "ab";
str2 = "aa";
console.log(`${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`);

str1 = "babc";
str2 = "baba";
console.log(`${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`);

str1 = "ticket";
str2 = "wicket";
console.log(`${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`);
