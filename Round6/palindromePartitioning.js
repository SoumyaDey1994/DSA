/**
 * Date: 19th Dec, 2025
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
function findPalindomePatitions(str) {
  if (!str || str.length === 0) return;

  const result = [];
  backtrack(str, 0, [], result); // str, start, subStrs, result
  return result;
}

function backtrack(str, start, subStr, result) {
  if (start === str.length) {
    for (let s of subStr) {
      if (result.indexOf(s) === -1) {
        result.push(s);
      }
    }
    return;
  }

  for (let end = start; end < str.length; end++) {
    if (isPalindrome(str, start, end)) {
      subStr.push(str.slice(start, end + 1));
      backtrack(str, start + 1, subStr, result);
      subStr.pop();
    }
  }
}

function isPalindrome(str, start, end) {
  if (str.length === 1) return true;

  while (start < end) {
    if (str[start] !== str[end]) return false;

    start++;
    end--;
  }

  return true;
}

str = "a";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindomePatitions(str)}]`
);

str = "abbaba";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindomePatitions(str)}]`
);

str = "badshah";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindomePatitions(str)}]`
);
