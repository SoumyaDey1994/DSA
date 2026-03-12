/**
 * Date: 8th Jan, 2025
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
    if(str1.length !== str2.length) return false;

    const str1Map = new Map();
    const str2Map = new Map();

    for(let index=0; index<str1.length; index++) {
        const char1 = str1[index];
        const char2 = str2[index];
        // Check for matching chars
        //If no match, return false
        if(str1Map.has(char1) && str1Map.get(char1) !== char2) return false;
        if(str2Map.has(char2) && str2Map.get(char2) !== char1) return false;
        // add mappings to map
        str1Map.set(char1, char2);
        str2Map.set(char2, char1);
    }
    return true;
}

let str1 = "egg";
let str2 = "add";
console.log(`String ${str1} & ${str2} are isomprphic: ${isIsomorphic(str1, str2)}`);

str1 = "foo";
str2 = "bar";
console.log(`String ${str1} & ${str2} are isomprphic: ${isIsomorphic(str1, str2)}`);

str1 = "paper";
str2 = "title";
console.log(`String ${str1} & ${str2} are isomprphic: ${isIsomorphic(str1, str2)}`);
