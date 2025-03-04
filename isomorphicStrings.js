/**
 * Two strings are isomorphic if the characters in one string can be replaced to get the second string while preserving the order of characters. 
 * Each character in the first string must map to exactly one character in the second string, and no two characters in the first string can map to the same character.
    Input:
        Two strings, s and t.
    Output:
        Return true if the strings are isomorphic; otherwise, return false.
Example 1:
    Input:
        s = "egg", t = "add"
    Output:
        true
    Explanation:
        The character 'e' maps to 'a', and 'g' maps to 'd'. This mapping is consistent.

Example 2:
    Input:
        s = "foo", t = "bar"
    Output:
        false
    Explanation:
        The character 'o' in s maps to two different characters in t ('a' and 'r'), which violates the one-to-one mapping.

Example 3:
    Input:
        s = "paper", t = "title"
    Output:
        true
    Explanation:
        'p' maps to 't', 'a' maps to 'i', 'p' maps to 't' (consistent with earlier), 'e' maps to 'l', and 'r' maps to 'e'.
 */

function isIsomorphic(str1, str2) {
    if(str1.length !== str2.length) return false; // If diff length, means not isomorphic

    // Maps to track char mapping
    const str1Map = new Map();
    const str2Map = new Map();

    for(let index=0; index<str1.length; index++) {
        const str1Char = str1[index];
        const str2Char = str2[index];
        // If corresponding char differs, return false;
        if(str1Map.has(str1Char) && str1Map.get(str1Char) !== str2Char) return false;
        if(str2Map.has(str2Char) && str2Map.get(str2Char) !== str1Char) return false;

        // Put the mapping in corresponding maps
        str1Map.set(str1Char, str2Char);
        str2Map.set(str2Char, str1Char);
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

str1 = "kreeti";
str2 = "shruti";
console.log(`${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`);

str1 = "abc";
str2 = "de";
console.log(`${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`);

str1 = "Aa";
str2 = "bB";
console.log(`${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`);

str1 = "abcd";
str2 = "abcd";
console.log(`${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`);

str1 = "abab";
str2 = "cdcd";
console.log(`${str1} & ${str2} are isomorphic: ${isIsomorphic(str1, str2)}`);