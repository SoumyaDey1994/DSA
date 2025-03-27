/**
 * Date: 27th March, 2025
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
function getPrimeFactors(num) {
  if (num <= 1) return []; // no prime factors for 0 & 1

  const primeFactors = new Set();
  // check if divisible by 2
  while (num % 2 === 0) {
    num = num / 2;
    primeFactors.add(2);
  }
  // check if divisible by 3
  while (num % 3 === 0) {
    num = num / 3;
    primeFactors.add(3);
  }
  // check for divisors from 5 to sqrt(num)
  // with increment 6
  for (let i = 5; i <= Math.sqrt(num); i = i + 6) {
    if (num % i === 0) {
      primeFactors.add(i);
      num = num / i;
    }

    if (num % (i + 2) === 0) {
      primeFactors.add(i + 2);
      num = num / (i + 2);
    }
  }

  if (num > 1) primeFactors.add(num);
  return [...primeFactors];
}

let num = 28;
console.log(`Prime Factors of ${num} are: [${getPrimeFactors(num)}]`);

num = 45;
console.log(`Prime Factors of ${num} are: [${getPrimeFactors(num)}]`);

num = 101;
console.log(`Prime Factors of ${num} are: [${getPrimeFactors(num)}]`);

num = 105 * 11;
console.log(`Prime Factors of ${num} are: [${getPrimeFactors(num)}]`);
