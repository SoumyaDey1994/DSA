/**
 * Date: 11th July, 2026
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
function findDualPalindromeWithinRange(rangeStart, rangeEnd) {
  if (rangeStart === undefined || rangeEnd === undefined) return;

  const result = [];

  for (let i = rangeStart; i <= rangeEnd; i++) {
    const currDecimal = i.toString();
    const currBinary = i.toString(2);

    // console.log(currDecimal, currBinary);

    if (isPalindrome(currDecimal) && isPalindrome(currBinary)) {
      result.push(i);
    }
  }

  return result;
}

function isPalindrome(value) {
  let left = 0,
    right = value.length - 1;

  while (left < right) {
    if (value[left] !== value[right]) return false;

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
