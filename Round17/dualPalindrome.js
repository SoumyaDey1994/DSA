/**
 * Date: 24th October, 2026
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
  if (start > end) return;

  const output = [];
  for (let number = start; number <= end; number++) {
    const binaryValue = number.toString(2);
    const decimalValue = number.toString();

    if (isPalindrome(binaryValue) && isPalindrome(decimalValue)) {
      output.push(number);
    }
  }

  return output;
}

function isPalindrome(valueStr) {
  let left = 0,
    right = valueStr.length - 1;

  while (left < right) {
    if (valueStr[left] !== valueStr[right]) return false;
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
  `Dual Palindromes in range {${rangeStart}, ${rangeEnd}} is: [${findDualPalindromeWithinRange(rangeStart, rangeEnd)}]`,
);

rangeStart = 50;
rangeEnd = 100;
console.log(
  `Dual Palindromes in range {${rangeStart}, ${rangeEnd}} is: [${findDualPalindromeWithinRange([rangeStart, rangeEnd])}]`,
);

rangeStart = 100;
rangeEnd = 1000;
console.log(
  `Dual Palindromes in range {${rangeStart}, ${rangeEnd}} is: [${findDualPalindromeWithinRange(rangeStart, rangeEnd)}]`,
);
