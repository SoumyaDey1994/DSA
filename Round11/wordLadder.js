/**
 * Date: 7th April, 2026
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
  if (!beginWord || !endWord) return 0;
  if (beginWord.length !== endWord.length) return 0;

  const wordSet = new Set(wordList);
  const executionQueue = [[beginWord, 1]]; // word, level

  if (!wordSet.has(endWord)) return 0;

  while (executionQueue.length > 0) {
    const [currWord, level] = executionQueue.shift();

    if (currWord === endWord) return level;

    for (let i = 0; i < currWord.length; i++) {
      for (let char = 0; char < 26; char++) {
        const subString =
          currWord.slice(0, i) +
          String.fromCharCode(char + 97) +
          currWord.slice(i + 1);
        if (wordSet.has(subString)) {
          executionQueue.push([subString, level + 1]);
          wordSet.delete(subString);
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
