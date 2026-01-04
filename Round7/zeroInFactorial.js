/**
 * Date: 4th Jan, 2026
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
  if (num < 5) return 0;

  let count = 0;
  while (num >= 5) {
    count = count + Math.floor(num / 5);
    num = Math.floor(num / 5);
  }

  return count;
}

let num = 5;
let count = findTrailingZeros(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 8;
count = findTrailingZeros(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 10;
count = findTrailingZeros(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 3;
count = findTrailingZeros(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 25;
count = findTrailingZeros(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 80;
count = findTrailingZeros(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 100;
count = findTrailingZeros(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);
