/**
 * Date: 8th April, 2025
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
function isIsomorphic(str1, str2) {
  // diff length strings cannot be isomorphic
  if (str1.length !== str2.length) return false;

  const str1Map = new Map();
  const str2Map = new Map();
  for (let i = 0; i < str1.length; i++) {
    // check if existing char maps to same value in both maps
    if (str1Map.has(str1[i]) && str1Map.get(str1[i]) !== str2[i]) return false;
    if (str2Map.has(str2[i]) && str2Map.get(str2[i]) !== str1[i]) return false;

    // set str1 char: str2 char & vice-versa
    str1Map.set(str1[i], str2[i]);
    str2Map.set(str2[i], str1[i]);
  }
  return true;
}

let str1 = "egg",
  str2 = "add";
console.log(
  `Words ${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`
);

(str1 = "foo"), (str2 = "bar");
console.log(
  `Words ${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`
);

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
