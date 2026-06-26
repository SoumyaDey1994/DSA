/**
 * Date: 26th June, 2026
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
function findNoOfPrimes(n) {
  if (!n || n === 0) return 0;

  const primeList = new Array(n + 1).fill(true);
  primeList[0] = false;
  primeList[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primeList[i]) {
      for (let j = i * 2; j <= n; j = j + i) {
        primeList[j] = false;
      }
    }
  }

  const primes = primeList
    .map((curr, index) => {
      if (!curr) return false;

      return index;
    })
    .filter(Boolean);

  return primes;
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
