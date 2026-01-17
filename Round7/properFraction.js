/**
 * Date: 17th Jan, 2026
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
function findProperFractionsCount(num) {
  if (num <= 1) return 0;

  let count = 0;
  for (let i = 1; i < num; i++) {
    if (hcf(i, num) === 1) {
      count++;
    }
  }

  return count;
}

function hcf(numerator, denominator) {
  if (numerator === 0) return denominator;
  else return hcf(denominator % numerator, numerator);
}

let num = 5;
let coPrimes = findProperFractionsCount(num);
console.log(`No of Co-primes for N=${num} is: ${coPrimes}`);

num = 6;
coPrimes = findProperFractionsCount(num);
console.log(`No of Co-primes for N=${num} is: ${coPrimes}`);

num = 9;
coPrimes = findProperFractionsCount(num);
console.log(`No of Co-primes for N=${num} is: ${coPrimes}`);

num = 10;
coPrimes = findProperFractionsCount(num);
console.log(`No of Co-primes for N=${num} is: ${coPrimes}`);

num = 1;
coPrimes = findProperFractionsCount(num);
console.log(`No of Co-primes for N=${num} is: ${coPrimes}`);

num = 100;
coPrimes = findProperFractionsCount(num);
console.log(`No of Co-primes for N=${num} is: ${coPrimes}`);

num = 22;
coPrimes = findProperFractionsCount(num);
console.log(`No of Co-primes for N=${num} is: ${coPrimes}`);
