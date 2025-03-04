/**
 * Date: 3rd Match, 2025
 * Problem Statement
 * Given two strings s and t, return the smallest substring of s that contains all characters of t.
 * If no such substring exists, return an empty string "".
 * Example 1:
 *      Input: s = "ADOBECODEBANC", t = "ABC"
        Output: "BANC"
        Explanation: The shortest substring containing 'A', 'B', and 'C' is "BANC".
 * Example 2:
        Input: s = "a", t = "aa"
        Output: ""
        Explanation: The character 'a' appears only once in `s`, so no valid substring exists.
 */
function getMinWindowSubstr(source, target) {
    if(source.length < target.length) return "";

    const charFreq = new Map(); // Form char freq map
    for(let char of target) {
        charFreq.set(char, (charFreq.get(char) || 0) + 1);
    }

    let left=0, right=0, required = charFreq.size;
    let minLength = Infinity, minStart = 0, formed = 0;
    let windowFreq = new Map();
    while(right < source.length) {
        const char = source[right];
        windowFreq.set(char, (windowFreq.get(char) || 0) + 1); // Form window freq

        if(charFreq.has(char) && charFreq.get(char) === windowFreq.get(char)) {
            formed++; // if target char included, increment formed
        }

        while(formed === required) {
            if((right - left + 1) < minLength) {
                minLength = right - left + 1;
                minStart = left;
            }

            // move left pointer towards right & decrement formed
            let leftChar = source[left];
            windowFreq.set(leftChar, (windowFreq.get(leftChar) || 0) - 1);
            if(charFreq.has(leftChar) && windowFreq.get(leftChar) < charFreq.get(leftChar)) {
                formed--;
            }
            left++;
        }
        right++;
    }
    // console.log("Min Length: ", minLength);
    // console.log("Left & Right: ", left, right);
    // console.log("Min Start: ", minStart);
    return minLength === Infinity ? "" : source.substring(minStart, minStart + minLength);
}

let source = "ADOBECODEBANC";
let target = "ABC";
console.log(`Min window substring is: ${getMinWindowSubstr(source, target)}`);

source = "a";
target = "aa";
console.log(`Min window substring is: ${getMinWindowSubstr(source, target)}`);

source = "AAADOBECODEBANCAA";
target = "ABC";
console.log(`Min window substring is: ${getMinWindowSubstr(source, target)}`);

source = "ABC";
target = "ABC";
console.log(`Min window substring is: ${getMinWindowSubstr(source, target)}`);

source = "abcde";
target = "xyz";
console.log(`Min window substring is: ${getMinWindowSubstr(source, target)}`);

source = "ADOBECODEBANCABC";
target = "ABC";
console.log(`Min window substring is: ${getMinWindowSubstr(source, target)}`);

source = "aaabaaddae";
target = "aae";
console.log(`Min window substring is: ${getMinWindowSubstr(source, target)}`);
