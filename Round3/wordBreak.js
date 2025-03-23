/**
 * Date: 23rd March, 2025
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
function isWordBreakable(str, wordList) {
  const length = str.length;
  if (length === 0) return false;
  // Create a doctonary for faster lookup
  const dict = new Set(wordList);
  // initialize dp array to track
  const dp = new Array(length + 1).fill(false);
  dp[0] = true; // for empty string, its always breakable
  for (let i = 1; i <= length; i++) {
    for (let j = 0; j < i; j++) {
      const subStr = str.substring(j, i);
      if (dp[j] && dict.has(subStr)) {
        dp[i] = true;
        break;
      }
    }
  }
  // console.log(dp);
  return dp[length];
}

let str = "leetcode";
let wordList = ["leet", "code"];
console.log(
  `${str} breakable into [${wordList}] ? ${isWordBreakable(str, wordList)}`
);

str = "applepenapple";
wordList = ["pen", "apple"];
console.log(
  `${str} breakable into [${wordList}] ? ${isWordBreakable(str, wordList)}`
);

str = "catsandog";
wordList = ["cats", "dog", "sand", "and", "cat"];
console.log(
  `${str} breakable into [${wordList}] ? ${isWordBreakable(str, wordList)}`
);

str = "cars";
wordList = ["car", "ca", "rs"];
output = isWordBreakable(str, wordList);
console.log(`Word ${str} is breakable into [${wordList}]: ${output}`);

str = "abcd";
wordList = ["a", "abc", "b", "cd"];
output = isWordBreakable(str, wordList);
console.log(`Word ${str} is breakable into [${wordList}]: ${output}`);

str = "abcad";
wordList = ["ab", "abca", "ad"];
output = isWordBreakable(str, wordList);
console.log(`Word ${str} is breakable into [${wordList}]: ${output}`);

str = "aaaaaaa";
wordList = ["aaa", "aaaa"];
output = isWordBreakable(str, wordList);
console.log(`Word ${str} is breakable into [${wordList}]: ${output}`);
