/**
 * Date: 20th June, 2026
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
function isWordBreakable(word, wordDict) {
  if (!word || word.length === 0 || wordDict.length === 0) return;

  const wordSet = new Set(wordDict);
  const dp = new Array(word.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= word.length; i++) {
    for (let j = 0; j < i; j++) {
      const subStr = word.substring(j, i);
      if (dp[j] && wordSet.has(subStr)) {
        dp[i] = true;
      }
    }
  }

  return dp[word.length];
}

let str = "leetcode",
  words = ["leet", "code"];
console.log(
  `${str} can be segmented into [${words}]: ${isWordBreakable(str, words)}`,
);

((str = "applepenapple"), (words = ["apple", "pen"]));
console.log(
  `${str} can be segmented into [${words}]: ${isWordBreakable(str, words)}`,
);

((str = "catsandog"), (words = ["cats", "dog", "sand", "and", "cat"]));
console.log(
  `${str} can be segmented into [${words}]: ${isWordBreakable(str, words)}`,
);

str = "cars";
wordList = ["car", "ca", "rs"];
output = isWordBreakable(str, wordList);
console.log(`Word ${str} can be segmented into [${wordList}]: ${output}`);

str = "abcd";
wordList = ["a", "abc", "b", "cd"];
output = isWordBreakable(str, wordList);
console.log(`Word ${str} can be segmented into [${wordList}]: ${output}`);

str = "abcad";
wordList = ["ab", "abca", "ad"];
output = isWordBreakable(str, wordList);
console.log(`Word ${str} can be segmented into [${wordList}]: ${output}`);

str = "aaaaaaa";
wordList = ["aaa", "aaaa"];
output = isWordBreakable(str, wordList);
console.log(`Word ${str} can be segmented into [${wordList}]: ${output}`);

str = "committee";
wordList = ["commit", "tee"];
output = isWordBreakable(str, wordList);
console.log(`Word ${str} can be segmented into [${wordList}]: ${output}`);

str = "polarbear";
wordList = ["pol", "bear", "ar"];
output = isWordBreakable(str, wordList);
console.log(`Word ${str} can be segmented into [${wordList}]: ${output}`);
