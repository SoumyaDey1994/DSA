/**
 * Date: 22nd Jan, 2026
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
function isAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;

  const freqArr = new Array(26).fill(0);
  for (let i = 0; i < word1.length; i++) {
    const sourceCharCode = word1.toLowerCase().charCodeAt(i);
    const targetCharCode = word2.toLowerCase().charCodeAt(i);

    freqArr[sourceCharCode - 97]++;
    freqArr[targetCharCode - 97]--;
  }

  return Math.max(...freqArr) === 0;
}

function getAnagramGroups(input) {
  if (!input || input.length === 0) return [];

  const groups = [[input[0]]];
  const visited = new Set();

  visited.add(input[0]);
  for (let i = 1; i < input.length; i++) {
    const word = input[i];

    for (let group of groups) {
      if (isAnagram(group[0], word)) {
        visited.add(word);
        group.push(word);
      }
    }

    if (!visited.has(word)) {
      groups.push([word]);
    }
  }

  return groups;
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
