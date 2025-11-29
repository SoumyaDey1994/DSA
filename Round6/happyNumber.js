/**
 * Date: 28th Nov, 2025
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

function isHappyNumber(num) {
  if (!num || num <= 0) return null;

  if (num === 1) return true;

  let slow = num;
  let fast = getNextValue(num);

  while (fast !== 1 && fast !== slow) {
    slow = getNextValue(slow);
    fast = getNextValue(getNextValue(fast));
  }

  return fast === 1;
}

function getNextValue(num) {
  let squareSum = 0;
  while (num > 0) {
    const rem = num % 10;
    squareSum = squareSum + rem * rem;
    num = Math.floor(num / 10);
  }
  return squareSum;
}

let num = 19;
console.log(`Is ${num} a Happy Number: ${isHappyNumber(num)}`);

num = 2;
console.log(`Is ${num} a Happy Number: ${isHappyNumber(num)}`);

num = 23;
console.log(`Is ${num} a Happy Number: ${isHappyNumber(num)}`);

num = 101;
console.log(`Is ${num} a Happy Number: ${isHappyNumber(num)}`);
