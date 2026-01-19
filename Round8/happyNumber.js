/**
 * Date: 19th Jan, 2026
 * 📌 Problem Statement — Happy Number
 * You are given a positive integer n.
 * Apply this process repeatedly:
 *      Replace the number by the sum of the squares of its digits
 *      Continue repeating the process until:
 *      The result becomes 1 → then the number is a happy number
 * OR it loops endlessly in a cycle → then the number is not happy
 * Output
 *      true → if n is a happy number
 *      false → otherwise
 * Example 1:
 *      n = 19
 *      Output: true
 *  Explanation:
 *      1² + 9² = 1 + 81 = 82
 *      8² + 2² = 64 + 4 = 68
 *      6² + 8² = 36 + 64 = 100
 *      1² + 0² + 0² = 1
 *      Hence, 19 is a happy number
 * Example 2:
 *      n = 2
 *      Output: false
 *  Explanation:
 *      2² = 4
        4² = 16
        1² + 6² = 37
        3² + 7² = 58
        5² + 8² = 89
        8² + 9² = 145
        1² + 4² + 5² = 42
        4² + 2² = 20
        2² + 0² = 4   ← repeats → cycle found
 */
function checkIfHappyNumber(n) {
  if (n < 2) return true;

  let slow = getSquareSumOfDigits(n);
  let fast = getSquareSumOfDigits(getSquareSumOfDigits(n));

  while (slow !== fast && fast !== 1) {
    slow = getSquareSumOfDigits(slow);
    fast = getSquareSumOfDigits(getSquareSumOfDigits(fast));
  }

  return fast === 1;
}

function getSquareSumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    sum = sum + rem * rem;
    n = Math.floor(n / 10);
  }

  return sum;
}

let num = 19;
console.log(`Is ${num} a Happy Number: ${checkIfHappyNumber(num)}`);

num = 2;
console.log(`Is ${num} a Happy Number: ${checkIfHappyNumber(num)}`);

num = 23;
console.log(`Is ${num} a Happy Number: ${checkIfHappyNumber(num)}`);

num = 101;
console.log(`Is ${num} a Happy Number: ${checkIfHappyNumber(num)}`);
