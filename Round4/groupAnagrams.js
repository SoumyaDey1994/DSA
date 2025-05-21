/**
 * Date: 21st May, 2025
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
function getAnagramGroups(words) {
  if (!words || words.length === 0) return;

  const groupMap = new Map();

  for (const word of words) {
    sortedWord = word.split("").sort().join("");

    if (!groupMap.has(sortedWord)) {
      groupMap.set(sortedWord, []);
    }

    groupMap.get(sortedWord).push(word);
  }
  return [...groupMap.values()];
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
