/**
 * Date: 23rd Feb, 2025
 * Given a string, find the length of the longest substring that contains only unique characters (i.e., without any repeating characters).

    Example 1:
        Input: "abcabcbb"
        Output: 3
        Explanation: The longest substring without repeating characters is "abc", which has a length of 3.

    Example 2:
        Input: "bbbbb"
        Output: 1
        Explanation: The longest substring without repeating characters is "b", which has a length of 1.

    Example 3:
        Input: "pwwkew"
        Output: 3
        Explanation: The longest substring without repeating characters is "wke", which has a length of 3.
        (Note that "pwke" is also valid, but we are looking for a contiguous substring.)

    Constraints:
        0 <= s.length <= 10^5
        s consists of English letters, digits, symbols, and spaces.
 */

function findLongestSubstrWithoutRepeatChar(inputStr) {
    const length = inputStr.length;
    let start = 0, maxLength = 0;
    const uniqueChar = new Set();
    for(let i=0; i<length; i++) {
        const char = inputStr[i];
        while(uniqueChar.has(char)) {
            uniqueChar.delete(inputStr[start]);
            start++;
        }
        uniqueChar.add(char);
        maxLength = Math.max(maxLength, i-start+1);
    }
    return maxLength;
}

let input = "abcabcbb";
let output = findLongestSubstrWithoutRepeatChar(input);
console.log(`Length of LSWR of ${input} is ${output}`);

input = "bbbb";
output = findLongestSubstrWithoutRepeatChar(input);
console.log(`Length of LSWR of ${input} is ${output}`);

input = "pwwkew";
output = findLongestSubstrWithoutRepeatChar(input);
console.log(`Length of LSWR of ${input} is ${output}`);

input = "geeksforgeeks";
output = findLongestSubstrWithoutRepeatChar(input);
console.log(`Length of LSWR of ${input} is ${output}`);
