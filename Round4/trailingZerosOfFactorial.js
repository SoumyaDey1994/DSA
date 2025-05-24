/**
 * Date: 24th May, 2025
 * Problem Statement: Count of Trailing Zeros in Factorial
 * Given a integer N, find out the no of trailing zeros
 * it has in N!
 * Example 1:
 *      num = 5
 *      count = 1
 * Example 2:
 *      num = 10
 *      count = 2
 * Example 3:
 *      num = 3
 *      count = 0
 */
function findTrailingZeros(num) {
  if (!num) return;

  let count = 0;
  for (let i = 5; i <= num; i = i * 5) {
    count = count + Math.floor(num / i);
    num = num % i;
  }
  return count;
}

let num = 5;
console.log(`No of trailing 0s in ${num}! is: ${findTrailingZeros(num)}`);

num = 10;
console.log(`No of trailing 0s in ${num}! is: ${findTrailingZeros(num)}`);

num = 3;
console.log(`No of trailing 0s in ${num}! is: ${findTrailingZeros(num)}`);

num = 15;
console.log(`No of trailing 0s in ${num}! is: ${findTrailingZeros(num)}`);
