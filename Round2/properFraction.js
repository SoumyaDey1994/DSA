/**
 * Date: 15th March, 2025
 * Problem Statement: Proper Fraction
 * For a given integer N (denominator),
 * we need to find the number of proper fractions that can be formed where:
 *      The numerator is less than N.
 *      The fraction is irreducible (i.e., the numerator and denominator are co-prime).
 * Example 1:
 *      Input: N = 5
 *      Output: 4
 *      Explanation:
 *          Valid Proper Fractions: 1/5, 2/5, 3/5, 4/5
 * Example 2:
 *      Input: N = 6
 *      Output: 2
 *      Explanation:
 *          Valid Proper Fractions: 1/6, 5/6
 */

function gcd(i, num) {
  if (i === 0) return num;
  else return gcd(num % i, i);
}

function gcdIterative(i, num) {
  while (i !== 0) {
    const temp = i;
    i = num % i;
    num = temp;
  }
  return num;
}

function getCountOfProperFractions(num) {
  let count = 0;
  for (let i = 1; i < num; i++) {
    if (gcdIterative(i, num) === 1) {
      count++;
    }
  }
  return count;
}

let num = 5;
let coPrimes = getCountOfProperFractions(num);
console.log(`No of Co-primes for N=${num} is: ${coPrimes}`);

num = 6;
coPrimes = getCountOfProperFractions(num);
console.log(`No of Co-primes for N=${num} is: ${coPrimes}`);

num = 9;
coPrimes = getCountOfProperFractions(num);
console.log(`No of Co-primes for N=${num} is: ${coPrimes}`);

num = 10;
coPrimes = getCountOfProperFractions(num);
console.log(`No of Co-primes for N=${num} is: ${coPrimes}`);
