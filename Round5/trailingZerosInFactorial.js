/**
 * Date: 18th July, 2025
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
  if (!num || num === 0) return 0;

  let count = 0;
  while (num >= 5) {
    count = count + Math.floor(num / 5);
    num = num % 5;
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
