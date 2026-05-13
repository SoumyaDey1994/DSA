/**
 * Date: 13th May, 2026
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
function findAnagramGroups(input) {
  if (!input || input.length === 0) return [];

  const groups = [[input[0]]];

  for (let i = 1; i < input.length; i++) {
    let isFound = false;
    const curr = input[i];
    for (let grp of groups) {
      if (isAnagram(grp[0], curr)) {
        isFound = true;
        grp.push(curr);
      }
    }

    if (!isFound) {
      groups.push([curr]);
    }
  }

  return groups;
}

function isAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;

  const freqList = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    const charCode1 = word1[i].charCodeAt(0);
    const charCode2 = word2[i].charCodeAt(0);
    freqList[charCode1 - 97]++;
    freqList[charCode2 - 97]--;
  }

  return Math.max(...freqList) === 0 && Math.min(...freqList) === 0;
}

let inputList = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(findAnagramGroups(inputList));

inputList = ["listen", "silent", "enlist", "google", "gogole"];
console.log(findAnagramGroups(inputList));

inputList = ["abc", "cab", "bca", "xyz", "yxz", "zxy"];
console.log(findAnagramGroups(inputList));

inputList = ["apple", "leap", "papel", "pale"];
console.log(findAnagramGroups(inputList));

inputList = ["rat", "car", "tar", "art", "arc"];
console.log(findAnagramGroups(inputList));

inputList = ["stop", "post", "pots", "tops", "opts", "pots"];
console.log(findAnagramGroups(inputList));

inputList = ["ASR", "AAR", "CSR", "CAR", "QBR"];
console.log(findAnagramGroups(inputList));
