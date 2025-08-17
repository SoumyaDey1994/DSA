/**
 * Date: 17th August, 2025
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
function findWordLadderStepCount(beginWord, endWord, wordList) {
  if (!wordList || wordList.length === 0) return 0;

  const wordSet = new Set(wordList);

  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]]; // level 1

  while (queue.length > 0) {
    const [currWord, level] = queue.shift();
    if (currWord === endWord) return level;

    for (let i = 0; i < currWord.toLowerCase().length; i++) {
      for (let j = 97; j < 97 + 26; j++) {
        let newChar = String.fromCharCode(j);
        // replace 1 char at a time
        let newWord = currWord.slice(0, i) + newChar + currWord.slice(i + 1);
        if (wordSet.has(newWord)) {
          queue.push([newWord, level + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
}

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
let output = findWordLadderStepCount(beginWord, endWord, wordList);
console.log(
  `No of changes required to make ${beginWord} to ${endWord} is: ${output}`
);

beginWord = "abc";
endWord = "xyz";
wordList = ["abd", "axc", "ayz", "xbz", "xyz", "xbc"];
output = findWordLadderStepCount(beginWord, endWord, wordList);
console.log(
  `No of changes required to make ${beginWord} to ${endWord} is: ${output}`
);

beginWord = "hit";
endWord = "cog";
wordList = ["hot", "dot", "dog", "lot", "log"];
output = findWordLadderStepCount(beginWord, endWord, wordList);
console.log(
  `No of changes required to make ${beginWord} to ${endWord} is: ${output}`
);
