/**
 * Date: 11th April, 2026
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
function countPrimes(num) {
  if (!num || num === 0) return 0;

  const primes = new Array(num + 1).fill(true);
  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (primes[i]) {
      for (let j = i * 2; j <= num; j = j + i) {
        primes[j] = false;
      }
    }
  }

  return primes.map((value, idx) => (value ? idx : false)).filter(Boolean);
}

let n = 10;
let output = countPrimes(n);
console.log(
  `From 0 tp ${n}, prime numbers are: [${output}], count: ${output.length}`,
);

n = 1;
output = countPrimes(n);
console.log(
  `From 0 tp ${n}, prime numbers are: [${output}], count: ${output.length}`,
);

n = 35;
output = countPrimes(n);
console.log(
  `From 0 tp ${n}, prime numbers are: [${output}], count: ${output.length}`,
);

n = 100;
output = countPrimes(n);
console.log(
  `From 0 tp ${n}, prime numbers are: [${output}], count: ${output.length}`,
);

n = 107;
output = countPrimes(n);
console.log(
  `From 0 tp ${n}, prime numbers are: [${output}], count: ${output.length}`,
);
