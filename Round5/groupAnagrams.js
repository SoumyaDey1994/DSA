/**
 * Date: 9th July, 2025
 * Problem Statement: Grouping Anagrams
 * Given an array of strings, group all the anagrams together.
 * An anagram is a word or phrase formed by rearranging the letters of another word.
 * Example Explanation
 *      If two words have the same characters in the same frequency, they belong to the same group.
 *      The order of groups does not matter.
 * Example 1:
 *      Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 *      Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
 * Example 2:
 *      Input: ["listen", "silent", "enlist", "google", "gogole"]
 *      Output: [["listen", "silent", "enlist"], ["google", "gogole"]]
 * Example 3:
 *      Input: ["listen", "silent", "enlist", "google", "gogole"]
 *      Output: [["listen", "silent", "enlist"], ["google", "gogole"]]
 */
function getAnagramGroups(inputList) {
  if (!inputList || inputList.length === 0) return;

  let groups = [[inputList[0]]];
  for (let i = 0; i < inputList.length; i++) {
    const currWord = inputList[i];
    let isVisited = false;

    for (let group of groups) {
      if (isAnagram(currWord, group[0])) {
        isVisited = true;
        group.push(currWord);
      }
    }

    if (!isVisited) {
      groups.push([currWord]);
    }
  }

  return groups;
}

function isAnagram(word1, word2) {
  if (!word1 || !word2) return false;

  if (word1.length !== word2.length) return false;

  const charFreq = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    const sChar = word1[i].toLowerCase();
    const tChar = word2[i].toLowerCase();

    charFreq[sChar.charCodeAt(0) - 97]++;
    charFreq[tChar.charCodeAt(0) - 97]--;
  }

  return Math.max(...charFreq) === 0;
}

let inputList = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(getAnagramGroups(inputList));

inputList = ["listen", "silent", "enlist", "google", "gogole"];
console.log(getAnagramGroups(inputList));

inputList = ["abc", "cab", "bca", "xyz", "yxz", "zxy"];
console.log(getAnagramGroups(inputList));

inputList = ["apple", "leap", "papel", "pale"];
console.log(getAnagramGroups(inputList));

inputList = ["rat", "car", "tar", "art", "arc"];
console.log(getAnagramGroups(inputList));
