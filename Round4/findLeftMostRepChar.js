/**
 * Date: 19th May, 2025
 * Problem Statement: Left-most Repeat Char
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
function findLeftMostRepChar(str) {
  if (!str || str.length === 0) return -1;

  const freqMap = new Map();
  // create char freq map
  for (let char of str) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }
  // get left-most char which repeats, if no char, then return -1
  for (let char of str) {
    const freq = freqMap.get(char);
    if (freq > 1) return char;
  }
  return -1;
}

let input = "abca";
console.log(
  `Left-most repeat char of str ${input} is: ${findLeftMostRepChar(input)}`
);

input = "abcdef";
console.log(
  `Left-most repeat char of str ${input} is: ${findLeftMostRepChar(input)}`
);

input = "geeksforgeeks";
console.log(
  `Left-most repeat char of str ${input} is: ${findLeftMostRepChar(input)}`
);

input = "committee";
console.log(
  `Left-most repeat char of str ${input} is: ${findLeftMostRepChar(input)}`
);

input = "bottom";
console.log(
  `Left-most repeat char of str ${input} is: ${findLeftMostRepChar(input)}`
);

input = "chocolate";
console.log(
  `Left-most repeat char of str ${input} is: ${findLeftMostRepChar(input)}`
);

input = "alchohol";
console.log(
  `Left-most repeat char of str ${input} is: ${findLeftMostRepChar(input)}`
);
