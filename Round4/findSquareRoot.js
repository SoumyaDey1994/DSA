/**
 * Date: 29th May, 2025
 * Problem Statement: Find Square Root using Binary Search
 * Given a non-negative integer x, we need to find the square root of x.
 * The result should be only the integer part (i.e., floor value of the actual square root).
 * You must not use built-in square root functions, and you should optimize the solution using binary search.
 * ✅ Constraints:
 *      Input: x is a non-negative integer
 *      Output: Return the largest integer r such that r * r <= x
 * Example 1:
 *      Input: x = 4
 *      Output: 2
 *      Explanation: √4 = 2
 * Example 2:
 *      Input: x = 8
 *      Output: 2
 *      Explanation: √8 ≈ 2.828, floor(√8) = 2
 * Example 3:
 *      Input: x = 0
 *      Output: 0
 *      Explanation: √0 = 0
 */
function findSquareRoot(num) {
  if (!num) return;
  if (num <= 1) return num;

  let left = 0,
    right = num;
  let result = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midSqr = mid * mid;
    const midSqrPlus1 = (mid + 1) * (mid + 1);
    if (midSqr <= num && midSqrPlus1 > num) {
      return mid;
    } else if (midSqr > num) {
      right = right - 1;
    } else {
      left = left + 1;
    }
  }
  return result;
}

let num = 4;
console.log(`Square Root of ${num} becomes: ${findSquareRoot(num)}`);

num = 8;
console.log(`Square Root of ${num} becomes: ${findSquareRoot(num)}`);

num = 25;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);

num = 80;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);

num = 101;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);

num = 624;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);

num = 385;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);

num = 169;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);
