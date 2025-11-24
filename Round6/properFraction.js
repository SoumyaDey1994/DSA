/**
 * Date: 23rd Nov, 2025
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

function getCountOfProperFractions(num) {
  if (!num || num <= 1) return 0;

  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (hcf(i, num) === 1) {
      count++;
    }
  }

  return count;
}

function hcf(num1, num2) {
  if (num1 === 0) return num2;
  else return hcf(num2 % num1, num1);
}

let n = 5;
console.log(
  `No of proper fractions for N=${n} is: ${getCountOfProperFractions(n)}`
);

n = 6;
console.log(
  `No of proper fractions for N=${n} is: ${getCountOfProperFractions(n)}`
);

n = 7;
console.log(
  `No of proper fractions for N=${n} is: ${getCountOfProperFractions(n)}`
);

n = 12;
console.log(
  `No of proper fractions for N=${n} is: ${getCountOfProperFractions(n)}`
);
