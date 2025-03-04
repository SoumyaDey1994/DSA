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

function isWordBreakPossible(str, dictionary) {
    const wordSet = new Set(dictionary);
    const partition = new Array(str.length+1).fill(false);
    partition[0] = true;

    for(let i=1; i<=str.length; i++) {
        for(let j=0; j<i; j++) {
            const subStr = str.substring(j, i);
            if(partition[j] && wordSet.has(subStr)) {
                console.log("i=",i,"j=",j);
                console.log("SubStr: ", subStr);
                partition[i] = true;
                break;
            }
        }
    }
    console.log("Partition List: ", partition);
    return partition[str.length];
}

let str = "leetcode", wordDict = ["leet", "code"];
console.log(`${str} can be segmented: ${isWordBreakPossible(str, wordDict)}`);

str = "applepenapple", wordDict = ["apple", "pen"];
console.log(`${str} can be segmented: ${isWordBreakPossible(str, wordDict)}`);

str = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"];
console.log(`${str} can be segmented: ${isWordBreakPossible(str, wordDict)}`);
