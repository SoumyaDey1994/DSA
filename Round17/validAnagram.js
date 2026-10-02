/**
 * Date: 2nd October, 2026
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
function isAnagram(src, target) {
  if (!src || src.length === 0) return;
  if (!target || target.length === 0) return;
  if (src.length !== target.length) return false;

  const frequency = new Array(26).fill(0);

  for (let i = 0; i < src.length; i++) {
    const srcCode = src[i].toLowerCase().charCodeAt(0);
    const targetCode = target[i].toLowerCase().charCodeAt(0);

    frequency[srcCode - 97]++;
    frequency[targetCode - 97]--;
  }

  return Math.max(...frequency) === 0 && Math.min(...frequency) === 0;
}

let src = "rat";
let target = "car";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`,
);

src = "silent";
target = "listen";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`,
);

src = "hello";
target = "heloo";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`,
);

src = "anagram";
target = "nagaram";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`,
);

src = "aabbcc";
target = "abcbac";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`,
);

src = "stop";
target = "post";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`,
);

src = "aabb";
target = "abac";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`,
);

src = "rom";
target = "orm";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`,
);
