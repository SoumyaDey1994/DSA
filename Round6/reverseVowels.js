/**
 * Date: 16th Nov, 2025
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
function reverseVowels(inputStr) {
  if (!inputStr || inputStr.length <= 1) return inputStr;

  const vowelSet = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let left = 0,
    right = inputStr.length - 1;

  const charArr = inputStr.split("");
  while (left < right) {
    while (left < right && !vowelSet.has(charArr[left])) left++;
    while (left < right && !vowelSet.has(charArr[right])) right--;

    const temp = charArr[left];
    charArr[left] = charArr[right];
    charArr[right] = temp;

    left++;
    right--;
  }

  return charArr.join("");
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

input = "beautiful voices around us"; // expected: buuotafel viocus iruand es
console.log(
  `After reversing vowels, ${input} becomes: ${reverseVowels(input)}`
);

input = "programming is a creative endeavor"; // expected: programmeng es e criateva indiavor
console.log(
  `After reversing vowels, ${input} becomes: ${reverseVowels(input)}`
);
