/**
 * Date: 26th February, 2025
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
  //If length is diff, not isomorphic
  if (str1.length !== str2.length) return false;
  const str1Map = new Map();
  const str2Map = new Map();

  for (let i = 0; i < str1.length; i++) {
    if (str1Map.has(str1[i]) && str1Map.get(str1[i]) !== str2[i])
      return false;
    else if (str2Map.has(str2[i]) && str2Map.get(str2[i]) !== str1[i])
      return false;
    else {
      // Add to map
      str1Map.set(str1[i], str2[i]);
      str2Map.set(str2[i], str1[i]);
    }
  }
  return true;
}

let str1 = "egg";
let str2 = "add";
console.log(`${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`);

str1 = "foo";
str2 = "bar";
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
