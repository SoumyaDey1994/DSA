/**
 * Date: 26th February, 2025
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
function isValidAnagram(src, target) {
    if(src.length !== target.length) return false;
    const charFreq = new Array(26).fill(0);
    // Increment char Freq of src & decrement for target
    for(let i=0; i<src.length; i++) { // O(n)
        charFreq[src[i].toLowerCase().charCodeAt() - 97]++;
        charFreq[target[i].toLowerCase().charCodeAt() - 97]--;
    }

    return Math.max(...charFreq) === 0;
}

let src = 'rat';
let target = 'car';
console.log(`${src} and ${target} are valid anagrams: ${isValidAnagram(src, target)}`);

src = 'silent';
target = 'listen';
console.log(`${src} and ${target} are valid anagrams: ${isValidAnagram(src, target)}`);

src = 'hello';
target = 'heloo';
console.log(`${src} and ${target} are valid anagrams: ${isValidAnagram(src, target)}`);

src = 'anagram';
target = 'nagaram';
console.log(`${src} and ${target} are valid anagrams: ${isValidAnagram(src, target)}`);

src = 'aabbcc';
target = 'abcbac';
console.log(`${src} and ${target} are valid anagrams: ${isValidAnagram(src, target)}`);

src = 'stop';
target = 'post';
console.log(`${src} and ${target} are valid anagrams: ${isValidAnagram(src, target)}`);

src = 'aabb';
target = 'abac';
console.log(`${src} and ${target} are valid anagrams: ${isValidAnagram(src, target)}`);
