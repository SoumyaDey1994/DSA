/**
 * Date: 27th February, 2025
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
function isAnagram(src, target) {
    // If string lengths differ, they are not anagrams
    if(src.length !== target.length) return false;
    const freqCounter = new Array(26).fill(0);
    // Increment freq of src char & decrement freq of target char
    for(let i=0; i<src.length; i++) { // O(n)
        freqCounter[src[i].toLowerCase().charCodeAt() - 97]++;
        freqCounter[target[i].toLowerCase().charCodeAt() - 97]--;
    }
    // After the iteration, if all char freq is 0, 
    // given strings are anagrams, else not
    return Math.max(...freqCounter) === 0;
}

function groupAnagrams(inputList) {
    let groups = [];

    for(let word of inputList) { // O(n)
        let isVisited = false;
        for(let group of groups) { // O(n)
            if(isAnagram(group[0], word)) { // O(k)
                group.push(word);
                isVisited = true;
                break;
            }
        }
        if(!isVisited) {
            groups.push([word]);
        }
    }
    return groups;
}

let inputList = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(inputList));

inputList = ["listen", "silent", "enlist", "google", "gogole"];
console.log(groupAnagrams(inputList));

inputList = ["abc", "cab", "bca", "xyz", "yxz", "zxy"];
console.log(groupAnagrams(inputList));

inputList = ["apple", "leap", "papel", "pale"];
console.log(groupAnagrams(inputList));

inputList = ["rat", "car", "tar", "art", "arc"];
console.log(groupAnagrams(inputList));
