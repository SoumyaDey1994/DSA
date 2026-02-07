/**
 * Date: 10th April, 2025
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
function findTrailingZeroCount(num) {
  if (!num || num < 5) return 0;

  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 5);
    count = count + num;
  }

  return count;
}

let num = 5;
let count = findTrailingZeroCount(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 8;
count = findTrailingZeroCount(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 10;
count = findTrailingZeroCount(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 3;
count = findTrailingZeroCount(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 25;
count = findTrailingZeroCount(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 80;
count = findTrailingZeroCount(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 100;
count = findTrailingZeroCount(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);
