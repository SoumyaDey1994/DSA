/**
 * Problem Statement:
    Given a string s and a dictionary of strings wordDict, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

    Input:
        A string s.
        A list of strings wordDict, representing the dictionary.
    Output:
        Return true if s can be segmented into words from wordDict, otherwise return false.
    
    Example 1:
        Input:
        s = "leetcode", wordDict = ["leet", "code"]
        Output:
        true
        Explanation:
        The string can be segmented as "leet code".

    Example 2:
    Input:
    s = "applepenapple", wordDict = ["apple", "pen"]
    Output:
    true
    Explanation:
    The string can be segmented as "apple pen apple".
    Note that the same word from the dictionary may be reused multiple times.

    Example 3:
    Input:
        s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
    Output:
        false
 */

function isWordBrekableStr(input, words) {
    const dict = new Set(words);
    // Queue to check from which point, its breakable
    const queue = new Array(input.length + 1).fill(false);
    queue[0] = true; // with empty string, it's always breakable
    for(let i=1; i<=input.length; i++) {
        for(let j=0; j<i; j++) {
            const subStr = input.substring(j, i);
            if(queue[j] && dict.has(subStr)) {
                queue[i] = true;
                break; // come out from current loop
            }
        }
    }
    console.log(queue);
    return queue[input.length];
}

let str = "leetcode", wordDict = ["leet", "code"];
console.log(`${str} can be segmented: ${isWordBrekableStr(str, wordDict)}`);

str = "applepenapple", wordDict = ["apple", "pen"];
console.log(`${str} can be segmented: ${isWordBrekableStr(str, wordDict)}`);

str = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"];
// str = "catsandog", wordDict = ["cat", "sand", "og"];
console.log(`${str} can be segmented: ${isWordBrekableStr(str, wordDict)}`);
