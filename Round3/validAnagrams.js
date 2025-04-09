/**
 * Date: 9th April, 2025
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
function isAnagrams(source, target) { // O(n)
  // string having diff length cannot be anagrams
  if (source.length !== target.length) return false;
  // initialize freq array, 26 position for 26 alphabets
  const freq = new Array(26).fill(0);
  for (let i = 0; i < source.length; i++) {
    let sourceCharLower = source[i].toLowerCase();
    let targetCharLower = target[i].toLowerCase();

    // increase freq at position of source char
    // decrease freq at position of target char
    // if strings are anagrams, end result of freq will be 0
    freq[sourceCharLower.charCodeAt() - 97]++;
    freq[targetCharLower.charCodeAt() - 97]--;
  }
  // return true if all elements of freq list is 0
  return Math.max(...freq) === 0;
}

let s = "listen",
  t = "silent";
console.log(`${s} & ${t} are valid anagrams: ${isAnagrams(s, t)}`);

(s = "rat"), (t = "car");
console.log(`${s} & ${t} are valid anagrams: ${isAnagrams(s, t)}`);

(s = "anagram"), (t = "nagaram");
console.log(`${s} & ${t} are valid anagrams: ${isAnagrams(s, t)}`);

(s = "hello"), (t = "helloo");
console.log(`${s} & ${t} are valid anagrams: ${isAnagrams(s, t)}`);

(s = "stop"), (t = "tops");
console.log(`${s} & ${t} are valid anagrams: ${isAnagrams(s, t)}`);

(s = "stop"), (t = "tops");
console.log(`${s} & ${t} are valid anagrams: ${isAnagrams(s, t)}`);

(s = "talent"), (t = "latent");
console.log(`${s} & ${t} are valid anagrams: ${isAnagrams(s, t)}`);

(s = "soumya"), (t = "sourya");
console.log(`${s} & ${t} are valid anagrams: ${isAnagrams(s, t)}`);
