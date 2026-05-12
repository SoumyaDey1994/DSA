/**
 * Date: 12th May, 2026
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
function findNoOfPrimes(num) {
  if (!num || num === 0) return 0;

  const aux = new Array(num + 1).fill(true);
  aux[0] = false;
  aux[1] = false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (aux[i]) {
      for (let j = i * 2; j <= num; j = j + i) {
        aux[j] = false;
      }
    }
  }

  //   console.log(aux);
  return aux.map((curr, idx) => (curr === true ? idx : false)).filter(Boolean);
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
