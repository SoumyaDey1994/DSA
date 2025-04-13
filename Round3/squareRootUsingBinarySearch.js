/**
 * Date: 13th April, 2025
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
  if (num <= 1) return 1;

  let low = 1, high = num;
  let result = 0;
  // check if mid^2 <= num & (mid+1)^2 > num or not
  // if yes, return mid
  // else, adjust the low & high accordingly
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midSquare = mid * mid;
    const midPlusOneSquare = mid * mid + 2 * mid + 1;
    if (midSquare <= num && midPlusOneSquare > num) {
      return mid;
    } else if (midSquare > num) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return result;
}

let num = 4;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);

num = 8;
console.log(`Square Root of ${num} is: ${findSquareRoot(num)}`);

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
