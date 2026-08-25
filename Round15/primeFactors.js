/**
 * Date: 25th August, 2026
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
function getPrimeFactors(number) {
  if (!number || number <= 1) return [];

  const factors = new Set();

  while (number % 2 === 0) {
    factors.add(2);
    number = number / 2;
  }

  while (number % 3 === 0) {
    factors.add(3);
    number = number / 3;
  }

  for (let i = 5; i <= Math.sqrt(number); i = i + 6) {
    if (number % i === 0) {
      factors.add(i);
      number = number / i;
    }

    if (number % (i + 2) === 0) {
      factors.add(i + 2);
      number = number / (i + 2);
    }
  }

  if (number > 1) {
    factors.add(number);
  }

  return [...factors];
}


let num = 28;
let factors = getPrimeFactors(num);
console.log(`Prime factors of ${num} are: [${factors}]`);

num = 45;
factors = getPrimeFactors(num);
console.log(`Prime factors of ${num} are: [${factors}]`);

num = 97;
factors = getPrimeFactors(num);
console.log(`Prime factors of ${num} are: [${factors}]`);

num = 84;
factors = getPrimeFactors(num);
console.log(`Prime factors of ${num} are: [${factors}]`);

num = 101;
factors = getPrimeFactors(num);
console.log(`Prime factors of ${num} are: [${factors}]`);

num = 4096;
factors = getPrimeFactors(num);
console.log(`Prime factors of ${num} are: [${factors}]`);

num = 40963248;
factors = getPrimeFactors(num);
console.log(`Prime factors of ${num} are: [${factors}]`);
