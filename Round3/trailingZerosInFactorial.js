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
function getTralingZerosCount(num) {
    // No trailing zero for num! if num < 5
    if(num < 5) return 0;

    let count = 0;
    while(num >= 5) {
        num = Math.floor(num/5);
        count = count + num;
    }
    return count;
}

let num = 5;
let count = getTralingZerosCount(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 8;
count = getTralingZerosCount(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 10;
count = getTralingZerosCount(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 3;
count = getTralingZerosCount(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 25;
count = getTralingZerosCount(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 80;
count = getTralingZerosCount(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);

num = 100;
count = getTralingZerosCount(num);
console.log(`No of Trailing zeros in ${num}! is/are: ${count}`);
