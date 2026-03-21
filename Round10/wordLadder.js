/**
 * Date: 21st March, 2026
 * Problem Statement: Word Ladder Problem (BFS)
 * You are given two words, beginWord and endWord, and a wordList (a dictionary of valid words). 
 * The goal is to transform beginWord into endWord by changing only one letter at a time, 
 * ensuring that each transformed word exists in wordList.
 * 🔹 Constraints:
 *  Every transformation must be in the wordList.
 *  Only one letter can be changed at a time.
 *  Find the shortest transformation sequence length from beginWord to endWord.
 *  If no valid transformation exists, return 0.
 * Example 1:
 *      beginWord = "hit"
        endWord = "cog"
        wordList = ["hot","dot","dog","lot","log","cog"]
      Output: 5
      Explanation: hit → hot → dot → dog → cog (5 words in the sequence)
  * Example 2:
        beginWord = "abc"
        endWord = "xyz"
        wordList = ["abd", "axc", "ayz", "xyz"]
       Output: 4
       Explanation: abc → axc → ayz → xyz (Length: 4)
 */
function findLadderStepsCount(beginWord, endWord, wordList) {
  if (!beginWord || beginWord.length === 0 || !endWord || endWord.length === 0)
    return 0;

  const wordSet = new Set(wordList);
  const executionQueue = [[beginWord, 1]]; // word, leve

  while (executionQueue.length > 0) {
    const [currWord, level] = executionQueue.shift();

    if (currWord === endWord) return level;

    for (let i = 0; i < currWord.length; i++) {
      for (let char = 97; char < 97 + 26; char++) {
        const subStr =
          currWord.slice(0, i) +
          String.fromCharCode(char) +
          currWord.slice(i + 1);
        if (wordSet.has(subStr)) {
          executionQueue.push([subStr, level + 1]);
          wordSet.delete(currWord);
        }
      }
    }
  }

  return 0;
}

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
let output = findLadderStepsCount(beginWord, endWord, wordList);
console.log(
  `No of changes required to make ${beginWord} to ${endWord} is: ${output}`,
);

beginWord = "abc";
endWord = "xyz";
wordList = ["abd", "axc", "ayz", "xbz", "xyz", "xbc"];
output = findLadderStepsCount(beginWord, endWord, wordList);
console.log(
  `No of changes required to make ${beginWord} to ${endWord} is: ${output}`,
);

beginWord = "hit";
endWord = "cog";
wordList = ["hot", "dot", "dog", "lot", "log"];
output = findLadderStepsCount(beginWord, endWord, wordList);
console.log(
  `No of changes required to make ${beginWord} to ${endWord} is: ${output}`,
);
