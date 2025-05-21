/**
 * Date: 21st May, 2025
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
function isAnagram(source, target) {
  if (!source || !target) return;
  // strings with diff length can't be anagrams
  if (source.length !== target.length) return false;

  const freqScores = new Array(26).fill(0);
  const aCharCode = 97;
  source = source.toLowerCase();
  target = target.toLowerCase();

  for (let i = 0; i < source.length; i++) {
    const srcCode = source.charCodeAt(i);
    const targetCode = target.charCodeAt(i);

    freqScores[srcCode - aCharCode]++;
    freqScores[targetCode - aCharCode]--;
  }

  return Math.max(...freqScores) === 0;
}

let src = "rat";
let target = "car";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`
);

src = "silent";
target = "listen";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`
);

src = "hello";
target = "heloo";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`
);

src = "anagram";
target = "nagaram";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`
);

src = "aabbcc";
target = "abcbac";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`
);

src = "stop";
target = "post";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`
);

src = "aabb";
target = "abac";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`
);

src = "rom";
target = "orm";
console.log(
  `${src} and ${target} are valid anagrams: ${isAnagram(src, target)}`
);
