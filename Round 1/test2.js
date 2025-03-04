/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * Input: s = "abcabcbb"
 * Output: 3
 * Input: s = "bbbb"
 * Output: 1
 * Input: s = "pwwkew"
 * Output: 3
 * Input: s = ""
 * Output: 0
 */

function longestSubstringWithoutRepeatChar(input) {
    const visitedSet = new Set();
    const length = input.length;
    let start = 0;
    let maxSubstrLength = 0, targetSubstr='';
    for(let index=0; index<length; index++) {
        const char = input[index];
        //if already exist in visited set, then adjust the start
        while(visitedSet.has(char)) {
            visitedSet.delete(input[start]);
            start++;
        }
        // Put char in visited set
        visitedSet.add(char);
        // maxSubstrLength = Math.max(maxSubstrLength, index-start+1)
        if(index+1-start > maxSubstrLength) {
            maxSubstrLength = index-start+1;
            targetSubstr = input.substring(start, index+1);
        }
    }
    return targetSubstr;
}

let inputStr = "abcabcbb";
console.log(`Longest Substring without repeation for input ${inputStr} is: ${longestSubstringWithoutRepeatChar(inputStr)}`);

inputStr = "bbbb";
console.log(`Longest Substring without repeation for input ${inputStr} is: ${longestSubstringWithoutRepeatChar(inputStr)}`);

inputStr = "pwwkew";
console.log(`Longest Substring without repeation for input ${inputStr} is: ${longestSubstringWithoutRepeatChar(inputStr)}`);

inputStr = "";
console.log(`Longest Substring without repeation for input ${inputStr} is: ${longestSubstringWithoutRepeatChar(inputStr)}`);

inputStr = "abcadefg";
console.log(`Longest Substring without repeation for input ${inputStr} is: ${longestSubstringWithoutRepeatChar(inputStr)}`);

inputStr = "abbdefg";
console.log(`Longest Substring without repeation for input ${inputStr} is: ${longestSubstringWithoutRepeatChar(inputStr)}`);