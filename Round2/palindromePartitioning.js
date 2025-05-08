/**
 * Date: 8th May, 2025
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

function isPalindrome(str, start, end) {
  if (str.length === 1) return true;

  while (start <= end) {
    if (str[start] !== str[end]) return false;
    start++;
    end--;
  }
  return true;
}

function backtrack(str, start, path, result) {
  if (start === str.length) {
    for (let subStr of path) {
      if (result.indexOf(subStr) === -1) {
        result.push(subStr);
      }
    }
    return;
  }

  for (let end = start; end < str.length; end++) {
    if (isPalindrome(str, start, end)) {
      path.push(str.slice(start, end + 1));
      backtrack(str, end + 1, path, result);
      path.pop();
    }
  }
}

function findPalindromeSubstrings(str) {
  if (!str || str.length === 0) return;

  const result = [];
  backtrack(str, 0, [], result);
  return result.map((part) => `[${part}]`);
}

let str = "aab";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindromeSubstrings(str)}]`
);

str = "a";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindromeSubstrings(str)}]`
);

str = "abbaba";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindromeSubstrings(str)}]`
);

str = "badshah";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindromeSubstrings(str)}]`
);