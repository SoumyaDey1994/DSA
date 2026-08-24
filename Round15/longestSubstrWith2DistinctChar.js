/**
 * Date: 24th August, 2026
 * Problem Statement: Longest Substring with At Most Two Distinct Characters
 * Given a string s,
 * return the length of the longest substring that contains at most two distinct characters.
 * We need to find the longest continuous part of the string (substring)
 * where there are no more than 2 unique characters.
 * Example 1:
 *      Input: "eceba"
 *      Output: 3
 *      Explanation: Longest substring with at most 2 distinct characters is "ece"
 * Example 2:
 *      Input: "ccaabbb"
 *      Output: 5
 *      Explanation: Longest substring with at most 2 distinct characters is "aabbb"
 * Example 3:
 *      Input: "abcbbbbcccbdddadacb"
 *      Output: 10
 *      Explanation: Longest substring with at most 2 distinct characters is "bcbbbbcccb"
 * Example 4:
 *      Input: "aabbcc"
 *      Output: 4
 *      Explanation: Longest substring with at most 2 distinct characters is "aabb" or "bbcc"
 */
function findSubstrLength(input, k=2) {
    if(!input || input.length === 0) return;

    let left = 0, maxLength = -Infinity;
    const indexMap = new Map();

    for(let right=0; right<input.length; right++) {
        const curr = input[right];
        indexMap.set(curr, right);

        if(indexMap.size > k) {
            const minIndex = Math.min(...indexMap.values());
            const minIndexNum = input[minIndex];
            indexMap.delete(minIndexNum);
            left = minIndex + 1;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}


let input = "eceba";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findSubstrLength(
    input,
  )}`,
);

input = "ccaabbb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findSubstrLength(
    input,
  )}`,
);

input = "abcbbbbcccbdddadacb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findSubstrLength(
    input,
  )}`,
);

input = "aabbcc";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findSubstrLength(
    input,
  )}`,
);

input = "aaabbbb";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findSubstrLength(
    input,
  )}`,
);

input = "zzzz";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findSubstrLength(
    input,
  )}`,
);

input = "lmnopqrst";
console.log(
  `Longest Substring of ${input} with at most 2 char is of length: ${findSubstrLength(
    input,
  )}`,
);
