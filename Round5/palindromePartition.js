/**
 * Date: 24th August, 2025
 * Problem Statement: Palindrome Partitioning
 * Given a string s, partition s such that every substring of the partition is a palindrome.
 * Return all possible palindrome partitioning of s.
 * Example 1:
 *      Input: str = "aab"
 *      Output: [["a", "a", "b"], ["aa", "b"]]
 *      Explanation:
 *          "a" + "a" + "b" → all are palindromes
 *          "aa" + "b" → both substrings are palindromes
 *          "aab" is not a palindrome, so it's not valid.
 * Example 2:
 *      Input: str = "a"
 *      Output: [["a"]]
 */

function findPalindomePartitions(str) {
  if (!str || str.length === 0) return;

  const result = [];
  backtrack(str, 0, [], result);
  return result;
}

function backtrack(str, startIndex, subset, result) {
  if (startIndex === str.length) {
    for (let s of subset) {
      if (result.indexOf(s) === -1) {
        result.push(s);
      }
    }
  }

  for (let endIndex = startIndex; endIndex < str.length; endIndex++) {
    if (isPalindrome(str, startIndex, endIndex)) {
      subset.push(str.slice(startIndex, endIndex + 1));
      backtrack(str, endIndex + 1, subset, result);
      subset.pop(); // backtrack
    }
  }
}

function isPalindrome(str, startIndex, endIndex) {
  while (startIndex < endIndex) {
    if (str[startIndex] !== str[endIndex]) return false;
    startIndex++;
    endIndex--;
  }

  return true;
}

let str = "aab";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindomePartitions(str)}]`
);

str = "a";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindomePartitions(str)}]`
);

str = "abbaba";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindomePartitions(str)}]`
);

str = "badshah";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindomePartitions(str)}]`
);

str = "google";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindomePartitions(str)}]`
);
