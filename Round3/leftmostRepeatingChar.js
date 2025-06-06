/**
 * Date: 12th April, 2025
 * Given a string, find the left-most character that repeats. 
 * If there is no repeating character, return a special value (like -1).
 * 
 * Example 1:
    Input: "abca"
    Output: 'a'
    Explanation: The character 'a' appears twice, and its first occurrence is at index 0, which is the left-most repeating character.

    Example 2:
    Input: "abcdef"
    Output: -1
    Explanation: No character repeats in this string.

    Example 3:
    Input: "geeksforgeeks"
    Output: 'g'
    Explanation: The character 'g' appears multiple times, and its first occurrence is at index 0.
 */
function getLeftMostRepeatChar(str) {
  if (str.length <= 0) return "";

  const freqMap = new Map();
  // get frequency map
  for (let char of str) {
    // O(n)
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  for (let char of str) {
    if (freqMap.get(char) > 1) return char;
  }

  return -1;
}

let input = "abca"; // a
let output = getLeftMostRepeatChar(input);
console.log(`Leftmost repeating char of string ${input} is: ${output}`);

input = "abcde"; // -1
output = getLeftMostRepeatChar(input);
console.log(`Leftmost repeating char of string ${input} is: ${output}`);

input = "geeksforgeeks"; //g
output = getLeftMostRepeatChar(input);
console.log(`Leftmost repeating char of string ${input} is: ${output}`);

input = "tanima"; // a
output = getLeftMostRepeatChar(input);
console.log(`Leftmost repeating char of string ${input} is: ${output}`);

input = "committee"; // m
output = getLeftMostRepeatChar(input);
console.log(`Leftmost repeating char of string ${input} is: ${output}`);

input = "geo-policies"; // e
output = getLeftMostRepeatChar(input);
console.log(`Leftmost repeating char of string ${input} is: ${output}`);
