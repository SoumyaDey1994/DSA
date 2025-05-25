/**
 * Date: 25th May, 2025
 * Problem Statement: Reverse Vowels of a String
 * You are given a string s.
 * Your task is to reverse only the vowels in the string and return the resulting string.
 * 🎯 Goal:
 *      Only the positions of vowels (a, e, i, o, u - both lowercase and uppercase)
 *      should be swapped, all other characters should remain in the same place.
 * Example 1:
 *      Input:  "hello"
 *      Output: "holle"
 * Example 2:
 *      Input:  "leetcode"
 *      Output: "leotcede"
 * Example 3:
 *      Input:  "aA"
 *      Output: "Aa"
 */

function reverseVowels(str) {
  if (!str || str.length === 0) return;

  const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const charList = str.split("");
  let left = 0,
    right = charList.length - 1;
  while (left < right) {
    // skip left & right if not vowel
    while (left < right && !vowelSet.has(charList[left])) {
      left++;
    }

    while (left < right && !vowelSet.has(charList[right])) {
      right--;
    }
    // console.log(charList[left], charList[right]);
    // swap vowels
    const temp = charList[left];
    charList[left] = charList[right];
    charList[right] = temp;

    left++;
    right--;
  }

  return charList.join("");
}

let input = "hello";
console.log(
  `After reversing vowels, ${input} becomes: ${reverseVowels(input)}`
);

input = "SUceSS";
console.log(
  `After reversing vowels, ${input} becomes: ${reverseVowels(input)}`
);

input = "leetcode";
console.log(
  `After reversing vowels, ${input} becomes: ${reverseVowels(input)}`
);

input = "aA";
console.log(
  `After reversing vowels, ${input} becomes: ${reverseVowels(input)}`
);

input = "cOmmIttEE";
console.log(
  `After reversing vowels, ${input} becomes: ${reverseVowels(input)}`
);
