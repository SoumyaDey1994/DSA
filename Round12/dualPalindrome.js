/**
 * Date: 29th April, 2026
 * Problem Statement: Dual Palindrome
 * A number is a Dual Palindrome
 * if it is a palindrome in two different number bases
 * (e.g., base 10 and base 2, or base 10 and base 8, etc.)
 *
 * Given a range [L, R], find all numbers that are palindromes in both base 10 and base 2.
 * Example 1:
 *      Input: range=[0, 10]
 *      Output: [0, 1, 3, 5, 7, 9]
 * Example 2:
 *      Input: range=[10, 50]
 *      Output: [33]
 */

function findDualPalindromeWithinRange(start, end) {
  if (end < start) return;

  const output = [];

  for (let i = start; i <= end; i++) {
    const isBase10Palindrome = isPalindrome(i.toString());
    const isBase2Palindrome = isPalindrome(i.toString(2));

    if (isBase10Palindrome && isBase2Palindrome) {
      output.push(i);
    }
  }

  return output;
}

function isPalindrome(str) {
  let left = 0,
    right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }

  return true;
}

let rangeStart = 0;
let rangeEnd = 10;
console.log(
  `Dual Palindromes in range {${(rangeStart, rangeEnd)}} is: [${findDualPalindromeWithinRange(rangeStart, rangeEnd)}]`,
);

rangeStart = 10;
rangeEnd = 50;
console.log(
  `Dual Palindromes in range {${(rangeStart, rangeEnd)}} is: [${findDualPalindromeWithinRange(rangeStart, rangeEnd)}]`,
);

rangeStart = 50;
rangeEnd = 100;
console.log(
  `Dual Palindromes in range {${(rangeStart, rangeEnd)}} is: [${findDualPalindromeWithinRange(rangeStart, rangeEnd)}]`,
);

rangeStart = 100;
rangeEnd = 1000;
console.log(
  `Dual Palindromes in range {${(rangeStart, rangeEnd)}} is: [${findDualPalindromeWithinRange(rangeStart, rangeEnd)}]`,
);
