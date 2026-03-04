/**
 * Date: 4th March, 2025
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
function findLadderSequeneceLength(beginWord, endWord, wordList) {
  if (!beginWord || !endWord || wordList.length === 0) return 0;

  const wordSet = new Set(wordList);
  const queue = [[beginWord, 1]]; // word, level

  while (queue.length > 0) {
    const [currWord, level] = queue.shift();

    if (currWord === endWord) return level;

    for (let i = 0; i < currWord.length; i++) {
      for (let code = 0; code < 26; code++) {
        const subStr =
          currWord.slice(0, i) +
          String.fromCharCode(code + 97) +
          currWord.slice(i + 1);
        if (wordSet.has(subStr)) {
          wordSet.delete(subStr);
          queue.push([subStr, level + 1]);
        }
      }
    }
  }

  return -1;
}

let beginWord = "hit",
  endWord = "cog";
let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
let steps = findLadderSequeneceLength(beginWord, endWord, wordList);
console.log(
  `No of steps needed to form ${endWord} from ${beginWord} is: ${steps}`,
);

((beginWord = "abc"), (endWord = "xyz"));
wordList = ["abd", "axc", "ayz", "xbz", "xyz", "xbc"];
steps = findLadderSequeneceLength(beginWord, endWord, wordList);
console.log(
  `No of steps needed to form ${endWord} from ${beginWord} is: ${steps}`,
);

((beginWord = "hit"), (endWord = "cog"));
wordList = ["hot", "dot", "dog", "lot", "log"];
steps = findLadderSequeneceLength(beginWord, endWord, wordList);
console.log(
  `No of steps needed to form ${endWord} from ${beginWord} is: ${steps}`,
);
