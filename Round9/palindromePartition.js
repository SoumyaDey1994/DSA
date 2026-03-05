/**
 * Date: 5th March, 2026
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
function getPalindromePartitions(input) {
  if (!input || input.length === 0) return [];

  const result = [];
  backtrack(input, 0, [], result);
  return result.map((r) => `[${r}]`);
}

function backtrack(input, startIndex, subList, result) {
  if (startIndex === input.length) {
    for (let str of subList) {
      if (result.indexOf(str) === -1) {
        result.push(str);
      }
    }
    return;
  }

  for (let i = startIndex; i < input.length; i++) {
    const isPalindrome = checkIfPalindrome(input, startIndex, i);
    if (isPalindrome) {
      subList.push([input.slice(startIndex, i + 1)]);
      backtrack(input, i + 1, subList, result);
      subList.pop();
    }
  }
}

function checkIfPalindrome(input, startIndex, endIndex) {
  if (startIndex > endIndex) return false;

  while (startIndex < endIndex) {
    if (input[startIndex] !== input[endIndex]) return false;

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
