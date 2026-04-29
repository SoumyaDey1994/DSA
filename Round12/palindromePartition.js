/**
 * Date: 29th April, 2026
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
function getPalindromePartitions(inputStr) {
  if (!inputStr || inputStr.length === 0) return [];

  const startIndex = 0,
    palindromeSubStrList = [],
    result = [];
  backtrack(inputStr, startIndex, palindromeSubStrList, result);
  return result;
}

function backtrack(inputStr, startIndex, palindromeSubStrList, result) {
  if (startIndex === inputStr.length) {
    for (let str of palindromeSubStrList) {
      if (result.indexOf(str) === -1) {
        result.push(str);
      }
    }
    return;
  }

  for (let i = startIndex; i < inputStr.length; i++) {
    const isPalindrome = checkIfPalindrome(inputStr, startIndex, i);
    if (isPalindrome) {
      const subStr = inputStr.slice(startIndex, i + 1);
      palindromeSubStrList.push(subStr);
      backtrack(inputStr, i + 1, palindromeSubStrList, result);
      palindromeSubStrList.pop();
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
