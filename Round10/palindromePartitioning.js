/**
 * Date: 24th March, 2026
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
function findPalindromePartitions(str) {
  if (!str || str.length === 0) return [];

  const result = [];
  backtrack(str, 0, [], result); // str, startIndex, subList, result
  return result;
}

function backtrack(str, startIndex, subList, result) {
  if (startIndex === str.length) {
    for (let item of subList) {
      if (result.indexOf(item) === -1) {
        result.push(item);
      }
    }
  }

  for (let i = startIndex; i < str.length; i++) {
    const isPalindrome = checkIfPalindrome(str, startIndex, i);
    if (isPalindrome) {
      subList.push([str.slice(startIndex, i + 1)]);
      backtrack(str, i + 1, subList, result);
      subList.pop();
    }
  }
}

function checkIfPalindrome(str, startIndex, endIndex) {
  if (startIndex > endIndex) return false;

  while (startIndex < endIndex) {
    if (str[startIndex] !== str[endIndex]) return false;
    startIndex++;
    endIndex--;
  }

  return true;
}

let str = "aab";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindromePartitions(str)}]`,
);

str = "a";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindromePartitions(str)}]`,
);

str = "abbaba";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindromePartitions(str)}]`,
);

str = "badshah";
console.log(
  `Palindroming substrings of ${str} are: [${findPalindromePartitions(str)}]`,
);
