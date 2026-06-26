/**
 * Date: 26th June, 2026
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
  if (!input || input.length === 0) return;

  const anagramGroups = [];

  for (let i = 0; i < input.length; i++) {
    const curr = input[i];
    let isMatched = false;
    for (const grp of anagramGroups) {
      if (isAnagram(grp[0], curr)) {
        isMatched = true;
        grp.push(curr);
      }
    }
    if (!isMatched) {
      anagramGroups.push([curr]);
    }
  }

  return anagramGroups;
}

function isAnagram(src, target) {
  if (src.length !== target.length) return false;

  const freqList = new Array(26).fill(0);

  for (let i = 0; i < src.length; i++) {
    const srcCharCode = src[i].charCodeAt(0);
    const targetCharCode = target[i].charCodeAt(0);

    freqList[srcCharCode - 97] = freqList[srcCharCode - 97] + 1;
    freqList[targetCharCode - 97] = freqList[targetCharCode - 97] - 1;
  }

  return Math.max(...freqList) === 0;
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
