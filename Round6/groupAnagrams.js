/**
 * Date: 16th Nov, 2025
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
  if (!inputList || inputList.length === 0) return [];

  let groups = [[inputList[0]]];

  for (let i = 1; i < inputList.length; i++) {
    let currStr = inputList[i];
    let isVisited = false;

    for (let group of groups) {
      if (isAnagram(currStr, group[0])) {
        group.push(currStr);
        isVisited = true;
      }
    }
    if (!isVisited) {
      groups.push([currStr]);
    }
  }

  return groups;
}

function isAnagram(source, target) {
  if (source.length !== target.length) return false;

  const freq = new Array(26).fill(0);

  for (let i = 0; i < source.length; i++) {
    const sCharCode = source[i].toLowerCase().charCodeAt(0);
    const tCharCode = target[i].toLowerCase().charCodeAt(0);

    freq[sCharCode - 97]++;
    freq[tCharCode - 97]--;
  }

  return Math.max(...freq) === 0;
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
