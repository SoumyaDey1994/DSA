/**
 * Date: 5th March, 2026
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
function checkIsIsomorphic(source, target) {
  if (!source || !target) return false;
  if (source.length !== target.length) return false;

  const sourceMap = new Map(),
    targetMap = new Map();

  for (let i = 0; i < source.length; i++) {
    const sourceChar = source[i];
    const targetChar = target[i];

    if (sourceMap.has(sourceChar) && sourceMap.get(sourceChar) !== targetChar)
      return false;
    if (targetMap.has(targetChar) && targetMap.get(targetChar) !== sourceChar)
      return false;

    sourceMap.set(sourceChar, targetChar);
    targetMap.set(targetChar, sourceChar);
  }

  return true;
}


let str1 = "egg",
  str2 = "add";
console.log(
  `Words ${str1} & ${str2} are isomorphic: ${checkIsIsomorphic(str1, str2)}`
);

(str1 = "foo"), (str2 = "bar");
console.log(
  `Words ${str1} & ${str2} are isomorphic: ${checkIsIsomorphic(str1, str2)}`
);

str1 = "paper";
str2 = "title";
console.log(`${str1} & ${str2} are isomorphic: ${checkIsIsomorphic(str1, str2)}`);

str1 = "ab";
str2 = "aa";
console.log(`${str1} & ${str2} are isomorphic: ${checkIsIsomorphic(str1, str2)}`);

str1 = "babc";
str2 = "baba";
console.log(`${str1} & ${str2} are isomorphic: ${checkIsIsomorphic(str1, str2)}`);

str1 = "ticket";
str2 = "wicket";
console.log(`${str1} & ${str2} are isomorphic: ${checkIsIsomorphic(str1, str2)}`);

str1 = "bunny";
str2 = "funny";
console.log(`${str1} & ${str2} are isomorphic: ${checkIsIsomorphic(str1, str2)}`);
