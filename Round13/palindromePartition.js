/**
 * Date: 10th May, 2026
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
function getPalindromePartitions(str) {
  if (!str || str.length === 0) return;

  const startIndex = 0,
    subList = [],
    result = [];
  backtrack(str, startIndex, subList, result);
  return result;
}

function backtrack(str, startIndex, subList, result) {
  if (startIndex === str.length) {
    for (let str of subList) {
      if (result.indexOf(str) === -1) {
        result.push(str);
      }
    }
    return;
  }

  for (let endIndex = startIndex; endIndex < str.length; endIndex++) {
    const isPalindrome = checkIfPalindrome(str, startIndex, endIndex);
    if (isPalindrome) {
      subList.push([str.slice(startIndex, endIndex + 1)]);
      backtrack(str, endIndex + 1, subList, result);
      subList.pop();
    }
  }
}

function checkIfPalindrome(str, startIndex, endIndex) {
  if (startIndex > endIndex) return false;

  while (startIndex < endIndex) {
    if (str[startIndex] !== str[endIndex]) {
      return false;
    }

    startIndex++;
    endIndex--;
  }

  return true;
}

let str = "aab";
console.log(
  `Palindroming substrings of ${str} are: [${getPalindromePartitions(str)}]`,
);

str = "a";
console.log(
  `Palindroming substrings of ${str} are: [${getPalindromePartitions(str)}]`,
);

str = "abbaba";
console.log(
  `Palindroming substrings of ${str} are: [${getPalindromePartitions(str)}]`,
);

str = "badshah";
console.log(
  `Palindroming substrings of ${str} are: [${getPalindromePartitions(str)}]`,
);
