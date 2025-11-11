/**
 * Date: 9th Nov, 2025
 * Check if s and t are anagrams (contain the same characters with the same frequency).
 * Example 1:
 *      Input: s = "listen", t = "silent"
 *      Output: true
 * Example 2:
 *      Input: s = "rat", t = "car"
 *      Output: false
 * Example 3:
 *      Input: s = "anagram", t = "nagaram"
 *      Output: true
 * Example 4:
 *      Input: s = "hello", t = "helloo"
 *      Output: false
 */

function isValidAnagrams(src, target) {
  if (!src || !target) return false;
  if (src.length !== target.length) return false;

  const freqMap = new Array(26).fill(0);

  for (let i = 0; i < src.length; i++) {
    const srcChar = src[i].toLowerCase();
    const targetChar = target[i].toLowerCase();

    freqMap[srcChar.charCodeAt(0) - 97]++;
    freqMap[targetChar.charCodeAt(0) - 97]--;
  }

  return Math.max(...freqMap) === 0;
}

let src = "rat";
let target = "car";
console.log(
  `${src} and ${target} are valid anagrams: ${isValidAnagrams(src, target)}`
);

src = "silent";
target = "listen";
console.log(
  `${src} and ${target} are valid anagrams: ${isValidAnagrams(src, target)}`
);

src = "hello";
target = "heloo";
console.log(
  `${src} and ${target} are valid anagrams: ${isValidAnagrams(src, target)}`
);

src = "anagram";
target = "nagaram";
console.log(
  `${src} and ${target} are valid anagrams: ${isValidAnagrams(src, target)}`
);

src = "aabbcc";
target = "abcbac";
console.log(
  `${src} and ${target} are valid anagrams: ${isValidAnagrams(src, target)}`
);

src = "stop";
target = "post";
console.log(
  `${src} and ${target} are valid anagrams: ${isValidAnagrams(src, target)}`
);

src = "aabb";
target = "abac";
console.log(
  `${src} and ${target} are valid anagrams: ${isValidAnagrams(src, target)}`
);

src = "rom";
target = "orm";
console.log(
  `${src} and ${target} are valid anagrams: ${isValidAnagrams(src, target)}`
);
