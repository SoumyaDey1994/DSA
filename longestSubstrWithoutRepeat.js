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

function getLongestSubstrWithoutRepeat(inputStr) {
    let start = 0;
    const length = inputStr.length;
    const charSet = new Set();
    let maxLength = 0;
    for(let end=0; end<length; end++) {
        const char = inputStr[end];
        while(charSet.has(char)) {
            //Remove duplicate char & increment start
            charSet.delete(inputStr[start]);
            start++;
        }
        charSet.add(char);

        maxLength = Math.max(maxLength, end-start+1);
    }
    return maxLength;
}

let inputStr = "abcabcbb";
console.log(`Longest Substring without repeation for input ${inputStr} is: ${getLongestSubstrWithoutRepeat(inputStr)}`);

inputStr = "bbbb";
console.log(`Longest Substring without repeation for input ${inputStr} is: ${getLongestSubstrWithoutRepeat(inputStr)}`);

inputStr = "pwwkew";
console.log(`Longest Substring without repeation for input ${inputStr} is: ${getLongestSubstrWithoutRepeat(inputStr)}`);

inputStr = "";
console.log(`Longest Substring without repeation for input ${inputStr} is: ${getLongestSubstrWithoutRepeat(inputStr)}`);

inputStr = "abcadefg";
console.log(`Longest Substring without repeation for input ${inputStr} is: ${getLongestSubstrWithoutRepeat(inputStr)}`);

inputStr = "abbdefg";
console.log(`Longest Substring without repeation for input ${inputStr} is: ${getLongestSubstrWithoutRepeat(inputStr)}`);
