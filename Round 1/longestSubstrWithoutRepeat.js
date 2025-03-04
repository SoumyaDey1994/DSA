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

function getLongestSubstrWithoutRepeat(input) {
    const length = input.length;
    const visited = new Set();
    let start = 0, targetSubstr = '', longestSubstrLength = 0;
    
    for(let index=0; index < length; index++) { // TC - O(n); n=input str length
        //If char already exists in visited set, remove start chars
        while(visited.has(input[index])) {
            visited.delete(input[start]);
            start++;
        }
        // Put char to visited set
        visited.add(input[index]);
        // check for current length & existing substring length
        // keep the heighest one
        if(index+1-start > longestSubstrLength) {
            targetSubstr = input.substring(start, index+1);
            longestSubstrLength = index+1-start;
        }
    }
    return [targetSubstr, longestSubstrLength];
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
