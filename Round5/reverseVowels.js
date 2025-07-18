/**
 * Date: 18th July, 2025
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
  if (!str || str.length === 0) return str;

  const vowels = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);

  let left = 0,
    right = str.length - 1;

  const chars = str.split("");
  while (left < right) {
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }

    while (left < right && !vowels.has(chars[right])) {
      right--;
    }

    const temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;

    left++;
    right--;
  }

  return chars.join("");
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
