/**
 * Date: 27th June, 2026
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

  const result = [],
    palindromes = [];
  backtrack(str, 0, palindromes, result);
  return result.map((pal) => `[${pal}]`);
}

function backtrack(inputStr, startIndex, subList, result) {
  if (startIndex === inputStr.length) {
    for (let subStr of subList) {
      if (result.indexOf(subStr) === -1) {
        result.push(subStr);
      }
    }
    return;
  }

  for (let endIndex = startIndex; endIndex < inputStr.length; endIndex++) {
    const isSubStrPalindrome = isPalindrome(inputStr, startIndex, endIndex);
    if (isSubStrPalindrome) {
      const subStr = inputStr.slice(startIndex, endIndex + 1);
      subList.push(subStr);
      backtrack(inputStr, endIndex + 1, subList, result);
      subList.pop();
    }
  }
}

function isPalindrome(str, startIndex, endIndex) {
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
