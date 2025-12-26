/**
 * Date: 26th Dec, 2025
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

  const output = [];
  for (let i = 0; i < input.length; i++) {
    const currWord = input[i];
    let isMatch = false;
    for (let group of output) {
      if (isAnagram(group[0], currWord)) {
        isMatch = true;
        group.push(currWord);
      }
    }

    if (!isMatch) {
      output.push([currWord]);
    }
  }

  return output;
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freq = new Array(26).fill(0);

  for (let i = 0; i < str1.length; i++) {
    const srcChar = str1[i].toLowerCase();
    const targetChar = str2[i].toLowerCase();

    freq[srcChar.charCodeAt(0) - 97]++;
    freq[targetChar.charCodeAt(0) - 97]--;
  }

  return Math.max(...freq) === 0;
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
