/**
 * Date: 27th March, 2026
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
function countPrimes(n) {
  if (!n || n <= 1) return [];

  const aux = new Array(n + 1).fill(true);
  // 0 & 1 are not prime, hence marking it false
  aux[0] = false;
  aux[1] = false;

  const result = [];

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (aux[i]) {
      for (let j = i * 2; j <= n; j = j + i) {
        aux[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (aux[i]) result.push(i);
  }

  return result;
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
