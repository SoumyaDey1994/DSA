/**
 * Date: 12th September, 2026
 * Problem Statement: Count Primes (Sieve)
 * Given an integer n, count how many prime numbers are strictly less than n.
 * A prime number is a number greater than 1 that has only two divisors: 1 and itself
 * Example 1:
 *      Input: n=10
 *      Output: 4, [2, 3, 5, 7]
 * Example 2:
 *      Input: n=0
 *      Output: 0, []
 */
function findNoOfPrimes(number) {
  if (!number || number === 0) return;

  let primeList = new Array(number + 1).fill(true);
  primeList[0] = false;
  primeList[1] = false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    for (let j = i * 2; j <= primeList.length; j = j + i) {
      primeList[j] = false;
    }
  }

  const primeValues = primeList
    .map((curr, index) => (curr === true ? index : false))
    .filter(Boolean);

  return primeValues;
}

let n = 10;
let output = findNoOfPrimes(n);
console.log(
  `From 0 tp ${n}, prime numbers are: [${output}], count: ${output.length}`,
);

n = 1;
output = findNoOfPrimes(n);
console.log(
  `From 0 tp ${n}, prime numbers are: [${output}], count: ${output.length}`,
);

n = 35;
output = findNoOfPrimes(n);
console.log(
  `From 0 tp ${n}, prime numbers are: [${output}], count: ${output.length}`,
);

n = 100;
output = findNoOfPrimes(n);
console.log(
  `From 0 tp ${n}, prime numbers are: [${output}], count: ${output.length}`,
);

n = 107;
output = findNoOfPrimes(n);
console.log(
  `From 0 tp ${n}, prime numbers are: [${output}], count: ${output.length}`,
);
