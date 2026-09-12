/**
 * Date: 12th September, 2026
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
function findAnagramGroups(inputList) {
  if (!inputList || inputList.length === 0) return;

  const anagramGroups = [];

  for (let word of inputList) {
    let isMatch = false;

    for (let grp of anagramGroups) {
      if (isAnagram(word, grp[0])) {
        isMatch = true;
        grp.push(word);
      }
    }

    if (!isMatch) {
      anagramGroups.push([word]);
    }
  }

  return anagramGroups;
}

function isAnagram(src, target) {
  if (src.length !== target.length) return false;

  const charFreq = new Array(26).fill(0);

  for (let i = 0; i < src.length; i++) {
    const srcCharCode = src[i].toLowerCase().charCodeAt(0);
    const targetCharCode = target[i].toLowerCase().charCodeAt(0);

    charFreq[srcCharCode - 97] = charFreq[srcCharCode - 97] + 1;
    charFreq[targetCharCode - 97] = charFreq[targetCharCode - 97] - 1;
  }

  return Math.max(...charFreq) === 0 && Math.min(...charFreq) === 0;
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
