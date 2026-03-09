/**
 * Date: 9th March, 2026
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
function findCountOfProperFractions(input) {
  if (!input || input === 0) return 0;

  let count = 0;

  for (let i = 1; i < input; i++) {
    if (gcd(i, input) === 1) {
      count++;
    }
  }

  return count;
}

function gcd(numerator, denominator) {
  if (numerator === 0) return denominator;

  return gcd(denominator % numerator, numerator);
}


let n = 5;
console.log(
  `No of proper fractions for N=${n} is: ${findCountOfProperFractions(n)}`,
);

n = 6;
console.log(
  `No of proper fractions for N=${n} is: ${findCountOfProperFractions(n)}`,
);

n = 7;
console.log(
  `No of proper fractions for N=${n} is: ${findCountOfProperFractions(n)}`,
);

n = 12;
console.log(
  `No of proper fractions for N=${n} is: ${findCountOfProperFractions(n)}`,
);
