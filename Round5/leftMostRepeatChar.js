/**
 * Date: 9th July, 2025
 * Given a string, find the left-most character that repeats. If there is no repeating character, return a special value (like -1).
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
function findLeftMostRepeatChar(input) {
  if (!input || input.length === 0) return;

  const freqMap = new Map();
  for (let char of input) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  for (let char of input) {
    if (freqMap.get(char) > 1) {
      return char;
    }
  }

  return -1;
}


let input = "abca";
console.log(
  `Left-most repeat char of str ${input} is: ${findLeftMostRepeatChar(input)}`
);

input = "abcdef";
console.log(
  `Left-most repeat char of str ${input} is: ${findLeftMostRepeatChar(input)}`
);

input = "geeksforgeeks";
console.log(
  `Left-most repeat char of str ${input} is: ${findLeftMostRepeatChar(input)}`
);

input = "committee";
console.log(
  `Left-most repeat char of str ${input} is: ${findLeftMostRepeatChar(input)}`
);

input = "bottom";
console.log(
  `Left-most repeat char of str ${input} is: ${findLeftMostRepeatChar(input)}`
);

input = "chocolate";
console.log(
  `Left-most repeat char of str ${input} is: ${findLeftMostRepeatChar(input)}`
);

input = "alchohol";
console.log(
  `Left-most repeat char of str ${input} is: ${findLeftMostRepeatChar(input)}`
);
