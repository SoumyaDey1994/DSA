/**
 * Date: 14th April, 2025
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
function getLadderSteps(beginWord, endWord, wordList) {
  // invalid conditions
  if (wordList.length === 0) return 0;
  if (beginWord.length !== endWord.length) return 0;

  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]]; // start with step 1
  while (queue.length > 0) {
    let [currWord, step] = queue.shift();
    // if currWord = endWord, loop ends with output as step value
    if (currWord === endWord) return step;
    // form new words replacing 1 char at a time
    // check if new word exists in set
    // if yes, increment step count
    for (let i = 0; i < currWord.length; i++) {
      for (let j = 0; j < 26; j++) {
        let newWord =
          currWord.slice(0, i) +
          String.fromCharCode(97 + j) +
          currWord.slice(i + 1);

        if (wordSet.has(newWord)) {
          // console.log(newWord, step+1);
          queue.push([newWord, step + 1]);
          // remove new word from set to avoid dup computation
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
}

let beginWord = "hit",
  endWord = "cog";
let wordList = ["hot", "dot", "dog", "lot", "log", "cog"];
let steps = getLadderSteps(beginWord, endWord, wordList);
console.log(
  `No of steps needed to form ${endWord} from ${beginWord} is: ${steps}`
);

(beginWord = "abc"), (endWord = "xyz");
wordList = ["abd", "axc", "ayz", "xbz", "xyz", "xbc"];
steps = getLadderSteps(beginWord, endWord, wordList);
console.log(
  `No of steps needed to form ${endWord} from ${beginWord} is: ${steps}`
);

(beginWord = "hit"), (endWord = "cog");
wordList = ["hot", "dot", "dog", "lot", "log"];
steps = getLadderSteps(beginWord, endWord, wordList);
console.log(
  `No of steps needed to form ${endWord} from ${beginWord} is: ${steps}`
);
