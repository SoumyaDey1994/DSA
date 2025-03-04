/**
 * Date: 24th Feb, 2025
 * Given a string s and a dictionary of words wordDict, 
 * determine if s can be segmented into a space-separated sequence of one or more dictionary words.
    Example 1:
        Input: 
            s = "leetcode"
            wordDict = ["leet", "code"]
        Output: true
        Explanation: "leetcode" can be segmented as "leet code", both of which are in the dictionary.
    Example 2:
        Input:
            s = "applepenapple"
            wordDict = ["apple", "pen"]
        Output: true
        Explanation: "applepenapple" can be segmented as "apple pen apple", and all words exist in wordDict.
    Example 3:
        Input:
            s = "catsandog"
            wordDict = ["cats", "dog", "sand", "and", "cat"]
        Output: false
        Explanation: There is no valid segmentation that forms words only from wordDict.
 */
function isWordBreakable(input, wordDict) {
    const dict = new Set(wordDict);
    const length = input.length;
    const partition = new Array(length+1).fill(false);
    partition[0] = true;
    for(let i=1; i<=length; i++) {
        for(let j=0; j<i; j++) {
            const subStr = input.substring(j, i);
            if(partition[j] && dict.has(subStr)) {
                partition[i] = true;
                break;
            }
        }
    }
    return partition[length];
}

let input = "leetcode"
let wordDict = ["leet", "code"];
let output = isWordBreakable(input, wordDict);
console.log(`Word ${input} is breakable into [${wordDict}]: ${output}`);

input = "applepenapple";
wordDict = ["apple", "pen"];
output = isWordBreakable(input, wordDict);
console.log(`Word ${input} is breakable into [${wordDict}]: ${output}`);

input = "catsandog";
wordDict = ["cats", "dog", "sand", "and", "cat"];
output = isWordBreakable(input, wordDict);
console.log(`Word ${input} is breakable into [${wordDict}]: ${output}`);

input = "cars";
wordDict = ["car", "ca", "rs"];
output = isWordBreakable(input, wordDict);
console.log(`Word ${input} is breakable into [${wordDict}]: ${output}`);

input = "abcd";
wordDict = ["a", "abc", "b", "cd"];
output = isWordBreakable(input, wordDict);
console.log(`Word ${input} is breakable into [${wordDict}]: ${output}`);

input = "abcad";
wordDict = ["ab", "abca", "ad"];
output = isWordBreakable(input, wordDict);
console.log(`Word ${input} is breakable into [${wordDict}]: ${output}`);

input = "aaaaaaa";
wordDict = ["aaa", "aaaa"];
output = isWordBreakable(input, wordDict);
console.log(`Word ${input} is breakable into [${wordDict}]: ${output}`);
