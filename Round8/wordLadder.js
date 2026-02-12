/**
 * Date: 12th Feb, 2025
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
function findLadderSteps(beginWord, endWord, wordList) {
  if (!beginWord || !endWord || wordList.length === 0) return 0;

  if (beginWord === endWord) return 1;
  if (!wordSet.has(endWord)) return -1;

  const wordSet = new Set(wordList);
  const queue = [[beginWord, 1]]; // startingWord, level

  while (queue.length > 0) {
    const [currWord, level] = queue.shift();

    if (currWord === endWord) return level;

    for (let i = 0; i < currWord.length; i++) {
      for (let char = 0; char < 26; char++) {
        const charCode = String.fromCharCode(97 + char);
        const word = currWord.slice(0, i) + charCode + currWord.slice(i + 1);
        if (wordSet.has(word)) {
          queue.push([word, level + 1]);
          wordSet.delete(word);
        }
      }
    }
  }

  return -1;
}

let beginWord = "hit";
let endWord = "cog";
let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
let output = findLadderSteps(beginWord, endWord, wordList);
console.log(
  `No of changes required to make ${beginWord} to ${endWord} is: ${output}`,
);

beginWord = "abc";
endWord = "xyz";
wordList = ["abd", "axc", "ayz", "xbz", "xyz", "xbc"];
output = findLadderSteps(beginWord, endWord, wordList);
console.log(
  `No of changes required to make ${beginWord} to ${endWord} is: ${output}`,
);

beginWord = "hit";
endWord = "cog";
wordList = ["hot", "dot", "dog", "lot", "log"];
output = findLadderSteps(beginWord, endWord, wordList);
console.log(
  `No of changes required to make ${beginWord} to ${endWord} is: ${output}`,
);

beginWord = "bat";
endWord = "mat";
wordList = ["bat", "mat"];
output = findLadderSteps(beginWord, endWord, wordList);
console.log(
  `No of changes required to make ${beginWord} to ${endWord} is: ${output}`,
);

beginWord = "top";
endWord = "otp";
wordList = ["top", "cot", "otp", "pop", "pot", "oop"];
output = findLadderSteps(beginWord, endWord, wordList);
console.log(
  `No of changes required to make ${beginWord} to ${endWord} is: ${output}`,
);
