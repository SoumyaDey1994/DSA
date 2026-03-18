/**
 * Date: 18th March, 2026
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
 * 
 * Explanation: 10! = 1 x 2 x 3 x 4 x 5 x 6 x 7 x 8 x 9 x 10
 *                  = 2 x 3 x (2 x 2) x 5 x (2 x 3) x 7 x (2 x 2 x 2) x (3 x 3) x (2 x 5)
 *                  = (2 x 5) x (2 x 5) x (3 x 3 x 3 x 3) x (2 x 2 x ....) x 7
 *                  = So, 0 can appear twice as there are 2 5's, which will make 0
 */
function findTrailingZeros(num) {
  if (!num || num < 5) return 0;

  let count = 0;
  while (num >= 5) {
    num = Math.floor(num / 5);
    count = count + num;
  }

  return count;
}

let num = 5;
console.log(`No of trailing 0s in ${num}! is: ${findTrailingZeros(num)}`);

num = 8;
console.log(`No of trailing 0s in ${num}! is: ${findTrailingZeros(num)}`);

num = 10;
console.log(`No of trailing 0s in ${num}! is: ${findTrailingZeros(num)}`);

num = 3;
console.log(`No of trailing 0s in ${num}! is: ${findTrailingZeros(num)}`);

num = 15;
console.log(`No of trailing 0s in ${num}! is: ${findTrailingZeros(num)}`);

num = 25;
console.log(`No of trailing 0s in ${num}! is: ${findTrailingZeros(num)}`);

num = 80;
console.log(`No of trailing 0s in ${num}! is: ${findTrailingZeros(num)}`);

num = 100;
console.log(`No of trailing 0s in ${num}! is: ${findTrailingZeros(num)}`);
