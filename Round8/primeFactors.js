/**
 * Date: 16th Feb, 2026
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
function findAllPrimeFactors(num) {
  if (!num || num === 0) return [];

  const output = new Set();
  // check divisibility by 2
  while (num % 2 === 0) {
    output.add(2);
    num = num / 2;
  }

  // check divisibility by 3
  while (num % 3 === 0) {
    output.add(3);
    num = num / 3;
  }

  for (let i = 5; i <= Math.sqrt(num); i = i + 6) {
    // check divisibility by i
    while (num % i === 0) {
      output.add(i);
      num = num / i;
    }

    // check divisibility by (i+2)
    while (num % (i + 2) === 0) {
      output.add(i + 2);
      num = num / (i + 2);
    }
  }
  // Leftover num is prime for sure
  if (num > 0) {
    output.add(num);
  }

  return [...output];
}

let num = 28;
console.log(`Prime Factors of ${num} are: [${findAllPrimeFactors(num)}]`);

num = 45;
console.log(`Prime Factors of ${num} are: [${findAllPrimeFactors(num)}]`);

num = 101;
console.log(`Prime Factors of ${num} are: [${findAllPrimeFactors(num)}]`);

num = 105 * 11;
console.log(`Prime Factors of ${num} are: [${findAllPrimeFactors(num)}]`);

num = 999;
console.log(`Prime Factors of ${num} are: [${findAllPrimeFactors(num)}]`);
