/**
 * Date: 28th May, 2025
 * Problem Statement: Prime Factors
 * Given an integer N, the task is to find all the prime factors of N.
 * A prime factor of a number is a prime number that divides N exactly,
 * without leaving a remainder.
 * Example 1:
 *      num = 28
 *      factors = [2, 7]
 *      Explanation: The factors of 28 are 1, 2, 4, 7, 14, 28.
 *                  Among them, the prime ones are 2 and 7.
 * Example 2:
 *      num = 45
 *      factors = [3, 5]
 *      Explanation: The prime factors of 45 are 3 and 5 since 45 = 3 × 3 × 5.
 * Example 3:
 *      num = 97
 *      factors = [97]
 *      Explanation: Since 97 is already a prime number, its only prime factor is itself.
 */
function findPrimeFactors(num) {
  if (!num || num === 0) return;

  if (num <= 3) return num;

  const factors = new Set();
  // If divisible by 2
  while (num % 2 === 0) {
    factors.add(2);
    num = num / 2;
  }
  // If divisible by 3
  while (num % 3 === 0) {
    factors.add(3);
    num = num / 3;
  }

  for (let i = 5; i <= Math.sqrt(num); i = i + 6) {
    // divisible by i
    if (num % i === 0) {
      factors.add(i);
      num = num / i;
    }

    // divisible by i+2
    if (num % (i + 2) === 0) {
      factors.add(i + 2);
      num = num / (i + 2);
    }
  }

  if (num > 0) {
    factors.add(num);
  }

  return [...factors];
}

let num = 28;
let factors = findPrimeFactors(num);
console.log(`Prime factors of ${num} are: [${factors}]`);

num = 45;
factors = findPrimeFactors(num);
console.log(`Prime factors of ${num} are: [${factors}]`);

num = 97;
factors = findPrimeFactors(num);
console.log(`Prime factors of ${num} are: [${factors}]`);

num = 84;
factors = findPrimeFactors(num);
console.log(`Prime factors of ${num} are: [${factors}]`);

num = 101;
factors = findPrimeFactors(num);
console.log(`Prime factors of ${num} are: [${factors}]`);
